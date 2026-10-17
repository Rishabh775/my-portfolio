import { portfolioData } from "./portfolioData.js";

export function buildFacts() {
  const skills = portfolioData.skillCategories.flatMap((c) => c.skills.map((s) => s.name));
  return {
    name: portfolioData.name,
    role: portfolioData.role,
    company: portfolioData.company,
    location: portfolioData.location,
    email: portfolioData.email,
    phone: portfolioData.phone,
    github: portfolioData.github,
    linkedin: portfolioData.linkedin,
    resume: portfolioData.resume,
    tagline: portfolioData.tagline,
    skills,
    skillCategories: portfolioData.skillCategories.map((c) => ({
      title: c.title,
      skills: c.skills.map((s) => s.name),
    })),
    experience: portfolioData.experiences.map((e) => ({
      role: e.role,
      company: e.company,
      period: e.period,
      highlights: e.bullets,
    })),
    projects: portfolioData.projects.map((p) => ({
      name: p.name,
      description: p.description,
      tech: p.tech,
      url: p.url,
    })),
    achievements: portfolioData.achievements.map((a) => a.title),
    education: portfolioData.education,
  };
}

export function buildSystemPrompt() {
  const f = buildFacts();
  return `You are Optimus, a helpful AI assistant embedded on Rishabh Singh's portfolio website. You answer visitor questions about Rishabh in a concise, friendly, first-person voice (as if representing Rishabh).

RULES:
- Answer ONLY from the FACTS below. Never invent experience, skills, employers, or claims that are not listed.
- If the information is not in the facts, say you don't have that detail and suggest the visitor email Rishabh at ${f.email}.
- Be brief: 1-3 short sentences, or a short list when listing skills/projects.
- When a visitor shows hiring interest (roles, availability, "hire", "job"), say Rishabh is open to opportunities and share his email ${f.email} and LinkedIn.

FACTS:
- Name: ${f.name}
- Role: ${f.role} at ${f.company} (formerly DevOn)
- Location: ${f.location}
- Summary: ${f.tagline}
- Skills: ${f.skills.join(", ")}
- Experience:
${f.experience
  .map((e) => `  - ${e.role} at ${e.company} (${e.period})`)
  .join("\n")}
- Projects:
${f.projects.map((p) => `  - ${p.name}: ${p.description}`).join("\n")}
- Achievements: ${f.achievements.join("; ")}
- Education: ${f.education
  .map((e) => `${e.degree}, ${e.school} (${e.period}, ${e.detail})`)
  .join("\n")}
- GitHub: ${f.github}
- LinkedIn: ${f.linkedin}
- Resume: ${f.resume}
- Email: ${f.email}
- Phone: ${f.phone}`;
}

export function fallbackAnswer(message) {
  const f = buildFacts();
  const q = (message || "").toLowerCase();
  const has = (...words) => words.some((w) => q.includes(w));

  if (/\b(hi|hello|hey|hiya|yo)\b/.test(q) || has("who are you", "what do you do", "what can you do")) {
    return `Hey! I'm Optimus, an AI assistant that can tell you about ${f.name}.\n\nHe's a ${f.role} at ${f.company}, based in ${f.location}.\n\nAsk me about his experience, skills, projects, or how to get in touch.`;
  }

  if (has("experience", "work", "job", "company", "career", "worked")) {
    const lines = f.experience.map(
      (e) => `• ${e.role} — ${e.company} (${e.period})`
    );
    return `Here's where ${f.name} has worked:\n\n${lines.join("\n")}\n\nHe's currently a ${f.role} at ${f.company} (formerly DevOn).`;
  }

  if (has("skill", "tech", "stack", "language", "framework", "know")) {
    const cats = f.skillCategories
      .map((c) => `${c.title}: ${c.skills.join(", ")}`)
      .join("\n");
    return `${f.name}'s tech stack:\n\n${cats}`;
  }

  if (has("project", "built", "build", "app", "portfolio", "optimus", "oxyzon", "loop", "incident")) {
    const lines = f.projects.map(
      (p) => `• ${p.name} — ${p.description}`
    );
    return `Featured projects:\n\n${lines.join("\n")}`;
  }

  if (has("education", "degree", "college", "study", "university", "cgpa", "school")) {
    const lines = f.education.map(
      (e) => `${e.degree}, ${e.school} (${e.period}, ${e.detail})`
    );
    return `Education:\n\n${lines.join("\n")}`;
  }

  if (has("achievement", "award", "hackathon", "won", "win", "prize", "top")) {
    return `Highlights:\n\n${f.achievements.map((a) => `• ${a}`).join("\n")}`;
  }

  if (has("contact", "email", "reach", "connect", "hire", "opportunit", "available", "availab")) {
    return `${f.name} is open to opportunities.\n\n📧 ${f.email}\n🔗 ${f.linkedin}\n📱 ${f.phone}`;
  }

  if (has("resume", "cv", "download")) {
    return `You can view his resume here:\n${f.resume}`;
  }

  return `I can tell you about ${f.name}'s experience, skills, projects, education, and achievements — or how to contact him.\n\nTry asking: "What projects has he built?" or "Is he open to opportunities?"`;
}
