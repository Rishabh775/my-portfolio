import readline from "node:readline";
import { buildFacts } from "../src/data/grounding.js";

const facts = buildFacts();

const TOOLS = [
  {
    name: "get_resume",
    description:
      "Rishabh Singh's resume and portfolio data: experience, skills, projects, education, achievements, and contact.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_contact",
    description: "Rishabh Singh's contact information (email, phone, LinkedIn, GitHub).",
    inputSchema: { type: "object", properties: {} },
  },
];

function toolResult(name) {
  if (name === "get_resume") {
    return { text: JSON.stringify(facts, null, 2), isError: false };
  }
  if (name === "get_contact") {
    const text =
      `Email: ${facts.email}\n` +
      `Phone: ${facts.phone}\n` +
      `LinkedIn: ${facts.linkedin}\n` +
      `GitHub: ${facts.github}`;
    return { text, isError: false };
  }
  return { text: `Unknown tool: ${name}`, isError: true };
}

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}

const rl = readline.createInterface({ input: process.stdin, terminal: false });

rl.on("line", (line) => {
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return;
  }

  const { method, id } = msg;

  if (method === "initialize") {
    send({
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "rishabh-resume", version: "1.0.0" },
      },
    });
  } else if (method === "tools/list") {
    send({ jsonrpc: "2.0", id, result: { tools: TOOLS } });
  } else if (method === "tools/call") {
    const { text, isError } = toolResult(msg?.params?.name);
    send({
      jsonrpc: "2.0",
      id,
      result: { content: [{ type: "text", text }], isError },
    });
  }
  // notifications (e.g. notifications/initialized) carry no id and are ignored
});
