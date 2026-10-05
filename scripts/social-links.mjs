// Single source of truth for the real, clickable contact links at the
// bottom of README.md. fetch-social-icons.mjs reads `source`/`slug` to
// download and recolor each icon into assets/social/<id>.svg, and `handle`
// to render it as the real username next to the icon — the README itself
// just links straight to `href` with that file as the button — no
// screenshot involved, so these actually work when clicked on GitHub.
export const socialLinks = [
  { id: "mail", label: "Email", handle: "julian.jcpa@gmail.com", href: "mailto:julian.jcpa@gmail.com", source: "lucide", slug: "mail" },
  { id: "linkedin", label: "LinkedIn", handle: "Julianjcpa", href: "https://linkedin.com/in/Julianjcpa", source: "simple-icons", slug: "linkedin" },
  { id: "behance", label: "Behance", handle: "julianariza3", href: "https://behance.net/julianariza3", source: "simple-icons", slug: "behance" },
  { id: "instagram", label: "Instagram", handle: "@julian.c.ariz", href: "https://instagram.com/julian.c.ariz", source: "simple-icons", slug: "instagram" },
  { id: "x", label: "X", handle: "@Julian_c_ariz", href: "https://x.com/Julian_c_ariz", source: "simple-icons", slug: "x" },
  // Discord's own link is just a numeric user id (no public, readable
  // handle to derive it from) — the username below came from the user.
  { id: "discord", label: "Discord", handle: "julian.c.ariz", href: "https://discord.com/users/302319395626156032", source: "simple-icons", slug: "discord" },
];
