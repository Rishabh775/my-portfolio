import { portfolioData } from "./portfolioData.js";
import { fallbackAnswer } from "./grounding.js";

const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function buildFiles() {
  const skills = portfolioData.skillCategories
    .map((c) => `${c.title.padEnd(11)} ${c.skills.join(", ")}`)
    .join("\n");

  const achievements = portfolioData.achievements
    .map((a) => `- ${a.title}`)
    .join("\n");

  const experienceFiles = {};
  for (const e of portfolioData.experiences) {
    experienceFiles[`/experience/${slug(e.company)}.txt`] =
      `${e.role} — ${e.company} — ${e.period}\n${e.location || ""}\n\n` +
      e.bullets.map((b) => `- ${b}`).join("\n");
  }

  const projectFiles = {};
  const projectLinks = {};
  for (const p of portfolioData.projects) {
    const s = slug(p.name);
    projectFiles[`/projects/${s}.txt`] =
      `${p.name}\n\n${p.description}\n\ntech: ${p.tech.join(", ")}\nurl:  ${p.url}`;
    projectLinks[s] = p.url;
  }

  const files = {
    "/README.md":
      `# ${portfolioData.name}\n\n${portfolioData.tagline}\n\n` +
      `Currently: ${portfolioData.role} @ ${portfolioData.company} (formerly DevOn).\n\n` +
      `Type "ls" to see what's here, or "help" for commands.`,

    "/about.txt":
      `${portfolioData.name}\n${portfolioData.role} @ ${portfolioData.company} (formerly DevOn)\n\n` +
      `${portfolioData.tagline}\n\nLocation: ${portfolioData.location}\nEmail: ${portfolioData.email}`,

    "/skills.txt": `Skills\n\n${skills}`,

    "/achievements.txt": `Achievements\n\n${achievements}`,

    "/education.txt":
      portfolioData.education
        .map((e) => `${e.degree}\n${e.school}\n${e.period} · ${e.detail}`)
        .join("\n"),

    "/contact.txt":
      `Email:    ${portfolioData.email}\n` +
      `Phone:    ${portfolioData.phone}\n` +
      `LinkedIn: ${portfolioData.linkedin}\n` +
      `GitHub:   ${portfolioData.github}`,

    ...experienceFiles,
    ...projectFiles,
  };

  return { files, projectLinks };
}

const { files, projectLinks } = buildFiles();

export const COMMAND_NAMES = [
  "help", "whoami", "ls", "cat", "cd", "open", "pwd", "tree", "find",
  "neofetch", "banner", "skills", "stack", "tech", "experience", "work",
  "projects", "portfolio", "achievements", "awards", "education", "edu",
  "contact", "email", "resume", "github", "linkedin", "clear", "cls",
  "gui", "exit", "back", "theme", "themes", "quest", "adventure", "start",
  "sudo", "secret", "easter", "hack", "matrix", "coffee",
];

export const THEMES = ["dark", "matrix", "nord", "dracula", "amber"];

export const HELP = `Commands:
  help                 show this
  whoami               about Rishabh
  ls [dir]             list a directory
  cat <file>           read a file
  cd <dir>             change directory
  pwd                  print working directory
  tree                 show the file tree
  find <text>          find files by name
  open <project|link>  open a project / github / linkedin / resume
  neofetch             system info
  banner               ASCII banner
  skills               tech stack
  experience           work history
  projects             list projects
  achievements         awards & wins
  education            education
  contact              how to reach Rishabh
  theme [name]         switch theme (${THEMES.join(", ")})
  quest                play the text adventure
  clear                clear the screen
  gui                  exit to the full site

Tip: you can also just ask a question in plain English.`;

function normalizeAbsolute(path) {
  const parts = [];
  for (const seg of path.split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return "/" + parts.join("/");
}

export function resolvePath(input, cwd) {
  if (!input || input === "~") return cwd === "/" ? "/" : cwd;
  if (input.startsWith("/")) return normalizeAbsolute(input);
  const base = cwd === "/" ? "" : cwd;
  return normalizeAbsolute(`${base}/${input}`);
}

function isDirectory(path) {
  const prefix = path === "/" ? "/" : `${path}/`;
  return Object.keys(files).some((f) => f.startsWith(prefix));
}

export function listDirectory(cwd) {
  const prefix = cwd === "/" ? "/" : `${cwd}/`;
  const entries = new Set();
  for (const path of Object.keys(files)) {
    if (!path.startsWith(prefix)) continue;
    const rest = path.slice(prefix.length);
    if (!rest) continue;
    const name = rest.split("/")[0];
    entries.add(rest.includes("/") ? `${name}/` : name);
  }
  return [...entries].sort();
}

export function completePath(partial, cwd) {
  const lastSlash = partial.lastIndexOf("/");
  const dirPart = lastSlash >= 0 ? partial.slice(0, lastSlash + 1) : "";
  const namePart = lastSlash >= 0 ? partial.slice(lastSlash + 1) : partial;
  const dir = dirPart ? resolvePath(dirPart, cwd) : cwd;
  const entries = listDirectory(dir);
  return entries.filter((e) => e.startsWith(namePart)).map((m) => dirPart + m);
}

function cat(path) {
  if (files[path]) return files[path];
  if (isDirectory(path)) return `${path} is a directory. Use "ls ${path === "/" ? "" : path}".`;
  return `cat: ${path}: No such file or directory`;
}

function resolveOpenTarget(arg) {
  const s = (arg || "").toLowerCase().trim();
  if (!s) return null;
  if (["github", "gh"].includes(s)) return portfolioData.github;
  if (["linkedin", "li"].includes(s)) return portfolioData.linkedin;
  if (["resume", "cv"].includes(s)) return portfolioData.resume;
  if (projectLinks[s]) return projectLinks[s];
  const proj = portfolioData.projects.find((p) => {
    const n = p.name.toLowerCase();
    return n.includes(s) || n.split(/\s+/).some((w) => w.startsWith(s));
  });
  return proj ? proj.url : null;
}

function buildTree(path, prefix) {
  const entries = listDirectory(path);
  let out = "";
  entries.forEach((name, i) => {
    const isLast = i === entries.length - 1;
    const child = path === "/" ? `/${name}` : `${path}/${name}`;
    const label = name.endsWith("/") ? name.slice(0, -1) : name;
    out += `${prefix}${isLast ? "└── " : "├── "}${label}\n`;
    if (name.endsWith("/")) out += buildTree(child, prefix + (isLast ? "    " : "│   "));
  });
  return out;
}

function buildNeofetch() {
  const logo = [
    "   ┌──────────────────────┐",
    "   │   OPTIMUS OS v2.0.6  │",
    "   └──────────────────────┘",
  ].join("\n");
  const info = [
    "visitor@optimus",
    "──────────────────────────",
    `Name:     ${portfolioData.name}`,
    `Role:     ${portfolioData.role}`,
    `Company:  ${portfolioData.company} (formerly DevOn)`,
    `Location: ${portfolioData.location}`,
    "Uptime:   2+ years",
    "Shell:    optimus",
    `Projects: ${portfolioData.projects.length}`,
    `Email:    ${portfolioData.email}`,
  ].join("\n");
  return `${logo}\n\n${info}`;
}

function buildBanner() {
  const lines = [
    "RISHABH SINGH",
    "Frontend Engineer @ emagine",
    "React · Next.js · TypeScript · AI",
  ];
  const width = Math.max(...lines.map((l) => l.length));
  const border = "═".repeat(width + 2);
  const pad = (s) => `║ ${s.padEnd(width)} ║`;
  return `╔${border}╗\n${lines.map(pad).join("\n")}\n╚${border}╝`;
}

export function runCommand(input, cwd) {
  const trimmed = (input || "").trim();
  if (!trimmed) return { output: "" };

  const [cmdRaw, ...rest] = trimmed.split(/\s+/);
  const cmd = cmdRaw.toLowerCase();
  const arg = rest.join(" ");

  switch (cmd) {
    case "help":
      return { output: HELP };
    case "whoami":
      return { output: `${portfolioData.name} — ${portfolioData.role} @ ${portfolioData.company}` };
    case "clear":
    case "cls":
      return { clear: true };
    case "gui":
    case "exit":
    case "back":
      return { exit: true, output: "Exiting terminal…" };
    case "quest":
    case "adventure":
    case "start":
      return { adventure: true };
    case "pwd":
      return { output: cwd };
    case "tree":
      return { output: `${cwd === "/" ? "/" : cwd}\n${buildTree(cwd, "")}`.trimEnd() };
    case "find": {
      if (!arg) return { output: "find: missing operand. Try `find oxyzon`." };
      const s = arg.toLowerCase();
      const matches = Object.keys(files).filter((p) => p.toLowerCase().includes(s)).sort();
      return { output: matches.length ? matches.join("\n") : `find: no matches for "${arg}"` };
    }
    case "neofetch":
      return { output: buildNeofetch() };
    case "banner":
      return { output: buildBanner() };
    case "theme": {
      const t = (arg || "").toLowerCase();
      if (!t) return { output: `Themes: ${THEMES.join(", ")}\nUsage: theme <name>` };
      if (!THEMES.includes(t)) return { output: `Unknown theme "${arg}". Themes: ${THEMES.join(", ")}` };
      return { theme: t, output: `Theme set to ${t}.` };
    }
    case "themes":
      return { output: `Themes: ${THEMES.join(", ")}` };
    case "ls":
    case "dir": {
      const target = resolvePath(arg || ".", cwd);
      if (!isDirectory(target)) return { output: `ls: ${target}: No such directory` };
      const entries = listDirectory(target);
      return { output: entries.length ? entries.join("   ") : "(empty)" };
    }
    case "cat": {
      if (!arg) return { output: "cat: missing operand. Try `cat about.txt`." };
      return { output: cat(resolvePath(arg, cwd)) };
    }
    case "cd": {
      const target = resolvePath(arg || "~", cwd);
      if (isDirectory(target)) return { cwd: target };
      return { output: `cd: ${target}: No such directory` };
    }
    case "open": {
      const url = resolveOpenTarget(arg);
      if (url) return { openUrl: url, output: `Opening ${url}` };
      return { output: `open: nothing to open for "${arg}". Try "open oxyzon" or "open github".` };
    }
    case "sudo": {
      if (arg.toLowerCase().includes("sandwich"))
        return { output: "Make it yourself.\nhttps://xkcd.com/149/" };
      return { output: "sudo: nice try — you already have root privileges." };
    }
    case "secret":
    case "easter":
      return {
        output:
          "You found the easter egg! 🥚\n\nFun fact: Rishabh's AI assistant (Optimus) was built to run 100% locally with a custom wake word, 23 tools, and persistent memory. Try `open optimus`.",
      };
    case "hack":
      return { output: "Bypassing mainframe security……\n\nJust kidding. Go type `help`. :)" };
    case "matrix":
      return { theme: "matrix", output: "Wake up, Neo…" };
    case "coffee":
      return { output: "☕ brewing… done. Have a productive day." };
    case "skills":
    case "stack":
    case "tech":
      return { output: cat("/skills.txt") };
    case "experience":
    case "work":
      return { output: listDirectory("/experience").join("\n") };
    case "projects":
    case "portfolio":
      return { output: listDirectory("/projects").join("\n") };
    case "achievements":
    case "awards":
      return { output: cat("/achievements.txt") };
    case "education":
    case "edu":
      return { output: cat("/education.txt") };
    case "contact":
    case "email":
      return { output: cat("/contact.txt") };
    case "resume":
      return { openUrl: portfolioData.resume, output: `Opening ${portfolioData.resume}` };
    case "github":
      return { openUrl: portfolioData.github, output: `Opening ${portfolioData.github}` };
    case "linkedin":
      return { openUrl: portfolioData.linkedin, output: `Opening ${portfolioData.linkedin}` };
    default:
      return { output: fallbackAnswer(trimmed) };
  }
}
