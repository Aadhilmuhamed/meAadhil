// Single source for dashboard copy. Placeholder links marked "#" — fill in later.

// basePath is injected by Next at build time (GitHub Pages sets it via configure-pages)
export const withBase = (path) => `${process.env.__NEXT_ROUTER_BASEPATH || ""}${path}`;

export const profile = {
  name: "Aadhil Muhamed",
  first: "Aadhil",
  role: "Full-Stack Developer",
  tag: "Architect & Builder",
  status: "Available for New Projects",
  headline: "AI SaaS • Custom Web Apps • WordPress & WooCommerce • Migrations",
  location: "SL / Remote",
  email: "aadhilmuhamed2022@gmail.com",
  phone: "+94 77 873 9418",
  whatsapp: "https://wa.me/94778739418",
  linkedin: "https://www.linkedin.com/in/aadhil-muhamed/",
  cv: "/resume/cv.pdf",
  since: "2023",
  years: "3+",
  bio: "Specialized in AI-integrated SaaS products, modern full-stack web apps, custom WordPress/WooCommerce stores, and safe end-to-end website migrations.",
  pitch:
    "I build fast, scalable, SEO-optimized products, from AI-powered SaaS apps with Next.js, React and Node.js to high-converting WordPress and WooCommerce stores. Launching from scratch or migrating an existing site, I ship clean, production-ready work.",
};

export const terminalLines = [
  { text: "$ init production-build --ssr", tone: "text-emerald-300" },
  { text: "> REST + Supabase DB: Synchronized", tone: "text-white/80" },
  { text: "> Lighthouse Performance: 99+", tone: "text-amber-300" },
];

export const coreExpertise = ["AI & SaaS Apps", "Next.js & Node.js", "WordPress & WooCommerce", "Website Migrations"];

export const miniStats = [
  { icon: "chart", value: "99+", label: "Lighthouse Score" },
  { icon: "code", value: "Full-Stack", label: "Next.js • WooCommerce" },
  { icon: "server", value: "Zero Data Loss", label: "Site Migrations" },
];

export const featuredBuilds = [
  { icon: "invoice", title: "Invoice SaaS Application", stack: "Next.js • Supabase • Tailwind", dark: true },
  { icon: "plane", title: "Travel Booking Engine", stack: "REST API • Node.js • Multi-vendor", dark: false },
];

export const deliverables = [
  "Clean, production-ready Next.js / WordPress code",
  "99+ Lighthouse & Core Web Vitals target",
  "Mobile-first, SEO-ready from day one",
  "Deployment, handover docs & post-launch support",
];

export const services = [
  {
    icon: "sparkles",
    tile: "bg-violet-700",
    title: "AI-Powered SaaS Development",
    tag: "AI & Full-Stack",
    tagClass: "bg-white/80 text-violet-700",
    desc: "End-to-end SaaS products with AI built in, from database and auth to billing and a polished, responsive UI.",
    checks: ["LLM API integration (OpenAI / Claude / Gemini)", "Auth, roles & subscription billing", "Supabase / Firebase / REST APIs"],
    footer: "Next.js • Node.js • AI",
    preset: "AI SaaS Development",
  },
  {
    icon: "code",
    tile: "bg-neutral-900",
    title: "Custom Website Development",
    tag: "Modern Web",
    tagClass: "bg-white/80 text-neutral-700",
    desc: "Fast, mobile-first, SEO-optimized websites built to turn visitors into customers.",
    checks: ["Landing pages & business sites", "99+ Lighthouse performance", "Technical SEO & schema markup"],
    footer: "Next.js • React • Tailwind",
    preset: "Web Development",
  },
  {
    icon: "wordpress",
    tile: "bg-sky-700",
    title: "WordPress & WooCommerce",
    tag: "CMS & E-Commerce",
    tagClass: "bg-white/80 text-sky-800",
    desc: "Online stores and CMS sites that are easy for you to manage and quick for customers to buy from.",
    checks: ["Custom themes & Elementor builds", "Store, products & payment gateways", "Speed & checkout optimization"],
    footer: "WordPress • WooCommerce",
    preset: "WordPress & WooCommerce Dev",
  },
  {
    icon: "migrate",
    tile: "bg-emerald-600",
    title: "Website & Store Migration",
    tag: "Zero Downtime",
    tagClass: "bg-emerald-100 text-emerald-800",
    desc: "Move your site, database or store to a faster host or modern stack, with no data loss and your SEO kept intact.",
    checks: ["Legacy site → Next.js / WordPress", "WooCommerce products, orders & customers", "Hosting, DNS, SSL & 301 redirects"],
    footer: "No SEO Drop • No Data Loss",
    preset: "Website Migration",
  },
];

export const experience = [
  {
    company: "Techneapp",
    badge: "CURRENT",
    badgeClass: "bg-neutral-900 text-white",
    dates: "Feb 2024 – Present · Remote",
    role: "Software Engineer (Next.js & Travel/Payment Systems)",
    desc: "Architected 4 production platforms across Next.js (v12–16) and Node.js. Integrated Flight, Hotel, Cruise, Activity, Weather & Wiki APIs alongside Stripe and Super Payments checkout flows.",
    dot: "bg-neutral-900",
  },
  {
    company: "Scripterlab",
    badge: "CONCURRENT",
    badgeClass: "bg-emerald-700 text-white",
    dates: "Feb 2024 – Present · Colombo / Remote",
    role: "Full-Stack & WordPress Engineer",
    desc: "Delivered and optimized 7+ WordPress & WooCommerce websites (including 2 custom WooCommerce stores and 4+ live commercial platforms), handling speed optimization, security, and full site migrations.",
    dot: "bg-emerald-600",
  },
  {
    company: "Independent AI SaaS, Mobile & Web Builder",
    dates: "Apr 2023 – Present · Remote",
    role: "Solo Product Developer (Web, Mobile & AI SaaS)",
    desc: "Built cross-platform mobile apps (React Native) and AI-powered SaaS products using Firebase, Supabase, and rapid AI-assisted (\"Vibe Coding\") workflows from MVP to production.",
    dot: "bg-violet-600",
  },
];

export const experienceMetrics = [
  { value: "11+ Live", label: "NEXT.JS & WP SITES SHIPPED", tone: "text-neutral-900" },
  { value: "6+ APIs", label: "FLIGHT, HOTEL, CRUISE & STRIPE", tone: "text-emerald-700" },
  { value: "99+ Speed", label: "WP, WOOCOMMERCE & SAAS", tone: "text-neutral-900" },
];

export const stack = [
  {
    icon: "desktop",
    title: "Frontend & Mobile",
    sub: "Web & Cross-Platform",
    chips: [
      ["Next.js (v12–16)", "bg-neutral-900 text-white"],
      ["React", "bg-sky-100 text-sky-800"],
      ["React Native", "bg-indigo-100 text-indigo-800"],
      ["TypeScript", "bg-blue-100 text-blue-800"],
      ["Tailwind CSS", "bg-cyan-100 text-cyan-800"],
    ],
  },
  {
    icon: "server",
    title: "Backend, Cloud & Payments",
    sub: "APIs, DBs & Checkout",
    chips: [
      ["Node.js", "bg-emerald-100 text-emerald-800"],
      ["Supabase", "bg-teal-100 text-teal-800"],
      ["Firebase", "bg-amber-100 text-amber-800"],
      ["Stripe", "bg-indigo-100 text-indigo-800"],
      ["Super Payments", "bg-fuchsia-100 text-fuchsia-800"],
      ["Flight / Hotel / Cruise APIs", "bg-sky-100 text-sky-800"],
      ["Weather & Wiki APIs", "bg-orange-100 text-orange-800"],
    ],
  },
  {
    icon: "toolbox",
    title: "CMS, E-Commerce & AI Workflow",
    sub: "Stores & Vibe Coding",
    chips: [
      ["WordPress", "bg-sky-100 text-sky-800"],
      ["WooCommerce", "bg-purple-100 text-purple-800"],
      ["Speed & Core Web Vitals", "bg-emerald-100 text-emerald-800"],
      ["Site Migrations", "bg-green-100 text-green-800"],
      ["AI SaaS", "bg-violet-100 text-violet-800"],
      ["Vibe Coding (Cursor / Claude)", "bg-pink-100 text-pink-800"],
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
      sub: "View Certificate ↗",
      href: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis",
    },
  ],
};

export const socials = [
  { key: "github", name: "GitHub", handle: "@Aadhilmuhamed", tile: "bg-neutral-900", metaLabel: "Repos", meta: "48+", href: "https://github.com/Aadhilmuhamed" },
  { key: "linkedin", name: "LinkedIn", handle: "/in/aadhil-muhamed", tile: "bg-[#0077b5]", metaLabel: "Network", meta: "Connect", href: "https://www.linkedin.com/in/aadhil-muhamed/" },
  { key: "facebook", name: "Facebook", handle: "@knsaadhil", tile: "bg-blue-600", metaLabel: "Social", meta: "Message", href: "https://web.facebook.com/knsaadhil/" },];

export const engagementModels = [
  { dot: "bg-violet-500", title: "AI SaaS & Web Build", desc: "Fixed-scope MVP or custom website in 2–4 weeks", pill: "1 Slot Open", service: "AI SaaS Development" },
  { dot: "bg-sky-500", title: "WordPress & WooCommerce", desc: "Custom store setup, speed & payment integration", pill: "Fast Delivery", service: "WordPress & WooCommerce Dev" },
  { dot: "bg-amber-500", title: "Site Migration & Retainer", desc: "Zero-downtime migration, fixes & monthly support", pill: "On Demand", service: "Website Migration" },
];

export const toolkit = [
  { icon: "video", label: "Loom Demos" },
  { icon: "slack", label: "Slack Connect" },
  { icon: "file", label: "Notion Docs" },
  { icon: "calendar", label: "Google Meet" },
];

// Enquiry modal options
export const enquiryServices = [
  { label: "AI SaaS App", value: "AI SaaS Development", icon: "sparkles", on: "text-violet-300" },
  { label: "Custom Website", value: "Web Development", icon: "code", on: "text-emerald-300" },
  { label: "WordPress / Woo", value: "WordPress & WooCommerce Dev", icon: "wordpress", on: "text-sky-300" },
  { label: "Site Migration", value: "Website Migration", icon: "migrate", on: "text-amber-300" },
  { label: "Speed & SEO", value: "Speed & SEO", icon: "chart", on: "text-emerald-300" },
];

export const budgets = [
  { label: "< $500", sub: "Quick Fix / Migrate", value: "Under $500" },
  { label: "$500–$1.5k", sub: "Standard Site / Store", value: "$500 - $1,500" },
  { label: "$1.5k–$3k", sub: "Full Web / SaaS Build", value: "$1,500 - $3,000" },
  { label: "$3k+", sub: "Custom AI SaaS", value: "$3,000+" },
];

export const timelines = [
  { label: "Urgent (< 1 Week)", value: "Urgent (< 1 week)" },
  { label: "1–2 Weeks", value: "1-2 weeks" },
  { label: "2–4 Weeks", value: "2-4 weeks" },
  { label: "Flexible", value: "Flexible" },
];
