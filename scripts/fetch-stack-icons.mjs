#!/usr/bin/env node
// Downloads the real, official SVG mark for every tool in the "stack"
// panel — devicon.dev by default, or simple-icons for the handful of
// tools devicon doesn't catalog (set via `iconSource` in
// render-content.mjs) — and caches the raw markup in
// scripts/design-system/render/stack-icons.json. build-html.mjs inlines
// that markup directly as <svg> in the panel — a real vector icon, not a
// screenshotted <img>, recolored to match the design system (see
// scripts/lib/icon-colors.mjs).
import { mkdir, writeFile } from "node:fs/promises";
import { sections } from "./render-content.mjs";
import { namespaceIds, toLimeScale } from "./lib/icon-colors.mjs";

const DEVICON_VERSION = "2.16.0";
const SIMPLE_ICONS_VERSION = "13.21.0";
const OUT = new URL("design-system/render/stack-icons.json", import.meta.url);

const stack = sections.find((s) => s.id === "stack");
if (!stack) {
  console.error("No 'stack' section found in render-content.mjs");
  process.exit(1);
}

function sourceUrl(source, slug) {
  if (source === "simple-icons") return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`;
  return `https://cdn.jsdelivr.net/npm/devicon@${DEVICON_VERSION}/icons/${slug}.svg`;
}

async function fetchIcon(tag) {
  const source = tag.iconSource || "devicon";
  const url = sourceUrl(source, tag.icon);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return { source, svg: toLimeScale(namespaceIds((await res.text()).trim(), tag.id)) };
}

async function main() {
  const icons = {};
  for (const cat of stack.categories) {
    for (const tag of cat.tags) {
      const { source, svg } = await fetchIcon(tag);
      icons[tag.id] = svg;
      console.log(`fetched ${tag.id} <- ${source}/${tag.icon}`);
    }
  }
  await mkdir(new URL("./", OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(icons, null, 2) + "\n", "utf8");
  console.log(`wrote scripts/design-system/render/stack-icons.json (${Object.keys(icons).length} icons)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
