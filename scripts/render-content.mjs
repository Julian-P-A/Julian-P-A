// Real content for the profile panels, shaped as props for the ACTUAL
// design-system components (SectionHeader, Badge, Tag, Marquee, Button) —
// no hand-rolled layout math, the browser + real CSS tokens do the work.
export const sections = [
  {
    id: "hero",
    kind: "hero",
    badge: "Disponible",
    meta: "Colombia — remoto",
    titleLines: ["Diseño", "interfaces"],
    titleTail: "y las ",
    accent: "construyo.",
    body: "Frontend Developer & UX/UI Designer. No me gusta elegir entre que algo se vea bien o que funcione bien, así que hago las dos cosas.",
    marquee: { items: ["Diseño UX/UI", "Front-end", "Design systems", "Prototipado", "Motion"], tilt: -2, tone: "lime", size: 36 },
    alt: "Julian Camilo Pinzón Ariza, Frontend Developer y UX/UI Designer, disponible y trabajando remoto desde Colombia. Diseño interfaces y las construyo.",
  },
  {
    id: "about",
    kind: "section",
    index: "01",
    eyebrow: "Sobre mí",
    title: "Mitad diseño,\nmitad ",
    accent: "código.",
    description:
      "Ahora mismo estoy metido en proyectos de desarrollo web enfocados en UI/UX y experiencias frontend. Busco colaborar en proyectos open-source, web apps y productos digitales creativos. Estoy aprendiendo React, Docker y Node.js — y si alguien quiere ayudarme a escalar servicios backend y flujos de despliegue, con gusto hablamos.",
    alt: "Sobre mí: actualmente trabajo en proyectos de desarrollo web enfocados en UI/UX y experiencias frontend. Busco colaborar en proyectos open-source, web apps y productos digitales creativos. Estoy aprendiendo React, Docker y Node.js, y busco ayuda escalando servicios backend y flujos de despliegue.",
  },
  {
    id: "offer",
    kind: "section",
    index: "02",
    eyebrow: "Qué ofrezco",
    title: "Cosas que\nsé ",
    accent: "hacer bien.",
    description:
      "Experiencia en UI/UX y diseño frontend, trabajo profesional para marcas y agencias, mentalidad autodidacta y foco constante en código limpio, mantenible y en entregar soluciones rápido.",
    features: [
      { icon: "code", label: "Frontend development" },
      { icon: "palette", label: "UI/UX design" },
      { icon: "pen-tool", label: "Prototyping" },
      { icon: "layers", label: "Design systems" },
      { icon: "sparkle", label: "Branding" },
      { icon: "globe", label: "WordPress" },
    ],
    alt: "Qué ofrezco: frontend development, UI/UX design, prototyping, design systems, branding y landing pages con WordPress. Experiencia en UI/UX y frontend para marcas y agencias, mentalidad autodidacta, código limpio y mantenible.",
  },
  {
    id: "principles",
    kind: "section",
    index: "03",
    eyebrow: "Cómo trabajo",
    title: "Si no es claro,\nno ",
    accent: "está terminado.",
    list: [
      { n: "01", icon: "zap", text: "Resolver problemas rápido, sin atajos que cobren factura después." },
      { n: "02", icon: "code", text: "Código limpio y mantenible: se nota a los 6 meses, no en el demo." },
      { n: "03", icon: "book-open", text: "Autodidacta por naturaleza: si no sé algo, lo aprendo en el camino." },
    ],
    alt: "Cómo trabajo. 01, resolver problemas rápido sin atajos que cobren factura después. 02, código limpio y mantenible que se nota a los 6 meses, no en el demo. 03, autodidacta por naturaleza: si no sé algo, lo aprendo en el camino.",
  },
  {
    id: "stack",
    kind: "section",
    index: "04",
    eyebrow: "Herramientas",
    title: "El stack\nde ",
    accent: "hoy.",
    // `icon` is a devicon slug (https://devicon.dev) resolved against a
    // pinned CDN version in render.js — the real, official brand mark for
    // each tool, not a generic glyph.
    categories: [
      {
        label: "Frontend",
        tags: [
          { id: "html", label: "html", icon: "html5/html5-original" },
          { id: "css", label: "css", icon: "css3/css3-original" },
          { id: "javascript", label: "javascript", icon: "javascript/javascript-original" },
          { id: "typescript", label: "typescript", icon: "typescript/typescript-original" },
          { id: "react", label: "react", icon: "react/react-original" },
          { id: "nextjs", label: "next.js", icon: "nextjs/nextjs-original" },
          { id: "vite", label: "vite", icon: "vitejs/vitejs-original" },
          { id: "astro", label: "astro", icon: "astro/astro-original" },
          { id: "tailwindcss", label: "tailwindcss", icon: "tailwindcss/tailwindcss-original" },
          { id: "wordpress", label: "wordpress", icon: "wordpress/wordpress-original" },
        ],
      },
      {
        label: "Backend",
        tags: [
          { id: "java", label: "java", icon: "java/java-original" },
          { id: "c", label: "c", icon: "c/c-original" },
          { id: "mysql", label: "mysql", icon: "mysql/mysql-original" },
        ],
      },
      {
        label: "Diseño",
        tags: [
          { id: "figma", label: "figma", icon: "figma/figma-original" },
          { id: "adobe xd", label: "adobe xd", icon: "xd/xd-plain" },
          { id: "illustrator", label: "illustrator", icon: "illustrator/illustrator-plain" },
          { id: "photoshop", label: "photoshop", icon: "photoshop/photoshop-plain" },
        ],
      },
      {
        label: "Herramientas",
        tags: [
          { id: "git", label: "git", icon: "git/git-original" },
          { id: "github", label: "github", icon: "github/github-original" },
          { id: "docker", label: "docker", icon: "docker/docker-original" },
          { id: "npm", label: "npm", icon: "npm/npm-original-wordmark" },
          { id: "postman", label: "postman", icon: "postman/postman-original" },
          { id: "swagger", label: "swagger", icon: "swagger/swagger-original" },
          { id: "notion", label: "notion", icon: "notion/notion-original" },
        ],
      },
    ],
    alt: "Herramientas por categoría. Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite, Astro, Tailwind CSS, WordPress. Backend: Java, C, MySQL. Diseño: Figma, Adobe XD, Illustrator, Photoshop. Herramientas: Git, GitHub, Docker, NPM, Postman, Swagger, Notion.",
  },
  {
    id: "changelog",
    kind: "section",
    index: "05",
    eyebrow: "Changelog",
    title: "Siempre\nen ",
    accent: "beta.",
    diff: {
      current: { icon: "flame", label: "v-actual", items: ["Frontend & UX/UI", "Proyectos para marcas y agencias", "Diseño de sistemas"] },
      next: { icon: "loader-circle", label: "v-next · en progreso", items: ["Kubernetes", "CI/CD avanzado", "Microservicios", "Animaciones (Framer Motion / GSAP)", "Testing (Jest, Cypress)", "Server-side rendering"] },
    },
    alt: "Changelog: versión actual, frontend y UX/UI, proyectos para marcas y agencias, diseño de sistemas. Siguiente versión en progreso: Kubernetes, CI/CD avanzado, microservicios, animaciones con Framer Motion y GSAP, testing con Jest y Cypress, y server-side rendering.",
  },
  {
    id: "contributions",
    kind: "contributions",
    index: "06",
    eyebrow: "Actividad",
    title: "Lo que he\nestado ",
    accent: "haciendo.",
    // `calendar` and `description` are filled in by build-html.mjs from
    // scripts/design-system/render/contributions-data.json (written by
    // fetch-contributions.mjs) — real GitHub data, not a placeholder.
    alt: "Actividad en GitHub de los últimos 12 meses. Se actualiza a diario.",
  },
  {
    id: "contact",
    kind: "contact",
    eyebrow: "(07) Contacto",
    title: "¿Seguimos",
    accent: "hablando",
    tail: "?",
    description: "Un proyecto, una vacante o simplemente ganas de hablar de diseño y código. Te respondo rápido.",
    email: "julian.jcpa@gmail.com",
    // No decorative social icons here — this panel is a static screenshot,
    // so they'd look clickable without being clickable. The real, working
    // links live in README.md as actual <a> tags (scripts/social-links.mjs
    // + scripts/fetch-social-icons.mjs).
    marquee: { items: ["Hablemos"], tilt: -1.6, tone: "ink", size: 32 },
    alt: "Contacto: ¿un proyecto, una vacante o ganas de hablar de diseño y código? Escríbeme, respondo rápido.",
  },
];
