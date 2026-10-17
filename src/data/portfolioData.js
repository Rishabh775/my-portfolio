export const portfolioData = {
  name: "Rishabh Singh",
  firstName: "Rishabh",
  role: "Full Stack Engineer",
  heroRole: "Frontend Engineer · React · Next.js · TypeScript · AI",
  company: "DevOn",
  location: "India",
  email: "Rishabh797604@gmail.com",
  github: "https://github.com/Rishabh775",
  linkedin: "https://www.linkedin.com/in/rishabh-singh-794171205/",
  resume:
    "https://drive.google.com/file/d/1mqEx0ezn-O1cfPgvdgPwD5gGXHT5iysO/view?usp=drive_link",
  tagline:
    "Full stack engineer building performant, accessible web applications with React, Next.js, TypeScript, and AI integrations.",
  highlight: "Top 4 in DevOn's company-wide AI Innovation Programme",
  stats: [
    { value: "2+", label: "Years Exp" },
    { value: "15+", label: "Technologies" },
    { value: "🏆", label: "Hackathon Winner" },
  ],
  skillCategories: [
    {
      title: "Frontend",
      skills: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#ffffff" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "React Native", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "Redux Toolkit", color: "#764ABC" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#404040" },
        { name: "FastAPI", color: "#009688" },
        { name: "GraphQL", color: "#E535AB" },
        { name: "REST APIs", color: "#FF6C37" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Prisma", color: "#2D3748" },
        { name: "SQL", color: "#F29111" },
      ],
    },
    {
      title: "Testing, Tools & AI",
      skills: [
        { name: "Jest", color: "#C21325" },
        { name: "Playwright", color: "#2EAD33" },
        { name: "Git", color: "#F05032" },
        { name: "GitHub Actions", color: "#2088FF" },
        { name: "Vercel", color: "#000000" },
        { name: "Figma", color: "#F24E1E" },
        { name: "Gemini", color: "#4285F4" },
        { name: "HDBSCAN", color: "#1DB954" },
      ],
    },
  ],
  projects: [
    {
      image: "/planets.png",
      name: "AI Incident Clustering",
      url: "https://github.com/Rishabh775",
      description:
        "AI-assisted incident clustering app using Sentence Transformers, HDBSCAN, and Gemini 2.0 Flash for semantic grouping and LLM classification — placed Top 4 of 25 teams at DevOn's innovation programme.",
      tech: ["React", "TypeScript", "FastAPI", "Sentence Transformers", "HDBSCAN", "Gemini"],
      live: false,
      accent: "#10b981",
    },
    {
      image: "/oxyzon.png",
      name: "Oxyzon",
      url: "https://next-js-ecommerce-omega.vercel.app/",
      description:
        "Full-stack e-commerce platform with product catalog, cart, server-side pagination, user profiles, GitHub OAuth, and a Prisma/MongoDB data-access layer.",
      tech: ["Next.js", "TypeScript", "Prisma", "MongoDB", "NextAuth"],
      live: true,
      accent: "#f97316",
    },
    {
      image: "/Loop.png",
      name: "Loop",
      url: "https://loop-sepia.vercel.app/",
      description:
        "Music streaming and cloud storage app with uploads, playlists, and offline listening; engineered a reusable useAudio hook coordinating playback state and queue transitions.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Axios", "Node.js"],
      live: true,
      accent: "#ec4899",
    },
    {
      image: "/visitto.png",
      name: "Visitto",
      url: "https://visitto.netlify.app/",
      description:
        "Landing page for a travel agency with immersive scroll experiences.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: true,
      accent: "#8b5cf6",
    },
  ],
  experiences: [
    {
      role: "Frontend Engineer",
      company: "DevOn",
      period: "Apr 2025 – Present",
      current: true,
      bullets: [
        "Develop and maintain frontend capabilities for a scholarly publishing platform using React, TypeScript, Recoil, and GraphQL within a Yarn Workspaces monorepo.",
        "Engineered an AI-assisted incident-clustering application using Sentence Transformers, HDBSCAN, Gemini 2.0 Flash, FastAPI, and React/TypeScript — placed top 4 of 25 in DevOn's innovation programme.",
        "Diagnosed production defects across frontend, GraphQL, and database layers, implementing GraphQL resolvers and SQL fixes when root causes extended beyond the UI.",
        "Converted Figma specifications into WCAG-compliant, reusable design-system components; automated critical user journeys with Jest, Playwright, and Cucumber BDD test suites.",
        "Recognized with the Promising Fresher Award (2025) for delivering production-level features independently within the first months of joining.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "i2Campus (Insors IT Solutions)",
      period: "Mar 2024 – Feb 2025",
      current: false,
      bullets: [
        "Sole frontend and mobile engineer on a 3-person team — built the i2Campus School Management System end-to-end across web (React) and mobile (React Native + Expo).",
        "Delivered 5 permission-based dashboards for Student, Teacher, Parent, Admin, and Principal actors, covering attendance, fee management, assignments, scheduling, and announcements.",
        "Established a reusable Tailwind CSS component library and Redux Toolkit + RTK Query data layer, standardizing UI implementation and type-safe API consumption across web and mobile.",
      ],
    },
  ],
  achievements: [
    { title: "Top 4 of 25 — DevOn Innovation Programme 2025", icon: "🚀" },
    { title: "Promising Fresher Award 2025", icon: "⭐" },
    { title: "1st Place — Smart Odisha Hackathon 2022", icon: "🏆" },
    { title: "Top 7 Finalist — HackaversuMM 2022", icon: "🎖️" },
  ],
  navItems: ["HOME", "SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"],
};
