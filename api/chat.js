/* eslint-env node */
import { buildSystemPrompt, fallbackAnswer } from "../src/data/grounding.js";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(data || "{}"));
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = await readBody(req);
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const question = [...messages].reverse().find((m) => m.role === "user")?.content?.trim() || "";

  if (!question) {
    res.status(200).json({
      reply: "Ask me anything about Rishabh — experience, skills, projects, or contact.",
    });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    res.status(200).json({ reply: fallbackAnswer(question) });
    return;
  }

  try {
    const contents = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    if (contents.length === 0 || contents[contents.length - 1].role !== "user") {
      contents.push({ role: "user", parts: [{ text: question }] });
    }

    const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: buildSystemPrompt() }] },
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 500 },
      }),
    });

    if (!geminiRes.ok) {
      res.status(200).json({ reply: fallbackAnswer(question) });
      return;
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text)
      .join("")
      .trim();

    res.status(200).json({ reply: reply || fallbackAnswer(question) });
  } catch {
    res.status(200).json({ reply: fallbackAnswer(question) });
  }
}
