#!/usr/bin/env node
// Fetches the public contribution calendar via the GitHub GraphQL API and
// writes it as JSON for build-html.mjs to fold into the "contributions"
// section's content. Needs a token with public read access in GH_TOKEN or
// GITHUB_TOKEN (the default Actions token works since this data is public).
import { mkdir, writeFile } from "node:fs/promises";

const LOGIN = process.env.GH_LOGIN || "Julian-P-A";
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const OUT = new URL("design-system/render/contributions-data.json", import.meta.url);

function placeholderCalendar() {
  const weeks = Array.from({ length: 53 }, () => ({
    contributionDays: Array.from({ length: 7 }, (_, weekday) => ({ date: "", contributionCount: 0, weekday })),
  }));
  return { totalContributions: 0, weeks, live: false };
}

async function fetchCalendar() {
  if (!TOKEN) {
    console.warn("No GH_TOKEN / GITHUB_TOKEN set — writing an empty placeholder.");
    return placeholderCalendar();
  }
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks { contributionDays { date contributionCount weekday } }
          }
        }
      }
    }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json", "User-Agent": LOGIN },
    body: JSON.stringify({ query, variables: { login: LOGIN } }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return { ...json.data.user.contributionsCollection.contributionCalendar, live: true };
}

async function main() {
  const cal = await fetchCalendar();
  await mkdir(new URL("design-system/render/", import.meta.url), { recursive: true });
  await writeFile(OUT, JSON.stringify(cal), "utf8");
  console.log(`wrote scripts/design-system/render/contributions-data.json (${cal.totalContributions} contributions, live=${cal.live})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
