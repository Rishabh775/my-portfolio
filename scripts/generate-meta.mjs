import { portfolioData } from "../src/data/portfolioData.js";
import { writeFileSync, mkdirSync } from "node:fs";

function buildResumeJson() {
  return {
    basics: {
      name: portfolioData.name,
      label: portfolioData.role,
      email: portfolioData.email,
      phone: portfolioData.phone,
      location: portfolioData.location,
      url: "https://my-portfolio-nine-eta-41.vercel.app/",
      summary: portfolioData.tagline,
      profiles: [
        { network: "GitHub", url: portfolioData.github },
        { network: "LinkedIn", url: portfolioData.linkedin },
      ],
    },
    work: portfolioData.experiences.map((e) => ({
      position: e.role,
      company: e.company,
      startDate: e.period.split("–")[0].trim(),
      endDate: e.current ? undefined : e.period.split("–")[1].trim(),
      highlights: e.bullets,
      location: e.location,
    })),
    education: portfolioData.education.map((e) => ({
      institution: e.school,
      area: e.degree,
      startDate: e.period.split("–")[0].trim(),
      endDate: e.period.split("–")[1].trim(),
      score: e.detail,
    })),
    skills: portfolioData.skillCategories.map((c) => ({
      name: c.title,
      keywords: c.skills.map((s) => s.name),
    })),
    projects: portfolioData.projects.map((p) => ({
      name: p.name,
      description: p.description,
      keywords: p.tech,
      url: p.url,
    })),
    awards: portfolioData.achievements.map((a) => ({ title: a.title })),
  };
}

function buildLlmsTxt() {
  const projects = portfolioData.projects
    .map((p) => `- [${p.name}](${p.url}): ${p.description}`)
    .join("\n");

  const work = portfolioData.experiences
    .map((e) => `- ${e.role} at ${e.company} (${e.period})`)
    .join("\n");

  return `# Rishabh Singh

> Frontend Engineer at emagine (formerly DevOn). React, Next.js, TypeScript, and AI integrations.

${portfolioData.tagline}

## About
- Name: ${portfolioData.name}
- Role: ${portfolioData.role}
- Company: ${portfolioData.company} (formerly DevOn)
- Location: ${portfolioData.location}
- Email: ${portfolioData.email}
- [GitHub](${portfolioData.github})
- [LinkedIn](${portfolioData.linkedin})
- [Resume](${portfolioData.resume})

## Experience
${work}

## Projects
${projects}

## Skills
${portfolioData.skillCategories
  .map((c) => `- ${c.title}: ${c.skills.map((s) => s.name).join(", ")}`)
  .join("\n")}

## Achievements
${portfolioData.achievements.map((a) => `- ${a.title}`).join("\n")}

## Machine-readable
- [resume.json](/resume.json): structured resume in JSON format
- [MCP server](https://github.com/Rishabh775/my-portfolio): query this data from AI tools (MCP)
`;
}

mkdirSync("public", { recursive: true });
writeFileSync("public/resume.json", JSON.stringify(buildResumeJson(), null, 2) + "\n");
writeFileSync("public/llms.txt", buildLlmsTxt());

console.log("Generated public/llms.txt and public/resume.json");
