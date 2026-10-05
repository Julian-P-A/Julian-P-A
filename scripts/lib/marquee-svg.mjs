// Builds a whole hero/contact panel as ONE real SVG — not two stacked
// images. GitHub doesn't run JS/CSS in a README, but an <img src="*.svg">
// IS still a live SVG document: native CSS @keyframes and SVG attributes
// on it DO animate (this is the same trick behind every "animated typing"
// GitHub badge). The static part of the panel (headline, body copy — real
// browser text layout, no approximation) is still a Puppeteer screenshot;
// it's just embedded as a base64 <image> inside this same document instead
// of living in its own file, so the whole panel is one asset, one <img>
// tag in README.md, with no seam to keep aligned between two files.
//
// Text width can't be measured without a real layout engine, so instead
// of guessing it, every ribbon label is force-fit to a width *we* chose
// via SVG's `textLength` + `lengthAdjust="spacingAndGlyphs"`. That makes
// the tiling math exact (no gaps or overlaps where the loop seams), at the
// cost of very slightly stretching/compressing letterforms from their
// natural advance widths — imperceptible at these small deltas.
const escapeXml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// One tile's width (items + separators, forced to our own estimated
// widths — see the file header) at a given font size. Exported so callers
// can derive a shared px/sec rate across panels with different content
// lengths without duplicating this formula (see capture.mjs).
export function computeTileWidth(items, fontSize) {
  const charW = fontSize * 0.6; // avg advance width for a bold condensed grotesque, uppercase
  const gap = fontSize * 0.45; // matches the live component's `gap: size * .45`
  const padInline = fontSize * 0.225; // matches `paddingInline: size * .225`
  const sepW = fontSize * 0.5 * 0.75;
  const unitWidth = (label) => padInline + label.length * charW + gap + sepW + gap + padInline;
  return items.reduce((sum, label) => sum + unitWidth(label), 0);
}

export function buildPanelSvg({
  width,
  topHeight, // height of the static (screenshotted) part
  topImageBase64, // raw base64 PNG data for that static part, no `data:` prefix
  stripHeight, // height of the animated ribbon below it
  tilt = 0,
  cardBg, // the card's own background — shows through at the band's corners, same as the live rotated+clipped design
  bandBg, // the ribbon's own tone color
  fg,
  borderColor,
  borderWidth = 1.5,
  bandBorderColor = "#0D0D0B", // live component always uses var(--ink-900) for the band's own top/bottom rule, regardless of tone
  items,
  separator = "✦",
  fontSize,
  radius = 36,
  speedSec = 30,
  pxPerSec, // when given, overrides speedSec: duration = tileWidth / pxPerSec, so panels with different content lengths still scroll at the same visual speed
}) {
  const charW = fontSize * 0.6; // avg advance width for a bold condensed grotesque, uppercase
  const gap = fontSize * 0.45; // matches the live component's `gap: size * .45`
  const padInline = fontSize * 0.225; // matches `paddingInline: size * .225`
  const sepFontSize = fontSize * 0.5;
  const sepW = sepFontSize * 0.75;

  const units = items.map((label) => ({ label, textW: label.length * charW }));
  const unitWidth = (u) => padInline + u.textW + gap + sepW + gap + padInline;
  const tileWidth = units.reduce((sum, u) => sum + unitWidth(u), 0);
  const duration = pxPerSec ? tileWidth / pxPerSec : speedSec;

  // `y="50%"` would resolve against the nearest viewport — the combined
  // panel's full-height root <svg>, not this ribbon's own local box, since
  // the ancestor <g transform="translate(...)"> around it doesn't
  // establish a new one — so text landed far outside the clipped strip
  // and vanished. An explicit pixel value stays local to this group.
  const textY = (stripHeight / 2).toFixed(1);

  function renderTile(offsetX) {
    let x = offsetX;
    const parts = [];
    for (const u of units) {
      x += padInline;
      parts.push(
        `<text x="${x.toFixed(1)}" y="${textY}" dominant-baseline="central" textLength="${u.textW.toFixed(1)}" lengthAdjust="spacingAndGlyphs">${escapeXml(u.label)}</text>`
      );
      x += u.textW + gap;
      parts.push(
        `<text x="${x.toFixed(1)}" y="${textY}" dominant-baseline="central" font-size="${sepFontSize.toFixed(1)}" textLength="${sepW.toFixed(1)}" lengthAdjust="spacingAndGlyphs">${separator}</text>`
      );
      x += sepW + gap + padInline;
    }
    return parts.join("");
  }

  // Enough back-to-back tile copies to always fill the viewBox, no matter
  // how narrow a single tile is relative to it: translating by exactly one
  // tile's width has to land on an identical copy at every point along the
  // way, not just at the start/end.
  const copies = Math.max(2, Math.ceil(width / tileWidth) + 1);
  const rowMarkup = Array.from({ length: copies }, (_, i) => renderTile(i * tileWidth)).join("");

  const r = Math.min(radius, stripHeight / 2, width / 2);
  const w = width.toFixed(1);
  const sh = stripHeight.toFixed(1);
  // Square top corners (butts against the screenshotted part right above
  // it with no gap), rounded bottom corners (matches --radius-xl, the
  // card's own — these coordinates are local to the ribbon's own box; the
  // wrapping <g transform="translate(0, topHeight)"> below positions it).
  const clipPath = `M0,0 L${w},0 L${w},${(stripHeight - r).toFixed(1)} A${r},${r} 0 0 1 ${(width - r).toFixed(1)},${sh} L${r.toFixed(1)},${sh} A${r},${r} 0 0 1 0,${(stripHeight - r).toFixed(1)} Z`;
  // Same outline, but starting and ending at the top corners with no `Z` —
  // an open path that skips the top edge entirely. The top is an internal
  // seam against the screenshot right above it, not a real edge of the
  // card, so it must not get a stroke (that stroke was showing up as a
  // stray line right at the seam).
  const borderPath = `M${w},0 L${w},${(stripHeight - r).toFixed(1)} A${r},${r} 0 0 1 ${(width - r).toFixed(1)},${sh} L${r.toFixed(1)},${sh} A${r},${r} 0 0 1 0,${(stripHeight - r).toFixed(1)} L0,0`;

  const cx = (width / 2).toFixed(1);
  const cy = (stripHeight / 2).toFixed(1);

  // The live design rotates the whole band (a `div` sized to its text's
  // natural height), not just the text inside an axis-aligned strip — that
  // rotation is what lets slivers of the card's own background peek
  // through at the band's corners. Replicate that: a band rect, shorter
  // than the full ribbon height, rotated with the text and over-widened so
  // its rotated edges still clear the ribbon box on both sides.
  const bandPaddingBlock = fontSize * 0.45; // more breathing room above/below the text than the live Marquee's own .28 — a deliberate departure, not a measurement
  const bandHeight = fontSize + 2 * bandPaddingBlock;
  const bandMarginX = Math.abs(stripHeight * Math.tan((tilt * Math.PI) / 180)) + 48;
  const bandX = (-bandMarginX).toFixed(1);
  const bandW = (width + 2 * bandMarginX).toFixed(1);
  const bandY = ((stripHeight - bandHeight) / 2).toFixed(1);

  const totalHeight = (topHeight + stripHeight).toFixed(1);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${totalHeight}" width="100%" role="img" aria-label="${escapeXml(items.join(" · "))}">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&amp;display=swap');
  .track { animation: ds-marquee-scroll ${duration.toFixed(2)}s linear infinite; }
  @keyframes ds-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(${(-tileWidth).toFixed(1)}px); } }
  text { font-family: "Bricolage Grotesque","Helvetica Neue",Arial,sans-serif; font-weight: 700; letter-spacing: -0.02em; text-transform: uppercase; fill: ${fg}; }
  @media (prefers-reduced-motion: reduce) { .track { animation-play-state: paused; } }
</style>
<image x="0" y="0" width="${w}" height="${(topHeight + 0.5).toFixed(1)}" preserveAspectRatio="none" href="data:image/png;base64,${topImageBase64}"/>
<g transform="translate(0,${topHeight.toFixed(1)})">
  <clipPath id="clip"><path d="${clipPath}"/></clipPath>
  <g clip-path="url(#clip)">
    <rect x="0" y="0" width="${w}" height="${sh}" fill="${cardBg}"/>
    <g transform="rotate(${tilt} ${cx} ${cy})">
      <rect x="${bandX}" y="${bandY}" width="${bandW}" height="${bandHeight.toFixed(1)}" fill="${bandBg}" stroke="${bandBorderColor}" stroke-width="${borderWidth}"/>
      <g class="track" font-size="${fontSize}">
        ${rowMarkup}
      </g>
    </g>
  </g>
  <path d="${borderPath}" fill="none" stroke="${borderColor}" stroke-width="${borderWidth}"/>
</g>
</svg>
`;
}
