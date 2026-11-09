// Single source for dashboard copy. Placeholder links marked "#" — fill in later.

// basePath is injected by Next at build time (GitHub Pages sets it via configure-pages)
export const withBase = (path) => `${process.env.__NEXT_ROUTER_BASEPATH || ""}${path}`;

export const profile = {
  name: "Aadhil Muhamed",
  first: "Aadhil",
  role: "Full-Stack Software Engineer",
  tag: "Architect & Builder",
  status: "Available for Q2 Projects",
  location: "SL / Remote",
  email: "aadhilmuhamed2022@gmail.com",
  phone: "+94 77 873 9418",
  whatsapp: "https://wa.me/94778739418",
  linkedin: "https://www.linkedin.com/in/aadhil-muhamed/",
  cv: "/resume/cv.pdf",
  since: "2023",
  years: "3+",
  bio: "Specialized in engineering robust backend architectures, resilient microservices, and pixel-precise, responsive modern frontends.",
  pitch:
    "I build fast, scalable and SEO-optimized web applications with Next.js, React and Node.js from data modeling and REST API to polished, production-ready interfaces.",
};

export const terminalLines = [
  { text: "$ init production-build --ssr", tone: "text-emerald-300" },
  { text: "> REST + Supabase DB: Synchronized", tone: "text-white/80" },
  { text: "> Performance Score: 99.8% Lighthouse", tone: "text-amber-300" },
];

export const coreExpertise = ["Full-Stack Apps", "REST & GraphQL APIs", "SEO & Performance", "UI/UX Systems"];

export const miniStats = [
  { icon: "chart", value: "99.8%", label: "Lighthouse Speed" },
  { icon: "code", value: "TypeScript", label: "Strict Type-Safe" },
  { icon: "badge", value: "Clean Code", label: "CI/CD & Testing" },
];

export const featuredBuilds = [
  { icon: "invoice", title: "Invoice SaaS Application", stack: "Next.js 14 • Supabase • Tailwind", dark: true },
  { icon: "plane", title: "Travel Booking Engine", stack: "REST API • Node.js • Multi-vendor", dark: false },
];

export const deliverables = [
  "Production-grade TypeScript & Next.js 14 code",
  "99+ Lighthouse & Core Web Vitals guarantee",
  "Figma tokens mapped to scalable component systems",
  "CI/CD deployment & post-launch SLA documentation",
];

export const services = [
  {
    icon: "code",
    tile: "bg-neutral-900",
    title: "Web Development",
    tag: "Primary Core",
    tagClass: "bg-white/80 text-neutral-700",
    desc: "Next.js 14, React, Node.js & Express with high-concurrency architecture.",
    checks: ["High-concurrency REST & GraphQL APIs", "Resilient microservices architecture", "Schemas: MongoDB, Supabase, PostgreSQL"],
    footer: "SSR • Edge APIs",
    preset: "Web Development",
  },
  {
    icon: "figma",
    tile: "bg-purple-700",
    title: "UI/UX & Design Systems",
    tag: "Design Ops",
    tagClass: "bg-white/80 text-purple-700",
    desc: "Design tokens and responsive component architecture translated straight into code.",
    checks: ["Pixel-perfect Figma-to-code pipeline", "High-fidelity prototypes & micro-interactions", "Accessible WCAG AA/AAA interfaces"],
    footer: "Tokens • React Kits",
    preset: "UI/UX Design",
  },
  {
    icon: "gauge",
    tile: "bg-emerald-600",
    title: "Performance & SEO Tuning",
    tag: "+30% Boost",
    tagClass: "bg-emerald-100 text-emerald-800",
    desc: "Speed optimizations that raise SERP rank and slash bounce rates.",
    checks: ["30% speed boost optimizations guarantee", "Lighthouse 99+ audits & Core Web Vitals", "SSR/SSG caching strategies & Edge CDN"],
    footer: "99+ Scores • Web Vitals",
    preset: "SEO Optimization",
  },
  {
    icon: "compass",
    tile: "bg-amber-600",
    title: "Brand & Architecture Consulting",
    tag: "Advisory",
    tagClass: "bg-white/80 text-amber-700",
    desc: "Strategic technical direction, tech-stack evaluation and vector identity kits.",
    checks: ["Modern logo systems & visual brand guidelines", "Tech stack evaluation & migration plans", "Cloud deployment & architectural roadmaps"],
    footer: "AWS/Vercel • Roadmaps",
    preset: "Web Development",
  },
];

export const experience = [
  {
    company: "Scripterlab",
    badge: "CURRENT",
    badgeClass: "bg-neutral-900 text-white",
    dates: "Feb 2024 – Present · Colombo / Remote",
    role: "Software Engineer",
    roleClass: "text-emerald-800",
    desc: "Integrated 6+ travel booking APIs, boosted query performance by 30%, scalable Node.js microservices.",
    dot: "bg-neutral-900",
  },
  {
    company: "Techneapp",
    badge: "CONCURRENT",
    badgeClass: "bg-emerald-700 text-white",
    dates: "Feb 2024 – Present · Remote",
    role: "Software Engineer",
    roleClass: "text-neutral-800",
    desc: "Next.js enterprise applications, Supabase/MongoDB integrations, distributed workflows, and scalable component architectures.",
    dot: "bg-emerald-600",
  },
  {
    company: "Techneapp",
    dates: "Apr 2023 – Feb 2024 · Remote",
    role: "Associate Software Engineer",
    roleClass: "text-neutral-800",
    desc: "Full-stack features, frontend UI systems, client portal development, and headless CMS integrations.",
    dot: "bg-neutral-600",
  },
];

export const experienceMetrics = [
  { value: "6+", label: "BOOKING APIS HOOKED", tone: "text-neutral-900" },
  { value: "+30%", label: "QUERY OPTIMIZATION", tone: "text-emerald-700" },
  { value: "100%", label: "PRODUCTION UPTIME", tone: "text-neutral-900" },
];

export const stack = [
  {
    icon: "desktop",
    title: "Frontend",
    sub: "Next 14 / React 18",
    chips: [
      ["Next.js", "bg-neutral-900 text-white"],
      ["React", "bg-sky-100 text-sky-800"],
      ["TypeScript", "bg-blue-100 text-blue-800"],
      ["Tailwind CSS", "bg-cyan-100 text-cyan-800"],
      ["JavaScript", "bg-amber-100 text-amber-800"],
    ],
  },
  {
    icon: "server",
    title: "Backend & Cloud",
    sub: "Microservices & DBs",
    chips: [
      ["Node.js", "bg-emerald-100 text-emerald-800"],
      ["Express", "bg-neutral-200 text-neutral-800"],
      ["REST APIs", "bg-purple-100 text-purple-800"],
      ["MongoDB", "bg-green-100 text-green-800"],
      ["Supabase", "bg-teal-100 text-teal-800"],
      ["Docker", "bg-blue-50 text-blue-700"],
      ["Git", "bg-orange-100 text-orange-800"],
    ],
  },
  {
    icon: "toolbox",
    title: "CMS & Tools",
    sub: "Design & AI Stack",
    chips: [
      ["WordPress", "bg-sky-100 text-sky-800"],
      ["Elementor", "bg-rose-100 text-rose-800"],
      ["WooCommerce", "bg-purple-100 text-purple-800"],
      ["Figma", "bg-pink-100 text-pink-800"],
      ["AI Tools (Claude, Cursor)", "bg-violet-100 text-violet-800"],
    ],
  },
];

export const credentials = {
  degree: { title: "SLIATE HND in Engineering", years: "2017–2021", sub: "Higher National Diploma in Engineering" },
  badges: [
    { icon: "award", tile: "bg-amber-100 text-amber-700", title: "IBM Enterprise Thinking", sub: "Co-Creator Badge", href: "#" },
    {
      icon: "certificate",
      tile: "bg-emerald-100 text-emerald-700",
      title: "freeCodeCamp",
      sub: "Full-Stack & APIs",
      href: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis",
    },
  ],
};

export const socials = [
  { key: "github", name: "GitHub", handle: "@Aadhilmuhamed", tile: "bg-neutral-900", metaLabel: "Repos", meta: "48+", href: "https://github.com/Aadhilmuhamed" },
  { key: "linkedin", name: "LinkedIn", handle: "/in/aadhil-muhamed", tile: "bg-[#0077b5]", metaLabel: "Network", meta: "Connect", href: "https://www.linkedin.com/in/aadhil-muhamed/" },
  { key: "x", name: "X / Twitter", handle: "@aadhil_dev", tile: "bg-neutral-950", metaLabel: "Network", meta: "Follow", href: "#" },
  { key: "facebook", name: "Facebook", handle: "@knsaadhil", tile: "bg-blue-600", metaLabel: "Social", meta: "Message", href: "https://web.facebook.com/knsaadhil/" },
  { key: "instagram", name: "Instagram", handle: "@aadhil.builds", tile: "bg-gradient-to-br from-amber-500 via-rose-600 to-purple-700", metaLabel: "Visuals", meta: "View", href: "#" },
];

export const engagementModels = [
  { dot: "bg-emerald-500", title: "Full-Time Contract", desc: "Dedicated 30-40h/wk engineering capacity", pill: "Q2 Available" },
  { dot: "bg-amber-500", title: "Milestone MVP", desc: "Fixed-scope 2 to 6 week turnarounds", pill: "1 Slot Open" },
  { dot: "bg-sky-500", title: "Hourly Advisory", desc: "Code review, audits & system architecture", pill: "On Demand" },
];

export const toolkit = [
  { icon: "video", label: "Loom Demos" },
  { icon: "slack", label: "Slack Connect" },
  { icon: "file", label: "Notion Docs" },
  { icon: "calendar", label: "Google Meet" },
];

// Enquiry modal options
export const enquiryServices = [
  { label: "Web Dev", value: "Web Development", icon: "code", on: "text-emerald-300" },
  { label: "UI/UX Design", value: "UI/UX Design", icon: "figma", on: "text-purple-300" },
  { label: "WP & Woo Dev", value: "WordPress & WooCommerce Dev", icon: "wordpress", on: "text-sky-300" },
  { label: "Marketing", value: "Digital Marketing", icon: "bolt", on: "text-amber-300" },
  { label: "SEO Optimize", value: "SEO Optimization", icon: "chart", on: "text-emerald-300" },
];

export const budgets = [
  { label: "< $500", sub: "Sprint", value: "Under $500" },
  { label: "$500–$2k", sub: "Standard", value: "$500 - $2,000" },
  { label: "$2k–$5k", sub: "Full Build", value: "$2,000 - $5,000" },
  { label: "$5k+", sub: "Enterprise", value: "$5,000+" },
];

export const timelines = [
  { label: "ASAP (< 2 wks)", value: "urgent" },
  { label: "2–4 Weeks", value: "1-month" },
  { label: "1–2 Months", value: "2-month" },
  { label: "Flexible", value: "flexible" },
];
