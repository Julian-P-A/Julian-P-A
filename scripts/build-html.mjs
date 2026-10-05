#!/usr/bin/env node
// Writes one standalone HTML file per panel under
// scripts/design-system/render/<id>.html. Each loads the REAL design
// system (styles.css + tokens + the compiled _ds_bundle.js component
// bundle) plus React from a CDN, and mounts the real SectionHeader /
// Badge / Tag / Marquee / Button components via render.js. Open each in a
// browser at 1200px width and screenshot the #root element to regenerate
// the PNGs in assets/.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { sections } from "./render-content.mjs";

const OUT_DIR = new URL("design-system/render/", import.meta.url);
const CONTRIB_DATA = new URL("design-system/render/contributions-data.json", import.meta.url);
const STACK_ICONS = new URL("design-system/render/stack-icons.json", import.meta.url);

async function withStackIcons(section) {
  if (section.id !== "stack") return section;
  try {
    const icons = JSON.parse(await readFile(STACK_ICONS, "utf8"));
    return {
      ...section,
      categories: section.categories.map((cat) => ({ ...cat, tags: cat.tags.map((t) => ({ ...t, svg: icons[t.id] })) })),
    };
  } catch {
    console.warn(
      "No stack-icons.json found — run `node scripts/fetch-stack-icons.mjs` first. Tags will render without icons."
    );
    return section;
  }
}

async function withContributionsData(section) {
  if (section.id !== "contributions") return section;
  try {
    const cal = JSON.parse(await readFile(CONTRIB_DATA, "utf8"));
    return {
      ...section,
      calendar: cal.weeks,
      description: cal.live
        ? `${cal.totalContributions} contribuciones en los últimos 12 meses.`
        : "Se actualiza a diario vía GitHub Actions.",
    };
  } catch {
    console.warn(
      "No contributions-data.json found — run `node scripts/fetch-contributions.mjs` first. Writing an empty grid."
    );
    const weeks = Array.from({ length: 53 }, () => ({
      contributionDays: Array.from({ length: 7 }, (_, weekday) => ({ date: "", contributionCount: 0, weekday })),
    }));
    return { ...section, calendar: weeks, description: "Se actualiza a diario vía GitHub Actions." };
  }
}

function page(section) {
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="../styles.css">
<style>html,body{margin:0;background:transparent}#root{width:1200px;display:inline-block}</style>
</head>
<body>
<div id="root"></div>
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="../_ds_bundle.js"></script>
<script>window.__CONTENT__ = ${JSON.stringify(section)};</script>
<script src="render.js"></script>
</body></html>
`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const raw of sections) {
    const section = await withStackIcons(await withContributionsData(raw));
    await writeFile(new URL(`${section.id}.html`, OUT_DIR), page(section), "utf8");
    console.log(`wrote scripts/design-system/render/${section.id}.html`);
  }
}

main();
