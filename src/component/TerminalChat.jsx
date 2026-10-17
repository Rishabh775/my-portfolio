import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiTerminal, FiX, FiSend, FiMaximize2 } from "react-icons/fi";
import { fallbackAnswer } from "../data/grounding";
import { parseCommand } from "../data/commands";
import { scrollController } from "./scrollController";

const SUGGESTIONS = [
  "What projects has he built?",
  "cd projects",
  "Is he open to opportunities?",
  "open optimus",
];

const WELCOME =
  "Hi, I'm Optimus — Rishabh's AI assistant.\nAsk me anything, or try a command:\n  help · whoami · ls · cd projects · contact";

async function fetchReply(messages) {
  const question = messages[messages.length - 1]?.content || "";
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.reply) return data.reply;
    }
  } catch {
    /* fall through to deterministic fallback */
  }
  return fallbackAnswer(question);
}

export default function TerminalChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const applyAction = (action, reply) => {
    switch (action.type) {
      case "clear":
        setMessages([{ role: "assistant", content: WELCOME }]);
        return;
      case "navigate":
        scrollController.scrollToSection(action.index);
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        return;
      case "open":
        window.open(action.url, "_blank", "noopener,noreferrer");
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        return;
      default:
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }
  };

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: q }]);

    const cmd = parseCommand(q);
    if (cmd) {
      applyAction(cmd.action, cmd.reply);
      return;
    }

    setLoading(true);
    const reply = await fetchReply([...messages, { role: "user", content: q }]);
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        {open ? <FiX size={18} /> : <FiTerminal size={18} />}
        <span className="chat-fab-label">{open ? "Close" : "Ask Optimus"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="chat-panel"
            role="dialog"
            aria-label="AI assistant"
          >
            <div className="chat-header">
              <div className="chat-dots">
                <span className="chat-dot red" />
                <span className="chat-dot yellow" />
                <span className="chat-dot green" />
              </div>
              <span className="chat-title">optimus — ask anything</span>
              <span className="chat-status">
                <span className="chat-status-dot" />
                online
              </span>
              <button
                type="button"
                className="chat-fullscreen"
                onClick={() => {
                  window.location.hash = "#terminal";
                }}
                aria-label="Open fullscreen terminal"
                title="Fullscreen terminal"
              >
                <FiMaximize2 size={14} />
              </button>
            </div>

            <div className="chat-messages" ref={scrollRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.role}`}>
                  {msg.content}
                  {msg.role === "assistant" && i === messages.length - 1 && !loading && (
                    <span className="chat-cursor">▍</span>
                  )}
                </div>
              ))}
              {loading && (
                <div className="chat-msg assistant chat-typing">
                  <span className="dot-typing" />
                  <span className="dot-typing" />
                  <span className="dot-typing" />
                </div>
              )}
            </div>

            {messages.length <= 1 && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="chat-suggestion"
                    onClick={() => send(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              className="chat-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <span className="chat-prompt">&gt;</span>
              <input
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask, or type a command (help)…"
                aria-label="Message"
              />
              <button
                type="submit"
                className="chat-send"
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <FiSend size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
