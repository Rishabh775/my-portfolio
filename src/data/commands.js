import { portfolioData } from "./portfolioData.js";
import { fallbackAnswer } from "./grounding.js";

const SECTIONS = [
  { key: "home", label: "Home", index: 0, words: ["home", "top", "hero"] },
  { key: "skills", label: "Skills", index: 1, words: ["skill", "skills", "tech", "stack", "techstack"] },
  { key: "projects", label: "Projects", index: 2, words: ["project", "projects", "portfolio", "work"] },
  { key: "experience", label: "Experience", index: 3, words: ["experience", "career", "journey", "history"] },
  { key: "contact", label: "Contact", index: 4, words: ["contact", "connect", "hire", "touch"] },
];

const HELP = `Available commands:
  help                    — show this
  whoami                  — about Rishabh
  ls / skills / stack     — tech stack
  ls projects             — list projects
  ls experience           — work history
  achievements            — awards & wins
  education               — education
  cd <section>            — jump to home / skills / projects / experience / contact
  open <project>          — open a project
  contact / email         — how to reach Rishabh
  resume                  — view resume
  clear                   — clear the chat`;

function normalize(q) {
  return q.toLowerCase().replace(/[!.?]+$/, "").trim();
}

function resolveSection(str) {
  const s = normalize(str).replace(/\s+/g, "");
  return (
    SECTIONS.find((sec) => sec.words.some((w) => w === s || w.startsWith(s) || s.startsWith(w))) ||
    null
  );
}

function resolveProject(str) {
  const s = normalize(str);
  const found = portfolioData.projects.find((p) => {
    const n = p.name.toLowerCase();
    return (
      n.includes(s) ||
      s.includes(n) ||
      p.name
        .toLowerCase()
        .split(/\s+/)
        .some((w) => w.startsWith(s))
    );
  });
  return found || null;
}

function listAll() {
  const sections = SECTIONS.map((s) => s.key).join(", ");
  const projects = portfolioData.projects.map((p) => p.name).join(", ");
  return `Sections: ${sections}\nProjects: ${projects}\n\nType "cd <section>" to jump, or "open <project>" to open one.`;
}

function listProjects() {
  return (
    `Projects:\n${portfolioData.projects
      .map((p) => `• ${p.name} — ${p.tech.join(", ")}`)
      .join("\n")}\n\nType "open <name>" to open one.`
  );
}

function detectNavIntent(q) {
  const s = normalize(q);
  const hasNavVerb = /\b(show|go|goto|scroll|take|jump|open|view|navigate|move|bring)\b/.test(s);
  if (!hasNavVerb) return null;
  for (const sec of SECTIONS) {
    if (sec.words.some((w) => s.includes(w))) return sec;
  }
  return null;
}

export function parseCommand(raw) {
  const input = (raw || "").trim();
  if (!input) return null;
  const q = normalize(input);

  if (["clear", "cls", "reset"].includes(q)) {
    return { reply: "Chat cleared.", action: { type: "clear" } };
  }

  if (["help", "?", "commands", "/help", "man"].includes(q)) {
    return { reply: HELP, action: { type: "none" } };
  }

  if (["whoami", "about", "about you", "who are you"].includes(q)) {
    return { reply: fallbackAnswer("who are you"), action: { type: "none" } };
  }

  if (["resume", "cv", "download resume", "view resume"].includes(q)) {
    return {
      reply: `Opening resume…\n${portfolioData.resume}`,
      action: { type: "open", url: portfolioData.resume },
    };
  }

  if (["contact", "email", "hire", "hire me", "get in touch", "reach me"].includes(q)) {
    return {
      reply: fallbackAnswer("hire"),
      action: { type: "navigate", section: "contact", index: 4 },
    };
  }

  const cdMatch = q.match(/^(?:cd|goto|open)\s+(.+)$/);
  if (cdMatch) {
    const target = cdMatch[1].trim();
    const section = resolveSection(target);
    if (section) {
      return {
        reply: `Navigating to ${section.label}…`,
        action: { type: "navigate", section: section.key, index: section.index },
      };
    }
    const proj = resolveProject(target);
    if (proj) {
      return {
        reply: `Opening ${proj.name} → ${proj.url}`,
        action: { type: "open", url: proj.url },
      };
    }
    return { reply: `Couldn't find "${target}". Try "help".`, action: { type: "none" } };
  }

  if (["ls", "list"].includes(q)) {
    return { reply: listAll(), action: { type: "none" } };
  }

  if (/^ls\s+(projects?|work)$/.test(q) || ["projects", "portfolio"].includes(q)) {
    return { reply: listProjects(), action: { type: "none" } };
  }

  if (/^ls\s+(skills?|stack|tech)$/.test(q) || ["skills", "stack", "tech"].includes(q)) {
    return { reply: fallbackAnswer("skills"), action: { type: "none" } };
  }

  if (/^ls\s+(experience|work)$/.test(q) || ["experience", "work", "career"].includes(q)) {
    return { reply: fallbackAnswer("experience"), action: { type: "none" } };
  }

  if (["achievements", "awards", "wins"].includes(q)) {
    return { reply: fallbackAnswer("achievements"), action: { type: "none" } };
  }

  if (["education", "edu", "study"].includes(q)) {
    return { reply: fallbackAnswer("education"), action: { type: "none" } };
  }

  const nav = detectNavIntent(q);
  if (nav) {
    return {
      reply: `Navigating to ${nav.label}…`,
      action: { type: "navigate", section: nav.key, index: nav.index },
    };
  }

  return null;
}

export { SECTIONS };
