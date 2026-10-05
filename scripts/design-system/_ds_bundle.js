/* @ds-bundle: {"format":4,"namespace":"PortfolioDesignSystem_4d8f89","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Card.jsx":"4fdd65b16b83","components/content/Marquee.jsx":"83df36697f29","components/content/ProjectCard.jsx":"2432167ba82f","components/content/SectionHeader.jsx":"2ac6695f0da0","components/core/Badge.jsx":"77af927b242d","components/core/Button.jsx":"334113ffe55e","components/core/Icon.jsx":"1e8894cffde2","components/core/IconButton.jsx":"83c291b2b8d1","components/core/Tag.jsx":"e6352d2a9d11","components/feedback/Dialog.jsx":"9452b6424047","components/feedback/Toast.jsx":"56e8c4ef3d6d","components/feedback/Tooltip.jsx":"aece00a4afc0","components/forms/Checkbox.jsx":"240ddf0941f5","components/forms/Input.jsx":"c4de5d19ac70","components/forms/Radio.jsx":"68b5897d9536","components/forms/Select.jsx":"255e81a011e0","components/forms/Switch.jsx":"eb73bdce7075","components/forms/Textarea.jsx":"61556b6ee666","components/navigation/NavBar.jsx":"277fa55f6b20","components/navigation/Tabs.jsx":"b3622580fc33","ui_kits/portfolio/About.jsx":"34f16c43a5d8","ui_kits/portfolio/App.jsx":"e0804f69ef28","ui_kits/portfolio/CaseStudy.jsx":"cf31653c5f8e","ui_kits/portfolio/Contact.jsx":"5a9cd15bb758","ui_kits/portfolio/Footer.jsx":"7567be560bc1","ui_kits/portfolio/Hero.jsx":"72238e74c0ed","ui_kits/portfolio/Work.jsx":"b5b7afb14113","ui_kits/portfolio/data.js":"75cd3addeb32"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PortfolioDesignSystem_4d8f89 = window.PortfolioDesignSystem_4d8f89 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  children,
  tone = 'raised',
  interactive = false,
  padding = 28,
  style,
  onClick
}) {
  const [hov, setHov] = useState(false);
  const T = {
    raised: {
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    paper: {
      background: 'var(--paper-100)',
      color: 'var(--ink-700)',
      border: '1.5px solid var(--ink-900)'
    },
    lime: {
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1.5px solid var(--border-default)'
    }
  }[tone];
  const hard = tone === 'paper' || tone === 'lime';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      transform: interactive && hov ? hard ? 'translate(-3px,-3px)' : 'translateY(-4px)' : 'none',
      boxShadow: interactive && hov ? hard ? 'var(--shadow-hard)' : 'var(--shadow-soft)' : 'none',
      transition: 'all var(--dur-base) var(--ease-snap)',
      ...T,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Marquee.jsx
try { (() => {
function Marquee({
  items = [],
  speed = 30,
  tone = 'lime',
  separator = '✦',
  size = 56,
  tilt = 0,
  style
}) {
  const T = {
    lime: ['var(--lime-400)', 'var(--ink-900)'],
    ink: ['var(--ink-900)', 'var(--paper-50)'],
    paper: ['var(--paper-100)', 'var(--ink-900)'],
    flame: ['var(--flame-500)', 'var(--ink-900)']
  }[tone] || ['var(--lime-400)', 'var(--ink-900)'];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      background: T[0],
      color: T[1],
      borderBlock: '1.5px solid var(--ink-900)',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `ds-marquee ${speed}s linear infinite`
    }
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * .45,
      paddingInline: size * .225,
      paddingBlock: size * .28,
      font: `700 ${size}px/1 var(--font-display)`,
      letterSpacing: '-.04em',
      whiteSpace: 'nowrap',
      textTransform: 'uppercase'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * .5
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  index,
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'grid',
      gridTemplateColumns: align === 'split' ? 'minmax(0,1.4fr) minmax(0,1fr)' : '1fr',
      gap: align === 'split' ? 48 : 20,
      alignItems: 'end',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      font: '500 12px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "(", index, ")"), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '700 var(--fs-d2)/.95 var(--font-display)',
      letterSpacing: '-.045em',
      color: 'var(--text-strong)'
    }
  }, title, accent && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("em", {
    style: {
      font: 'italic 400 1.05em/1 var(--font-serif)',
      letterSpacing: '-.02em',
      color: 'var(--accent)'
    }
  }, accent)))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 440,
      font: '400 17px/1.55 var(--font-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  status = 'available',
  pulse = true,
  style
}) {
  const dot = {
    available: 'var(--lime-400)',
    busy: 'var(--flame-500)',
    info: 'var(--cobalt-300)',
    neutral: 'var(--paper-400)'
  }[status] || 'var(--paper-400)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 28,
      padding: '0 12px 0 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-strong)',
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dot,
      boxShadow: `0 0 0 3px color-mix(in oklch, ${dot} 25%, transparent)`,
      animation: pulse ? 'ds-pulse 1.8s var(--ease-inout) infinite' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name = 'arrow-up-right',
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `url(${CDN}${name}.svg)`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: `${url} center/contain no-repeat`,
      mask: `${url} center/contain no-repeat`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 'var(--control-sm)',
    px: 14,
    fs: 13,
    ic: 16
  },
  md: {
    h: 'var(--control-md)',
    px: 20,
    fs: 15,
    ic: 18
  },
  lg: {
    h: 'var(--control-lg)',
    px: 28,
    fs: 17,
    ic: 20
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  href,
  onClick,
  fullWidth = false,
  style
}) {
  const [hov, setHov] = useState(false);
  const [down, setDown] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: hov ? 'var(--shadow-hard-sm)' : 'none'
    },
    secondary: {
      background: hov ? 'var(--text-strong)' : 'transparent',
      color: hov ? 'var(--surface-page)' : 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: hov ? 'var(--border-subtle)' : 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent'
    },
    hot: {
      background: 'var(--flame-500)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: hov ? 'var(--shadow-hard-sm)' : 'none'
    },
    inverse: {
      background: 'var(--ink-900)',
      color: 'var(--paper-50)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: hov ? '3px 3px 0 var(--lime-400)' : 'none'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 'var(--radius-pill)',
      font: `600 ${s.fs}px/1 var(--font-body)`,
      letterSpacing: '-.01em',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      whiteSpace: 'nowrap',
      transform: disabled ? 'none' : down ? 'translate(1px,1px) scale(.98)' : hov && V.boxShadow && V.boxShadow !== 'none' ? 'translate(-2px,-2px)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-snap)',
      ...V,
      ...(disabled ? {
        boxShadow: 'none'
      } : {}),
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic,
    style: {
      transform: hov && !disabled ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-snap)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  icon = 'arrow-up-right',
  label,
  variant = 'outline',
  size = 44,
  onClick,
  href,
  style
}) {
  const [hov, setHov] = useState(false);
  const V = {
    outline: {
      background: hov ? 'var(--text-strong)' : 'transparent',
      color: hov ? 'var(--surface-page)' : 'var(--text-strong)',
      border: '1.5px solid var(--border-default)'
    },
    solid: {
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)'
    },
    ghost: {
      background: hov ? 'var(--border-subtle)' : 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      padding: 0,
      transform: hov ? 'rotate(-8deg)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-snap)',
      ...V,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  children,
  selected = false,
  onClick,
  tone = 'default',
  style
}) {
  const [hov, setHov] = useState(false);
  const tones = {
    default: 'var(--text-strong)',
    lime: 'var(--lime-400)',
    flame: 'var(--flame-500)',
    cobalt: 'var(--cobalt-300)',
    lilac: 'var(--lilac-300)'
  };
  const c = tones[tone] || tones.default;
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: '0 13px',
      borderRadius: 'var(--radius-pill)',
      font: '500 12px/1 var(--font-mono)',
      letterSpacing: '.02em',
      textTransform: 'lowercase',
      whiteSpace: 'nowrap',
      border: `1.5px solid ${selected ? c : 'var(--border-default)'}`,
      background: selected ? c : interactive && hov ? 'var(--border-subtle)' : 'transparent',
      color: selected ? 'var(--ink-900)' : c,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-snap)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
const {
  useState
} = React;
function ProjectCard({
  title,
  category,
  year,
  tags = [],
  image,
  color = 'var(--cobalt-500)',
  index,
  onClick,
  aspect = '4/3',
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: color,
      border: '1px solid var(--border-subtle)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hov ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-reveal) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: `${color}`,
      backgroundImage: 'var(--grain)',
      backgroundBlendMode: 'overlay'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'rgba(13,13,11,.55)'
    }
  }, "imagen del proyecto")), index && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      font: '500 11px/1 var(--font-mono)',
      padding: '7px 10px',
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: 'var(--paper-50)'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      width: 56,
      height: 56,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      transform: hov ? 'scale(1) rotate(0)' : 'scale(.4) rotate(-45deg)',
      opacity: hov ? 1 : 0,
      transition: 'all var(--dur-base) var(--ease-snap)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 26px/1.05 var(--font-display)',
      letterSpacing: '-.035em',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, category, year && ` — ${year}`)), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 560,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      background: 'rgba(8,8,7,.72)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-soft)',
      animation: 'ds-rise var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 24px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 28px/1.05 var(--font-display)',
      letterSpacing: '-.03em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Cerrar",
    size: 40,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px 28px',
      font: '400 16px/1.55 var(--font-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '18px 28px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  message,
  tone = 'success',
  onClose,
  style
}) {
  const c = {
    success: 'var(--lime-400)',
    error: 'var(--flame-500)',
    info: 'var(--cobalt-300)'
  }[tone] || 'var(--lime-400)';
  const ic = {
    success: 'check',
    error: 'x',
    info: 'info'
  }[tone] || 'check';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      width: 380,
      maxWidth: '100%',
      padding: '16px 16px 16px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--paper-50)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: `5px 5px 0 ${c}`,
      animation: 'ds-rise var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: c,
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      border: '1.5px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '600 15px/1.2 var(--font-body)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-body)',
      color: 'var(--ink-600)'
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      padding: 2,
      cursor: 'pointer',
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  content,
  children,
  placement = 'top',
  style
}) {
  const [open, setOpen] = useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: `translateX(-50%) translateY(${open ? 0 : placement === 'bottom' ? -4 : 4}px)`,
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '7px 10px',
      borderRadius: 8,
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.02em',
      transition: 'all var(--dur-fast) var(--ease-snap)',
      zIndex: 10
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      color: 'var(--text-strong)',
      font: '400 15px/1.3 var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 6,
      border: `1.5px solid ${checked ? 'var(--lime-400)' : 'var(--border-default)'}`,
      background: checked ? 'var(--lime-400)' : 'transparent',
      color: 'var(--ink-900)',
      transition: 'all var(--dur-fast) var(--ease-snap)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
const labelStyle = {
  font: '500 11px/1 var(--font-mono)',
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)'
};
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  hint,
  error,
  disabled = false,
  style
}) {
  const [focus, setFocus] = useState(false);
  const line = error ? 'var(--danger-500)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 52,
      padding: '0 2px',
      background: 'transparent',
      border: 0,
      borderBottom: `1.5px solid ${line}`,
      outline: 'none',
      borderRadius: 0,
      color: 'var(--text-strong)',
      font: '400 20px/1.2 var(--font-body)',
      letterSpacing: '-.01em',
      transition: 'border-color var(--dur-fast) var(--ease-snap)'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.3 var(--font-body)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  name,
  value,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      color: 'var(--text-strong)',
      font: '400 15px/1.3 var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      border: `1.5px solid ${checked ? 'var(--lime-400)' : 'var(--border-default)'}`,
      transition: 'all var(--dur-fast) var(--ease-snap)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--lime-400)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-base) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
const labelStyle = {
  font: '500 11px/1 var(--font-mono)',
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)'
};
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: value === undefined ? defaultValue ?? (placeholder ? '' : undefined) : undefined,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: 52,
      padding: '0 32px 0 2px',
      background: 'transparent',
      border: 0,
      borderBottom: `1.5px solid ${focus ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 0,
      outline: 'none',
      color: 'var(--text-strong)',
      font: '400 20px/1.2 var(--font-body)',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: '#0D0D0B'
    }
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    style: {
      color: '#0D0D0B'
    }
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 4,
      top: 17,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      color: 'var(--text-strong)',
      font: '400 15px/1.3 var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 48,
      height: 28,
      flex: 'none',
      padding: 0,
      borderRadius: 999,
      cursor: 'inherit',
      border: `1.5px solid ${checked ? 'var(--lime-400)' : 'var(--border-default)'}`,
      background: checked ? 'var(--lime-400)' : 'transparent',
      transition: 'all var(--dur-base) var(--ease-snap)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 19,
      height: 19,
      borderRadius: '50%',
      background: checked ? 'var(--ink-900)' : 'var(--text-strong)',
      transform: checked ? 'translateX(20px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const {
  useState
} = React;
const labelStyle = {
  font: '500 11px/1 var(--font-mono)',
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)'
};
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 4,
  hint,
  error,
  style
}) {
  const [focus, setFocus] = useState(false);
  const line = error ? 'var(--danger-500)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '12px 2px',
      background: 'transparent',
      border: 0,
      borderBottom: `1.5px solid ${line}`,
      outline: 'none',
      resize: 'vertical',
      color: 'var(--text-strong)',
      font: '400 20px/1.45 var(--font-body)',
      transition: 'border-color var(--dur-fast) var(--ease-snap)'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.3 var(--font-body)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
function NavLink({
  label,
  active,
  onClick,
  index
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      textDecoration: 'none',
      font: '500 14px/1 var(--font-body)',
      color: active || hov ? 'var(--text-strong)' : 'var(--text-muted)',
      transition: 'color var(--dur-fast) var(--ease-snap)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/1 var(--font-mono)',
      color: active ? 'var(--accent)' : 'inherit'
    }
  }, String(index + 1).padStart(2, '0')), label);
}
function NavBar({
  brand = 'Nombre Apellido',
  links = [],
  active,
  onNavigate,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      height: 64,
      padding: '0 10px 0 22px',
      borderRadius: 999,
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      font: '700 18px/1 var(--font-display)',
      letterSpacing: '-.03em',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, brand, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, links.map((l, i) => {
    const id = typeof l === 'string' ? l : l.value;
    const lbl = typeof l === 'string' ? l : l.label;
    return /*#__PURE__*/React.createElement(NavLink, {
      key: id,
      index: i,
      label: lbl,
      active: active === id,
      onClick: () => onNavigate && onNavigate(id)
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, action));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      border: '1.5px solid var(--border-default)',
      ...style
    }
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const lbl = typeof it === 'string' ? it : it.label;
    const on = id === value;
    const count = typeof it === 'object' ? it.count : undefined;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 36,
        padding: '0 16px',
        borderRadius: 999,
        border: 0,
        cursor: 'pointer',
        font: '500 14px/1 var(--font-body)',
        background: on ? 'var(--text-strong)' : 'transparent',
        color: on ? 'var(--surface-page)' : 'var(--text-muted)',
        transition: 'all var(--dur-base) var(--ease-snap)'
      }
    }, lbl, count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 10px/1 var(--font-mono)',
        opacity: .7
      }
    }, String(count).padStart(2, '0')));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
function About() {
  const {
    SectionHeader,
    Card,
    Tag
  } = window.PortfolioDesignSystem_4d8f89;
  const P = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    "data-screen-label": "Sobre m\xED",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '120px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "02",
    eyebrow: "Sobre m\xED",
    title: "Mitad dise\xF1o,",
    accent: "mitad c\xF3digo."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      maxWidth: 820,
      font: '400 clamp(22px,2.4vw,32px)/1.3 var(--font-display)',
      letterSpacing: '-.02em',
      color: 'var(--text-strong)'
    }
  }, "Llevo 7 a\xF1os entre Figma y el editor. Me gusta el punto exacto donde una buena idea ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      padding: '0 .15em'
    }
  }, "se vuelve real"), ", y cuidar ese paso es mi trabajo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 16
    }
  }, P.services.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    tone: i === 1 ? 'lime' : 'raised',
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      opacity: .7
    }
  }, "(", s.n, ")"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 28px/1 var(--font-display)',
      letterSpacing: '-.035em',
      color: i === 1 ? 'var(--ink-900)' : 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      flex: 1
    }
  }, s.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: i === 1 ? {
      color: 'var(--ink-900)',
      borderColor: 'rgba(13,13,11,.3)'
    } : undefined
  }, t)))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
function App() {
  const {
    NavBar,
    Button,
    Toast,
    Switch
  } = window.PortfolioDesignSystem_4d8f89;
  const P = window.PORTFOLIO;
  const [view, setView] = React.useState(() => localStorage.getItem('pf-view') || 'home');
  const [toast, setToast] = React.useState(false);
  const [light, setLight] = React.useState(false);
  const [active, setActive] = React.useState('work');
  React.useEffect(() => {
    localStorage.setItem('pf-view', view);
  }, [view]);
  React.useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
  }, [light]);
  const proj = P.projects.find(p => p.id === view);
  const go = id => {
    if (id === 'home') {
      setView('home');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    setActive(id);
    const doIt = () => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.offsetTop - 90,
        behavior: 'smooth'
      });
    };
    if (view !== 'home') {
      setView('home');
      setTimeout(doIt, 60);
    } else doIt();
  };
  const open = p => {
    setView(p.id);
    window.scrollTo({
      top: 0
    });
  };
  const sent = () => {
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };
  let next;
  if (proj) {
    const i = P.projects.indexOf(proj);
    const n = P.projects[(i + 1) % P.projects.length];
    next = () => open(n);
    next.title = n.title;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 16,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    brand: P.name,
    active: proj ? 'work' : active,
    onNavigate: go,
    style: {
      maxWidth: 'calc(var(--container-max) - 2 * var(--gutter))',
      margin: '0 auto'
    },
    links: [{
      value: 'work',
      label: 'Trabajo'
    }, {
      value: 'about',
      label: 'Sobre mí'
    }, {
      value: 'contact',
      label: 'Contacto'
    }],
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: light,
      onChange: setLight
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => go('contact')
    }, "Hablemos"))
  })), proj ? /*#__PURE__*/React.createElement(CaseStudy, {
    project: proj,
    onBack: () => go('work'),
    onNext: next
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onCTA: () => go('contact'),
    onWork: () => go('work')
  }), /*#__PURE__*/React.createElement(Work, {
    onOpen: open
  }), /*#__PURE__*/React.createElement(About, null)), /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement(Contact, {
    onSent: sent
  }), /*#__PURE__*/React.createElement(Footer, null)), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\xA1Mensaje enviado!",
    message: "Te respondo en 24\u201348 h.",
    onClose: () => setToast(false)
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
function CaseStudy({
  project: p,
  onBack,
  onNext
}) {
  const {
    Button,
    Tag,
    SectionHeader,
    Card,
    Tabs
  } = window.PortfolioDesignSystem_4d8f89;
  const [sec, setSec] = React.useState('problema');
  const body = {
    problema: 'Los usuarios abandonaban en el paso 3 de 5. Las entrevistas mostraron que no entendían el precio final hasta el último momento.',
    proceso: '12 entrevistas, 3 rondas de test con prototipos en Figma y un sistema de componentes nuevo construido en paralelo en React.',
    resultado: 'Flujo de 5 a 3 pasos, precio visible desde el inicio y un sistema de diseño reutilizable por todo el equipo.'
  };
  return /*#__PURE__*/React.createElement("article", {
    "data-screen-label": 'Caso · ' + p.title,
    style: {
      paddingTop: 130
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "arrow-left",
    onClick: onBack
  }, "Volver al trabajo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      font: '500 12px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "(", p.index, ")"), p.category, " \u2014 ", p.year), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 0',
      font: '700 var(--fs-mega)/.86 var(--font-display)',
      letterSpacing: '-.055em',
      color: 'var(--text-strong)'
    }
  }, p.title, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.5fr) repeat(3,minmax(0,1fr))',
      gap: 24,
      borderTop: '1px solid var(--border-default)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 19px/1.5 var(--font-body)',
      color: 'var(--text-strong)'
    }
  }, p.summary), [['Rol', p.role], ['Duración', p.duration], ['Stack', p.tags.join(', ')]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.4 var(--font-body)',
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/8',
      borderRadius: 'var(--radius-xl)',
      backgroundColor: p.color,
      backgroundImage: 'var(--grain)',
      backgroundBlendMode: 'overlay',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(13,13,11,.55)'
    }
  }, "imagen principal del caso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '90px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "El caso",
    title: "De problema",
    accent: "a producto."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: sec,
    onChange: setSec,
    items: [{
      value: 'problema',
      label: 'Problema'
    }, {
      value: 'proceso',
      label: 'Proceso'
    }, {
      value: 'resultado',
      label: 'Resultado'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    key: sec,
    style: {
      font: '400 22px/1.5 var(--font-body)',
      color: 'var(--text-strong)',
      animation: 'ds-rise var(--dur-slow) var(--ease-out)'
    }
  }, body[sec]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "lime"
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter) 110px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    interactive: true,
    padding: 36,
    onClick: onNext,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Siguiente proyecto"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 48px/1 var(--font-display)',
      letterSpacing: '-.045em',
      color: 'var(--ink-900)'
    }
  }, onNext.title)), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconRight: "arrow-right"
  }, "Ver caso"))));
}
window.CaseStudy = CaseStudy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
function Contact({
  onSent
}) {
  const {
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    IconButton,
    Tooltip
  } = window.PortfolioDesignSystem_4d8f89;
  const P = window.PORTFOLIO;
  const [ok, setOk] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErr('Revisa el formato del email');
      return;
    }
    setErr('');
    onSent();
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    "data-screen-label": "Contacto",
    style: {
      background: 'var(--lime-400)',
      color: 'var(--ink-900)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '110px var(--gutter) 80px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "(03) Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '700 var(--fs-d1)/.88 var(--font-display)',
      letterSpacing: '-.055em',
      color: 'var(--ink-900)'
    }
  }, "\xBFHablamos", /*#__PURE__*/React.createElement("em", {
    style: {
      font: 'italic 400 1em/1 var(--font-serif)'
    }
  }, "?")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 18px/1.5 var(--font-body)',
      maxWidth: 420
    }
  }, "Cu\xE9ntame qu\xE9 est\xE1s construyendo. Respondo en 24\u201348 h, siempre."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + P.email,
    style: {
      font: '600 22px/1 var(--font-display)',
      color: 'var(--ink-900)',
      letterSpacing: '-.02em'
    }
  }, P.email), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Copiar email"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "copy",
    label: "Copiar",
    size: 40,
    style: {
      color: 'var(--ink-900)',
      borderColor: 'rgba(13,13,11,.3)'
    }
  })))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-lg)',
      padding: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      boxShadow: '8px 8px 0 var(--ink-900)',
      outline: '1.5px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Ada Lovelace"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "ada@correo.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    error: err
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Presupuesto",
    placeholder: "Elige un rango",
    options: ['< 3k €', '3–8k €', '8k € +']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Proyecto",
    rows: 3,
    placeholder: "Tengo una idea\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Acepto la pol\xEDtica de privacidad",
    checked: ok,
    onChange: setOk
  }), /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    disabled: !ok,
    onClick: submit
  }, "Enviar")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
function Footer() {
  const {
    IconButton
  } = window.PortfolioDesignSystem_4d8f89;
  const P = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--lime-400)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 clamp(64px,14vw,220px)/.8 var(--font-display)',
      letterSpacing: '-.06em',
      borderTop: '1.5px solid var(--ink-900)',
      paddingTop: 36,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, P.name, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u2014 Dise\xF1ado y programado a mano"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['dribbble', 'Dribbble'], ['figma', 'Figma']].map(([i, l]) => /*#__PURE__*/React.createElement(IconButton, {
    key: i,
    icon: i,
    label: l,
    size: 40,
    variant: "solid",
    style: {
      background: 'var(--ink-900)',
      color: 'var(--lime-400)'
    }
  }))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
function Hero({
  onCTA,
  onWork
}) {
  const {
    Badge,
    Button,
    Marquee
  } = window.PortfolioDesignSystem_4d8f89;
  const P = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      paddingTop: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 300px',
      gap: 40,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "available"
  }, "Disponible \xB7 Oct 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, P.city, " \u2014 remoto")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '700 var(--fs-mega)/.86 var(--font-display)',
      letterSpacing: '-.055em',
      color: 'var(--text-strong)'
    }
  }, "Dise\xF1o", /*#__PURE__*/React.createElement("br", null), "interfaces", /*#__PURE__*/React.createElement("br", null), "y las ", /*#__PURE__*/React.createElement("em", {
    style: {
      font: 'italic 400 1.02em/1 var(--font-serif)',
      letterSpacing: '-.03em',
      color: 'var(--accent)'
    }
  }, "programo."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3/4',
      borderRadius: 'var(--radius-lg)',
      backgroundColor: 'var(--flame-500)',
      backgroundImage: 'var(--grain)',
      backgroundBlendMode: 'overlay',
      display: 'grid',
      placeItems: 'center',
      transform: 'rotate(3deg)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--lime-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(13,13,11,.6)'
    }
  }, "tu retrato")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.5 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, P.role, ". Llevo ideas del research al \xFAltimo pixel en producci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: onCTA
  }, "Hablemos"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onWork
  }, "Ver trabajo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 90,
      paddingBlock: 20,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    items: ['Diseño UX/UI', 'Front-end', 'Design systems', 'Prototipado', 'Motion'],
    size: 52,
    tilt: -2
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Work({
  onOpen
}) {
  const {
    SectionHeader,
    Tabs,
    ProjectCard
  } = window.PortfolioDesignSystem_4d8f89;
  const P = window.PORTFOLIO;
  const [cat, setCat] = React.useState('all');
  const count = c => P.projects.filter(p => c === 'all' || p.cat === c).length;
  const list = P.projects.filter(p => cat === 'all' || p.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    "data-screen-label": "Trabajo",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '110px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "01",
    eyebrow: "Trabajo seleccionado",
    title: "Cosas que",
    accent: "he construido",
    align: "split",
    description: "Una selecci\xF3n de productos donde dise\xF1\xE9 la experiencia y escrib\xED el c\xF3digo. Cada uno tiene su caso de estudio."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '44px 0 36px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: cat,
    onChange: setCat,
    items: [{
      value: 'all',
      label: 'Todo',
      count: count('all')
    }, {
      value: 'ux',
      label: 'UX/UI',
      count: count('ux')
    }, {
      value: 'front',
      label: 'Front-end',
      count: count('front')
    }, {
      value: 'ds',
      label: 'Design systems',
      count: count('ds')
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: '56px 32px',
      alignItems: 'start'
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.id
  }, p, {
    style: {
      marginTop: i % 2 === 1 ? 80 : 0
    },
    onClick: () => onOpen(p)
  })))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
window.PORTFOLIO = {
  name: 'Alex Rivera',
  role: 'Diseñador UX/UI & desarrollador front-end',
  city: 'Madrid',
  email: 'hola@alexrivera.dev',
  projects: [{
    id: 'nomada',
    index: '01',
    title: 'Nómada',
    category: 'App · UX/UI',
    cat: 'ux',
    year: 2026,
    tags: ['figma', 'research', 'prototipado'],
    color: 'var(--cobalt-500)',
    aspect: '4/5',
    summary: 'App para planificar viajes largos en solitario. Rediseño completo del flujo de reservas.',
    role: 'Lead UX/UI',
    duration: '4 meses'
  }, {
    id: 'kiosko',
    index: '02',
    title: 'Kiosko',
    category: 'Web · Front-end',
    cat: 'front',
    year: 2025,
    tags: ['next.js', 'gsap', 'cms'],
    color: 'var(--flame-500)',
    aspect: '4/3',
    summary: 'Revista digital con scroll narrativo y tipografía cinética.',
    role: 'Front-end',
    duration: '10 semanas'
  }, {
    id: 'pulso',
    index: '03',
    title: 'Pulso DS',
    category: 'Design system',
    cat: 'ds',
    year: 2025,
    tags: ['tokens', 'react', 'storybook'],
    color: 'var(--lime-400)',
    aspect: '4/3',
    summary: 'Sistema de diseño multi-marca para una fintech con 40+ componentes.',
    role: 'Design engineer',
    duration: '6 meses'
  }, {
    id: 'mercado',
    index: '04',
    title: 'Mercado',
    category: 'E-commerce · UX/UI',
    cat: 'ux',
    year: 2024,
    tags: ['figma', 'a11y', 'testing'],
    color: 'var(--lilac-500)',
    aspect: '4/5',
    summary: 'Checkout accesible que redujo el abandono de carrito.',
    role: 'UX/UI',
    duration: '3 meses'
  }],
  services: [{
    n: '01',
    title: 'UX research',
    text: 'Entrevistas, tests de usabilidad y mapas de journey para decidir con datos.',
    tags: ['entrevistas', 'tests', 'journeys']
  }, {
    n: '02',
    title: 'UI design',
    text: 'Interfaces con carácter: sistemas visuales, prototipos y micro-interacciones.',
    tags: ['figma', 'prototipos', 'motion']
  }, {
    n: '03',
    title: 'Front-end',
    text: 'Del Figma al navegador sin perder nada por el camino. Rápido y accesible.',
    tags: ['react', 'typescript', 'css']
  }, {
    n: '04',
    title: 'Design systems',
    text: 'Tokens, componentes y documentación que escalan con tu equipo.',
    tags: ['tokens', 'storybook', 'docs']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
