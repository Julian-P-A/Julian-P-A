// Wraps a recolored social icon (see fetch-social-icons.mjs) in a pill
// button — icon + the real handle — styled like the rest of the design
// system's dark, lime-bordered chips (IconButton's "outline" variant,
// Tag). These are the real, working contact links at the bottom of the
// README, so they read as actual buttons with the account name on them,
// not bare floating glyphs.
const escapeXml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Every icon we fetch (lucide, simple-icons) ships as a single top-level
// <svg viewBox="0 0 24 24">...</svg>; pull out just the inner markup so it
// can be re-mounted (scaled, centered) inside the button's own <svg>.
function innerMarkup(svg) {
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const body = match ? match[1] : svg;
  return body.replace(/<title>[\s\S]*?<\/title>/, "");
}

// Stroke-drawn icons (lucide's mail) set fill/stroke/stroke-width etc. as
// presentation attributes on the root <svg>, inherited by its children —
// extracting just the inner markup drops that root, and with it the
// inheritance, leaving the shape filled solid black instead of a light
// outline. Pull those attributes forward onto the wrapping <g> instead.
function rootPresentationAttrs(svg) {
  const open = svg.match(/<svg([^>]*)>/);
  const attrs = open ? open[1] : "";
  const names = ["fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"];
  return names
    .map((name) => {
      const m = attrs.match(new RegExp(`${name}="([^"]*)"`));
      return m ? `${name}="${m[1]}"` : "";
    })
    .filter(Boolean)
    .join(" ");
}

export function buildSocialButtonSvg({
  iconSvg,
  label,
  handle,
  height = 40,
  iconSize = 18,
  fontSize = 14,
  padX = 16,
  gap = 10,
  bg = "#0D0D0B", // --ink-900 — a solid, self-contained badge reads the same in GitHub's light and dark README themes
  borderColor = "rgba(214,255,92,.4)", // --lime-400 at low opacity, echoing IconButton's outline border without needing the page's own tokens
  borderWidth = 1.5,
  textColor = "#FAF8F3", // --paper-50
}) {
  // Handles are real usernames, not prose — force-fit at a monospace
  // advance width instead of guessing, same technique as the marquee
  // ribbon (scripts/lib/marquee-svg.mjs): exact, no layout engine needed.
  const charW = fontSize * 0.6;
  const textWidth = handle.length * charW;
  const width = padX + iconSize + gap + textWidth + padX;
  const r = height / 2;
  const iconY = ((height - iconSize) / 2).toFixed(1);
  const textX = (padX + iconSize + gap).toFixed(1);
  const scale = (iconSize / 24).toFixed(4); // every source icon is viewBox 0 0 24 24
  const inherited = rootPresentationAttrs(iconSvg);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width.toFixed(1)} ${height}" width="${width.toFixed(1)}" height="${height}" role="img" aria-label="${escapeXml(label)}: ${escapeXml(handle)}">
<rect x="${(borderWidth / 2).toFixed(2)}" y="${(borderWidth / 2).toFixed(2)}" width="${(width - borderWidth).toFixed(1)}" height="${height - borderWidth}" rx="${(r - borderWidth / 2).toFixed(1)}" fill="${bg}" stroke="${borderColor}" stroke-width="${borderWidth}"/>
<g transform="translate(${padX},${iconY}) scale(${scale})"${inherited ? " " + inherited : ""}>${innerMarkup(iconSvg)}</g>
<text x="${textX}" y="${height / 2}" dominant-baseline="central" font-family="&quot;JetBrains Mono&quot;,ui-monospace,monospace" font-weight="500" font-size="${fontSize}" fill="${textColor}" textLength="${textWidth.toFixed(1)}" lengthAdjust="spacingAndGlyphs">${escapeXml(handle)}</text>
</svg>
`;
}
