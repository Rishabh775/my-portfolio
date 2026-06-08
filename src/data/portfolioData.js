export const portfolioData = {
  name: "Rishabh Singh",
  firstName: "Rishabh",
  role: "Frontend Engineer",
  heroRole: "Frontend Engineer · React · Next.js · TypeScript",
  company: "DevOn",
  location: "India",
  email: "Rishabh797604@gmail.com",
  github: "https://github.com/Rishabh775",
  linkedin: "https://www.linkedin.com/in/rishabh-singh-794171205/",
  resume:
    "https://drive.google.com/file/d/1mqEx0ezn-O1cfPgvdgPwD5gGXHT5iysO/view?usp=drive_link",
  tagline:
    "Frontend engineer building performant, accessible web applications with React, Next.js, and TypeScript.",
  highlight: "1st place at Smart Odisha Hackathon 2022",
  stats: [
    { value: "2+", label: "Years Exp" },
    { value: "11+", label: "Technologies" },
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
      bullets: [
        "Build performant, accessible React and Next.js applications for enterprise clients across multiple product domains.",
        "Develop reusable TypeScript component libraries and shared UI patterns to speed up delivery across squads.",
        "Partner with designers and backend engineers on API integration, code reviews, and production-ready releases.",
      ],
    },
    {
      role: "Software Associate",
      company: "Insors IT Services",
      period: "Jun 2024 – Mar 2025",
      current: false,
      bullets: [
        "Delivered responsive React interfaces for client-facing web applications in an agile delivery environment.",
        "Integrated REST APIs and implemented CRUD workflows with TypeScript to improve feature reliability.",
        "Contributed to sprint planning, peer reviews, and iterative UI improvements from stakeholder feedback.",
      ],
    },
  ],
  achievements: [
    { title: "1st Place — Smart Odisha Hackathon 2022", icon: "🏆" },
    { title: "Promising Fresher Award", icon: "⭐" },
  ],
  navItems: ["HOME", "SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"],
};
