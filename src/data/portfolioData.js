export const portfolioData = {
  name: "Rishabh Singh",
  firstName: "Rishabh",
  role: "Frontend Engineer",
  company: "DevOn",
  location: "India",
  email: "Rishabh797604@gmail.com",
  github: "https://github.com/Rishabh775",
  linkedin: "https://www.linkedin.com/in/rishabh-singh-794171205/",
  resume:
    "https://drive.google.com/file/d/1mqEx0ezn-O1cfPgvdgPwD5gGXHT5iysO/view?usp=drive_link",
  tagline:
    "Frontend engineer building performant, accessible web applications with React and Next.js.",
  highlight: "1st place at Smart Odisha Hackathon 2022",
  typewriterTexts: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Specialist",
    "TypeScript Enthusiast",
  ],
  skillCategories: [
    {
      title: "Frontend",
      skills: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#ffffff" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Tailwind CSS", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Prisma", color: "#2D3748" },
        { name: "MongoDB", color: "#47A248" },
      ],
    },
    {
      title: "Tools & AI",
      skills: [
        { name: "Git", color: "#F05032" },
        { name: "Cursor", color: "#A855F7" },
        { name: "GitHub Copilot", color: "#6E40C9" },
      ],
    },
  ],
  projects: [
    {
      image: "/oxyzon.png",
      name: "Oxyzon",
      url: "https://next-js-ecommerce-omega.vercel.app/",
      description:
        "Full-stack e-commerce platform with product catalog, cart, and checkout flow.",
      tech: ["Next.js", "TypeScript", "Prisma", "MongoDB"],
      live: true,
      accent: "#f97316",
    },
    {
      image: "/Loop.png",
      name: "Loop",
      url: "https://loop-sepia.vercel.app/",
      description:
        "Music streaming platform with playlist management and real-time audio playback.",
      tech: ["React", "Node.js"],
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
      period: "2024 – Present",
      current: true,
      description:
        "Building performant web applications with React and Next.js for enterprise clients.",
    },
  ],
  achievements: [
    { title: "1st Place — Smart Odisha Hackathon 2022", icon: "🏆" },
    { title: "Promising Fresher Award", icon: "⭐" },
  ],
  navItems: ["HOME", "SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"],
};
