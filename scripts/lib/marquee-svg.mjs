// Builds the scrolling ribbon as a real, native SVG — not a screenshot.
// GitHub doesn't run JS/CSS in a README, but an <img src="*.svg"> IS still
// a live SVG document: native CSS @keyframes and SVG attributes on it DO
// animate (this is the same trick behind every "animated typing" GitHub
// badge). That's also why this isn't built from a DOM screenshot: no
// raster step, so the text stays perfectly crisp at any size, and the
// file is a few KB instead of a multi-MB GIF.
//
// Text width can't be measured without a real layout engine, so instead
// of guessing it, every label is force-fit to a width *we* chose via
// SVG's `textLength` + `lengthAdjust="spacingAndGlyphs"`. That makes the
// tiling math exact (no gaps or overlaps where the loop seams), at the
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

export function buildMarqueeSvg({
  width,
  height,
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

  function renderTile(offsetX) {
    let x = offsetX;
    const parts = [];
    for (const u of units) {
      x += padInline;
      parts.push(
        `<text x="${x.toFixed(1)}" y="50%" dominant-baseline="central" textLength="${u.textW.toFixed(1)}" lengthAdjust="spacingAndGlyphs">${escapeXml(u.label)}</text>`
      );
      x += u.textW + gap;
      parts.push(
        `<text x="${x.toFixed(1)}" y="50%" dominant-baseline="central" font-size="${sepFontSize.toFixed(1)}" textLength="${sepW.toFixed(1)}" lengthAdjust="spacingAndGlyphs">${separator}</text>`
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

  const r = Math.min(radius, height / 2, width / 2);
  const w = width.toFixed(1);
  const h = height.toFixed(1);
  // Square top corners (butts against the static panel above with no
  // gap), rounded bottom corners (matches --radius-xl, the card's own).
  const clipPath = `M0,0 L${w},0 L${w},${(height - r).toFixed(1)} A${r},${r} 0 0 1 ${(width - r).toFixed(1)},${h} L${r.toFixed(1)},${h} A${r},${r} 0 0 1 0,${(height - r).toFixed(1)} Z`;
  // Same outline, but starting and ending at the top corners with no `Z` —
  // an open path that skips the top edge entirely. The top is an internal
  // seam against the static PNG above, not a real edge of the card, so it
  // must not get a stroke (that stroke was showing up as a stray line
  // right at the seam between the two stacked images).
  const borderPath = `M${w},0 L${w},${(height - r).toFixed(1)} A${r},${r} 0 0 1 ${(width - r).toFixed(1)},${h} L${r.toFixed(1)},${h} A${r},${r} 0 0 1 0,${(height - r).toFixed(1)} L0,0`;

  const cx = (width / 2).toFixed(1);
  const cy = (height / 2).toFixed(1);

  // The live design rotates the whole band (a `div` sized to its text's
  // natural height), not just the text inside an axis-aligned strip — that
  // rotation is what lets slivers of the card's own background peek
  // through at the band's corners. Replicate that: a band rect, shorter
  // than the full viewBox height, rotated with the text and over-widened
  // so its rotated edges still clear the viewBox on both sides.
  const bandPaddingBlock = fontSize * 0.45; // more breathing room above/below the text than the live Marquee's own .28 — a deliberate departure, not a measurement
  const bandHeight = fontSize + 2 * bandPaddingBlock;
  const bandMarginX = Math.abs(height * Math.tan((tilt * Math.PI) / 180)) + 48;
  const bandX = (-bandMarginX).toFixed(1);
  const bandW = (width + 2 * bandMarginX).toFixed(1);
  const bandY = ((height - bandHeight) / 2).toFixed(1);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-label="${escapeXml(items.join(" · "))}">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&amp;display=swap');
  .track { animation: ds-marquee-scroll ${duration.toFixed(2)}s linear infinite; }
  @keyframes ds-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(${(-tileWidth).toFixed(1)}px); } }
  text { font-family: "Bricolage Grotesque","Helvetica Neue",Arial,sans-serif; font-weight: 700; letter-spacing: -0.02em; text-transform: uppercase; fill: ${fg}; }
  @media (prefers-reduced-motion: reduce) { .track { animation-play-state: paused; } }
</style>
<clipPath id="clip"><path d="${clipPath}"/></clipPath>
<g clip-path="url(#clip)">
  <rect x="0" y="0" width="${w}" height="${h}" fill="${cardBg}"/>
  <g transform="rotate(${tilt} ${cx} ${cy})">
    <rect x="${bandX}" y="${bandY}" width="${bandW}" height="${bandHeight.toFixed(1)}" fill="${bandBg}" stroke="${bandBorderColor}" stroke-width="${borderWidth}"/>
    <g class="track" font-size="${fontSize}">
      ${rowMarkup}
    </g>
  </g>
</g>
<path d="${borderPath}" fill="none" stroke="${borderColor}" stroke-width="${borderWidth}"/>
</svg>
`;
}
