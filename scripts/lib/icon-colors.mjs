// Shared by fetch-stack-icons.mjs and fetch-social-icons.mjs: recolors a
// fetched brand SVG entirely in shades of the design system's own accent
// green (tokens/colors.css --lime-*), so every icon in the README reads as
// one color family instead of a row of unrelated brand hues.
export const LIME_SCALE = ["#6E8A0B", "#C6F432", "#D6FF5C", "#E4FF8A"]; // lime-700, 500, 400, 300

export function normalizeHex(hex) {
  const h = hex.replace("#", "").toLowerCase();
  return "#" + (h.length === 3 ? h.split("").map((c) => c + c).join("") : h);
}

export function luminance(hex) {
  const h = normalizeHex(hex).slice(1);
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// A few devicon marks (nextjs, vite, astro) define gradients with short,
// generic ids ("a", "b"). Once several raw SVGs are inlined into the same
// document those ids collide and the browser resolves url(#a) against
// whichever <linearGradient id="a"> happens to come last, silently
// breaking the earlier icons' fills. Prefix every id with the tag's own
// id so each icon keeps its own, unambiguous reference. Only needed for
// icons that get inlined together into one page (the stack panel); a
// standalone SVG file has no such neighbor to collide with.
export function namespaceIds(svg, prefix) {
  return svg
    .replace(/\bid="([^"]+)"/g, (_, id) => `id="${prefix}-${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefix}-${id})`)
    .replace(/(xlink:href|href)="#([^"]+)"/g, (_, attr, id) => `${attr}="#${prefix}-${id}"`);
}

// Recolor every distinct fill/stop-color in an icon, ranked by luminance,
// spread across LIME_SCALE — keeps a mark's own light/dark structure
// (shading, highlights) but renders it in our greens instead of its
// original hue. A single-color mark becomes flat lime-400, the page's one
// accent. Stroke-drawn icons (e.g. lucide, fill="none" + stroke) are a
// single color by construction, so their stroke is set to lime-400 directly.
export function toLimeScale(svgRaw) {
  const isStrokeIcon = /<svg[^>]*\sfill="none"/.test(svgRaw);
  if (isStrokeIcon) {
    return svgRaw.replace(/stroke="currentColor"/g, 'stroke="#D6FF5C"');
  }

  // A few marks omit `fill` on a shape and rely on the SVG default
  // (black) — make that explicit so it enters the ramp instead of
  // staying pure, invisible black on the dark panel.
  let svg = svgRaw.replace(/<(path|circle|ellipse|rect|polygon)((?:(?!fill=)[^>])*?)\/>/g, (m, tag, attrs) =>
    attrs.includes("fill=") ? m : `<${tag}${attrs} fill="#000000"/>`
  );

  const colorAttr = /(fill|stop-color)="(#[0-9a-fA-F]{3,6})"/g;
  const found = new Set();
  let match;
  while ((match = colorAttr.exec(svg))) found.add(normalizeHex(match[2]));
  if (found.size === 0) return svg;

  const ranked = [...found].sort((a, b) => luminance(a) - luminance(b));
  const map = new Map();
  if (ranked.length === 1) {
    map.set(ranked[0], "#D6FF5C"); // lime-400
  } else {
    ranked.forEach((hex, i) => {
      const idx = Math.round((i / (ranked.length - 1)) * (LIME_SCALE.length - 1));
      map.set(hex, LIME_SCALE[idx]);
    });
  }

  return svg.replace(colorAttr, (m, attr, hex) => `${attr}="${map.get(normalizeHex(hex))}"`);
}
