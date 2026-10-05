#!/usr/bin/env node
// Renders each scripts/design-system/render/<id>.html with a real headless
// Chromium (Puppeteer) and screenshots the #root element exactly — real
// fonts, real component code, real browser text layout. No approximation.
//
// Panels with a marquee (hero, contact) are special-cased: GitHub's README
// doesn't run JS/CSS, so the live, screenshotted ribbon can't actually
// scroll there. Each of those panels is written as ONE combined SVG
// instead of a plain PNG — scripts/lib/marquee-svg.mjs embeds the
// screenshotted static part (headline, body copy) as a base64 <image>
// inside the same document as the hand-built, animated ribbon. An
// <img src="*.svg"> is still a live SVG document, so its own @keyframes
// genuinely animate in the README — no raster step for the ribbon, so
// it's crisp at any size, and it's one file/one <img> tag, not two
// stacked images with a seam to keep aligned. See the "data-capture"
// attributes in design-system/render/render.js.
import puppeteer from "puppeteer";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import { sections } from "./render-content.mjs";
import { buildPanelSvg, computeTileWidth } from "./lib/marquee-svg.mjs";

const RENDER_DIR = new URL("design-system/render/", import.meta.url);
const ASSETS_DIR = new URL("../assets/", import.meta.url);

// Optional: `node scripts/capture.mjs hero contact` captures just those
// ids instead of re-rendering everything.
const only = process.argv.slice(2);
const targets = only.length ? sections.filter((s) => only.includes(s.id)) : sections;

// Resolved design tokens (tokens/colors.css) the ribbon SVG needs — it's a
// hand-built file, not a DOM screenshot, so these can't be read live.
const TONE_COLORS = {
  lime: { bg: "#D6FF5C", fg: "#0D0D0B" }, // --lime-400, --ink-900
  ink: { bg: "#0D0D0B", fg: "#FAF8F3" }, // --ink-900, --paper-50
};
// Each panel's own outline() border color (a property of the card, not the
// ribbon's tone — see design-system/render/render.js).
const SECTION_BORDER = {
  hero: "rgba(241,238,230,.12)", // outline() default: var(--border-subtle), dark theme
  contact: "rgba(13,13,11,.3)", // outline("lime")
};
// Each panel's own card background — shows through at the rotated band's
// corners, same as the live design. Always the opposite of the ribbon's
// own tone (see render-content.mjs: hero is a dark card with a lime
// ribbon, contact is a lime card with a dark ribbon).
const SECTION_BG = {
  hero: "#0D0D0B", // --surface-page (dark theme) = --ink-900
  contact: "#D6FF5C", // --lime-400
};

// Every ribbon scrolls at the same visual speed (px/sec), not the same
// loop duration — a short tile (contact's single "Hablemos") looping in
// the same 30s as hero's much longer tile would otherwise crawl, which is
// what made them feel out of sync. The hero panel's own 30s pace is the
// reference everything else matches.
const HERO_SECTION = sections.find((s) => s.id === "hero");
const MARQUEE_PX_PER_SEC = computeTileWidth(HERO_SECTION.marquee.items, HERO_SECTION.marquee.size) / 30;

async function unlinkIfExists(url) {
  await unlink(url).catch(() => {});
}

async function captureMarqueePanel(page, id, marquee) {
  const sectionBox = await (await page.$('[data-capture="section"]')).boundingBox();
  const marqueeBox = await (await page.$('[data-capture="marquee"]')).boundingBox();
  const tiltDeg = marquee.tilt || 0;

  // The ribbon itself is CSS-rotated (tilt), which doesn't affect layout —
  // the wrapper div's boundingBox() is its un-rotated flow box, but the
  // rotated content visually rises above that box's top edge by roughly
  // half-width * sin(tilt). Move the split line up by that much (+ a small
  // margin) so the screenshot doesn't cut through the rotated ribbon.
  const splitY = marqueeBox.y - Math.abs(sectionBox.width * Math.sin((tiltDeg * Math.PI) / 180)) - 6;
  const topHeight = splitY - sectionBox.y;
  const stripHeight = sectionBox.y + sectionBox.height - splitY;

  // Static top as a base64 buffer, not a file of its own — it gets
  // embedded directly in the combined SVG below. omitBackground: without
  // it Puppeteer paints the page's "transparent" CSS background as opaque
  // white, so the card's top rounded corners (a screenshot is always a
  // rectangle) would show up as white — invisible on GitHub's light
  // theme, glaring on dark.
  const topImageBase64 = await page.screenshot({
    clip: { x: sectionBox.x, y: sectionBox.y, width: sectionBox.width, height: topHeight },
    omitBackground: true,
    encoding: "base64",
  });

  const tone = TONE_COLORS[marquee.tone] || TONE_COLORS.lime;
  const svg = buildPanelSvg({
    width: sectionBox.width,
    topHeight,
    topImageBase64,
    stripHeight,
    tilt: tiltDeg,
    cardBg: SECTION_BG[id] || SECTION_BG.hero,
    bandBg: tone.bg,
    fg: tone.fg,
    borderColor: SECTION_BORDER[id] || SECTION_BORDER.hero,
    items: marquee.items,
    fontSize: marquee.size,
    pxPerSec: MARQUEE_PX_PER_SEC,
  });

  await writeFile(new URL(`${id}.svg`, ASSETS_DIR).pathname, svg, "utf8");
  // Stale files from the old two-file (PNG + separate ribbon SVG) layout.
  await unlinkIfExists(new URL(`${id}.png`, ASSETS_DIR));
  await unlinkIfExists(new URL(`${id}-marquee.svg`, ASSETS_DIR));
  console.log(`wrote assets/${id}.svg`);
}

async function main() {
  await mkdir(ASSETS_DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true });
  try {
    for (const s of targets) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
      const url = new URL(`${s.id}.html`, RENDER_DIR).href;
      await page.goto(url, { waitUntil: "networkidle0" });
      await page.evaluate(() => document.fonts.ready);
      // Icons load as CSS mask-image URLs, which aren't awaited by
      // document.fonts.ready or networkidle0 reliably — give them a beat.
      await new Promise((r) => setTimeout(r, 400));

      if (s.marquee) {
        await captureMarqueePanel(page, s.id, s.marquee);
      } else {
        const root = await page.$("#root");
        const outPath = new URL(`${s.id}.png`, ASSETS_DIR).pathname;
        // omitBackground: see the comment in captureMarqueePanel — without
        // it the card's rounded corners get opaque white squares behind them.
        await root.screenshot({ path: outPath, omitBackground: true });
        console.log(`wrote assets/${s.id}.png`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
