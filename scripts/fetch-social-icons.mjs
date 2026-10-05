#!/usr/bin/env node
// Downloads the real SVG mark for each contact link (lucide-static for the
// generic mail glyph, simple-icons for the brand marks), recolors it to
// match the design system (scripts/lib/icon-colors.mjs), mounts it with
// its real handle in a pill button (scripts/lib/social-button-svg.mjs) and
// writes a standalone file per icon to assets/social/. These are NOT
// screenshotted — README.md references them directly as <img> inside a
// real <a href>, so unlike every other panel, this row is actually
// clickable on GitHub.
import { mkdir, writeFile } from "node:fs/promises";
import { socialLinks } from "./social-links.mjs";
import { toLimeScale } from "./lib/icon-colors.mjs";
import { buildSocialButtonSvg } from "./lib/social-button-svg.mjs";

const LUCIDE_VERSION = "0.460.0";
const SIMPLE_ICONS_VERSION = "13.21.0";
const OUT_DIR = new URL("../assets/social/", import.meta.url);

function sourceUrl({ source, slug }) {
  if (source === "lucide") return `https://unpkg.com/lucide-static@${LUCIDE_VERSION}/icons/${slug}.svg`;
  if (source === "simple-icons") return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`;
  throw new Error(`Unknown icon source: ${source}`);
}

async function fetchIcon(link) {
  const url = sourceUrl(link);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return toLimeScale((await res.text()).trim());
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const link of socialLinks) {
    const icon = await fetchIcon(link);
    const button = buildSocialButtonSvg({ iconSvg: icon, label: link.label, handle: link.handle });
    await writeFile(new URL(`${link.id}.svg`, OUT_DIR), button, "utf8");
    console.log(`wrote assets/social/${link.id}.svg <- ${link.source}/${link.slug}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
