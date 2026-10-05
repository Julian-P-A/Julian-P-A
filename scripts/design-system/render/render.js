// Mounts each README panel using the REAL compiled components from
// _ds_bundle.js (SectionHeader, Badge, Tag, Marquee, IconButton) plus the
// real CSS custom properties from ../styles.css — no hand-rolled layout
// math, the browser does real text shaping/wrapping with the real fonts,
// and every glyph is the real Lucide Icon component, not a drawn shape.
const { SectionHeader, Badge, Tag, Marquee, IconButton } = window.PortfolioDesignSystem_4d8f89;
const e = React.createElement;
const C = window.__CONTENT__;

const lines = (s) =>
  s.split("\n").flatMap((part, i) => (i === 0 ? [part] : [e("br", { key: "br" + i }), part]));

const outline = (variant) =>
  variant === "lime" ? "1.5px solid rgba(13,13,11,.3)" : "1.5px solid var(--border-subtle)";

function Hero(C) {
  return e(
    "section",
    { "data-capture": "section", style: { background: "var(--surface-page)", borderRadius: "var(--radius-xl)", border: outline(), overflow: "hidden" } },
    e(
      "div",
      { style: { padding: "64px 64px 0" } },
      e(
        "div",
        { style: { display: "flex", gap: 12, alignItems: "center", marginBottom: 34, flexWrap: "wrap" } },
        e(Badge, { status: "available" }, C.badge),
        e(
          "span",
          { style: { font: "500 11px/1 var(--font-mono)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" } },
          C.meta
        )
      ),
      e(
        "h1",
        { style: { margin: 0, font: "700 var(--fs-d2)/.95 var(--font-display)", letterSpacing: "-.045em", color: "var(--text-strong)" } },
        C.titleLines[0],
        e("br"),
        C.titleLines[1],
        e("br"),
        C.titleTail,
        e("em", { style: { font: "italic 400 1.02em/1 var(--font-serif)", letterSpacing: "-.03em", color: "var(--accent)" } }, C.accent)
      ),
      e("p", { style: { margin: "28px 0 0", maxWidth: 640, paddingBottom: 56, font: "400 18px/1.5 var(--font-body)", color: "var(--text-body)" } }, C.body)
    ),
    e("div", { "data-capture": "marquee", style: { marginTop: 8 } }, e(Marquee, { items: C.marquee.items, tilt: C.marquee.tilt, tone: C.marquee.tone, size: C.marquee.size }))
  );
}

// Small circular icon chip — reuses the real IconButton (non-interactive
// here, but pixel-identical to the clickable one) wherever a glyph needs a
// contained badge instead of a bare Icon.
const iconChip = (icon, { size = 40, variant = "ghost" } = {}) =>
  e(IconButton, { icon, label: icon, variant, size, style: { cursor: "default", pointerEvents: "none" } });

function Section(C) {
  const header = C.headerIcon
    ? e(
        "div",
        { style: { display: "flex", gap: 20, alignItems: "flex-start" } },
        iconChip(C.headerIcon, { size: 48, variant: "solid" }),
        e("div", { style: { flex: 1 } }, e(SectionHeader, { index: C.index, eyebrow: C.eyebrow, title: lines(C.title), accent: C.accent }))
      )
    : e(SectionHeader, { index: C.index, eyebrow: C.eyebrow, title: lines(C.title), accent: C.accent });

  const kids = [header];

  if (C.description) {
    kids.push(
      e(
        "p",
        { key: "d", style: { margin: "24px 0 0", maxWidth: 760, font: "400 19px/1.55 var(--font-body)", color: "var(--text-body)" } },
        C.description
      )
    );
  }
  if (C.features) {
    kids.push(
      e(
        "div",
        { key: "f", style: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16, marginTop: 28, maxWidth: 820 } },
        C.features.map((f) =>
          e(
            "div",
            {
              key: f.label,
              style: { display: "flex", flexDirection: "column", gap: 14, padding: "20px 18px", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" },
            },
            iconChip(f.icon, { size: 36, variant: "solid" }),
            e("span", { style: { font: "500 14px/1.3 var(--font-body)", color: "var(--text-strong)" } }, f.label)
          )
        )
      )
    );
  }
  if (C.categories) {
    const tagRow = (tags) =>
      e(
        "div",
        { style: { display: "flex", flexWrap: "wrap", gap: 10 } },
        tags.map((t) =>
          e(
            Tag,
            { key: t.id },
            t.svg &&
              e("span", {
                className: "ds-tag-icon",
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 15,
                  height: 15,
                  color: "var(--text-strong)",
                  flex: "none",
                },
                dangerouslySetInnerHTML: { __html: t.svg },
              }),
            t.label
          )
        )
      );
    kids.push(
      e(
        "div",
        { key: "cat", style: { display: "flex", flexDirection: "column", gap: 24, marginTop: 28 } },
        C.categories.map((cat) =>
          e(
            "div",
            { key: cat.label, style: { display: "flex", flexDirection: "column", gap: 12 } },
            e(
              "span",
              { style: { font: "600 12px/1 var(--font-mono)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" } },
              cat.label
            ),
            tagRow(cat.tags)
          )
        )
      )
    );
  }
  if (C.list) {
    kids.push(
      e(
        "div",
        { key: "l", style: { display: "flex", flexDirection: "column", gap: 22, marginTop: 28, maxWidth: 780 } },
        C.list.map((item) =>
          e(
            "div",
            { key: item.n, style: { display: "flex", gap: 18, alignItems: "flex-start" } },
            iconChip(item.icon, { size: 40, variant: "outline" }),
            e(
              "p",
              { style: { margin: 0, paddingTop: 8, font: "400 18px/1.5 var(--font-body)", color: "var(--text-body)" } },
              e("span", { style: { font: "600 14px/1 var(--font-mono)", color: "var(--accent)", marginRight: 10 } }, item.n),
              item.text
            )
          )
        )
      )
    );
  }
  if (C.diff) {
    const block = ({ icon, label, items }) =>
      e(
        "div",
        { key: label, style: { display: "flex", gap: 16 } },
        iconChip(icon, { size: 32, variant: "ghost" }),
        e(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 } },
          e(
            "p",
            { style: { margin: 0, font: "600 13px/1 var(--font-mono)", letterSpacing: ".04em", color: "var(--text-muted)", textTransform: "uppercase" } },
            label
          ),
          items.map((it, i) =>
            e(
              "p",
              { key: i, style: { margin: 0, font: "400 18px/1.5 var(--font-body)", color: "var(--text-body)" } },
              e("span", { style: { color: "var(--accent)", fontWeight: 700 } }, "+ "),
              it
            )
          )
        )
      );
    kids.push(
      e(
        "div",
        { key: "df", style: { display: "flex", flexDirection: "column", gap: 24, marginTop: 28, maxWidth: 780 } },
        block(C.diff.current),
        block(C.diff.next)
      )
    );
  }
  return e(
    "section",
    { style: { background: "var(--surface-page)", borderRadius: "var(--radius-xl)", border: outline(), padding: "64px" } },
    kids
  );
}

function Contact(C) {
  return e(
    "section",
    { "data-capture": "section", style: { background: "var(--lime-400)", color: "var(--ink-900)", borderRadius: "var(--radius-xl)", border: outline("lime"), overflow: "hidden" } },
    e(
      "div",
      { style: { padding: "64px 64px 48px" } },
      e(
        "span",
        { style: { font: "500 12px/1 var(--font-mono)", letterSpacing: ".14em", textTransform: "uppercase" } },
        C.eyebrow
      ),
      e(
        "h2",
        { style: { margin: "18px 0 0", font: "700 84px/.88 var(--font-display)", letterSpacing: "-.055em", color: "var(--ink-900)" } },
        C.title,
        " ",
        e("em", { style: { font: "italic 400 1em/1 var(--font-serif)" } }, C.accent),
        C.tail
      ),
      e("p", { style: { marginTop: 20, maxWidth: 460, font: "400 18px/1.5 var(--font-body)" } }, C.description),
      e(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 24 } },
        e(
          "a",
          {
            href: "mailto:" + C.email,
            style: { font: "600 22px/1 var(--font-display)", color: "var(--ink-900)", letterSpacing: "-.02em", textDecoration: "underline" },
          },
          C.email
        ),
        e(IconButton, { icon: "copy", label: "Copiar", variant: "outline", size: 40, style: { cursor: "default", pointerEvents: "none", color: "var(--ink-900)", borderColor: "rgba(13,13,11,.3)" } })
      )
    ),
    e("div", { "data-capture": "marquee" }, e(Marquee, { items: C.marquee.items, tilt: C.marquee.tilt, tone: C.marquee.tone, size: C.marquee.size }))
  );
}

function Contributions(C) {
  const weeks = C.calendar || [];
  const maxCount = Math.max(1, ...weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)));
  const cellColor = (count) => {
    if (count === 0) return "var(--surface-raised)";
    const steps = [0.3, 0.55, 0.78, 1];
    const t = Math.min(1, count / Math.max(1, maxCount * 0.6));
    const step = steps.find((s) => t <= s) ?? 1;
    return `color-mix(in oklch, var(--lime-400) ${step * 100}%, var(--surface-raised))`;
  };
  return e(
    "section",
    { style: { background: "var(--surface-page)", borderRadius: "var(--radius-xl)", border: outline(), padding: "64px" } },
    e(SectionHeader, { index: C.index, eyebrow: C.eyebrow, title: lines(C.title), accent: C.accent }),
    C.description &&
      e(
        "p",
        { style: { margin: "24px 0 0", font: "500 14px/1 var(--font-mono)", color: "var(--text-muted)" } },
        C.description
      ),
    e(
      "div",
      { style: { display: "flex", gap: 3, marginTop: 28 } },
      weeks.map((w, wi) =>
        e(
          "div",
          { key: wi, style: { display: "flex", flexDirection: "column", gap: 3 } },
          w.contributionDays.map((d, di) =>
            e("div", {
              key: di,
              title: d.date ? `${d.date}: ${d.contributionCount}` : undefined,
              style: { width: 11, height: 11, borderRadius: 3, background: cellColor(d.contributionCount) },
            })
          )
        )
      )
    )
  );
}

const RENDERERS = { hero: Hero, contact: Contact, contributions: Contributions };
const Root = (RENDERERS[C.kind] || Section)(C);
ReactDOM.createRoot(document.getElementById("root")).render(Root);
