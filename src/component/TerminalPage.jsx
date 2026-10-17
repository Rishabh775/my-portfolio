import { useEffect, useRef, useState } from "react";
import { runCommand, COMMAND_NAMES, completePath } from "../data/terminalFs";
import { startAdventure, runAdventure } from "../data/adventure";

const BOOT = [
  "Optimus OS v2.0.6 — portfolio shell",
  "Initializing portfolio…… ok",
  "Indexing 4 projects…… ok",
  "Loading skills…… ok",
  "Connecting to AI…… ok",
  "",
  "Type `help` to get started, or ask anything in plain English.",
];

const SUGGESTIONS = ["help", "ls", "cat about.txt", "cd projects", "open optimus", "neofetch", "quest"];

const displayCwd = (cwd) => (cwd === "/" ? "~" : `~${cwd}`);

export default function TerminalPage() {
  const [lines, setLines] = useState([]);
  const [cwd, setCwd] = useState("/");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("shell");
  const [adv, setAdv] = useState(null);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let i = 0;
    const next = () => {
      if (cancelled) return;
      if (i >= BOOT.length) {
        setBooted(true);
        return;
      }
      setLines((prev) => [...prev, { type: "output", text: BOOT[i] }]);
      i += 1;
      setTimeout(next, 200);
    };
    const t = setTimeout(next, 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const complete = () => {
    const tokens = input.split(" ");
    const last = tokens[tokens.length - 1];
    if (tokens.length === 1) {
      const matches = COMMAND_NAMES.filter((c) => c.startsWith(last));
      if (matches.length === 1) {
        setInput(matches[0] + " ");
      } else if (matches.length > 1) {
        setLines((prev) => [...prev, { type: "output", text: matches.join("   ") }]);
      }
    } else {
      const matches = completePath(last, cwd);
      if (matches.length === 1) {
        const before = tokens.slice(0, -1).join(" ");
        const m = matches[0];
        setInput((before ? before + " " : "") + m + (m.endsWith("/") ? "" : " "));
      } else if (matches.length > 1) {
        setLines((prev) => [...prev, { type: "output", text: matches.join("   ") }]);
      }
    }
  };

  const run = (raw) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    setHistory((h) => [text, ...h]);
    setHistoryIndex(-1);

    if (mode === "adventure") {
      setLines((prev) => [...prev, { type: "input", text, adventure: true }]);
      const res = runAdventure(text, adv);
      setAdv(res.state);
      if (res.output) setLines((prev) => [...prev, { type: "output", text: res.output }]);
      if (res.quit) setMode("shell");
      return;
    }

    setLines((prev) => [...prev, { type: "input", text, cwd }]);
    const result = runCommand(text, cwd);

    if (result.clear) {
      setLines([]);
      setCwd(result.cwd ?? cwd);
      return;
    }
    if (result.exit) {
      setLines((prev) => [...prev, { type: "output", text: result.output }]);
      setTimeout(() => {
        window.location.hash = "";
      }, 450);
      return;
    }
    if (result.adventure) {
      const a = startAdventure();
      setAdv(a.state);
      setMode("adventure");
      setLines((prev) => [...prev, { type: "output", text: a.output }]);
      return;
    }
    if (result.theme) setTheme(result.theme);
    if (result.openUrl) window.open(result.openUrl, "_blank", "noopener,noreferrer");
    if (result.output != null && result.output !== "") {
      setLines((prev) => [...prev, { type: "output", text: result.output }]);
    }
    setCwd(result.cwd ?? cwd);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIndex + 1;
      if (idx < history.length) {
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = historyIndex - 1;
      if (idx >= 0) {
        setHistoryIndex(idx);
        setInput(history[idx]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (mode === "shell") complete();
    } else if (e.key === "Enter") {
      e.preventDefault();
      run();
    }
  };

  const promptText =
    mode === "adventure" ? "quest> " : `visitor@optimus:${displayCwd(cwd)}$ `;

  return (
    <div
      className="terminal-page"
      data-theme={theme}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <span className="terminal-bar-title">
          optimus — terminal prototype{mode === "adventure" ? " · quest mode" : ""}
        </span>
        <button
          type="button"
          className="terminal-exit"
          onClick={() => {
            window.location.hash = "";
          }}
        >
          exit to GUI ✕
        </button>
      </div>

      <div className="terminal-output" ref={outputRef}>
        {lines.map((l, i) => {
          if (l.type === "input") {
            return (
              <div key={i} className="terminal-line input">
                <span className="terminal-prompt">
                  {l.adventure ? "quest> " : `visitor@optimus:${displayCwd(l.cwd)}$ `}
                </span>
                <span className="terminal-cmd">{l.text}</span>
              </div>
            );
          }
          return (
            <div key={i} className="terminal-line output">
              {l.text}
            </div>
          );
        })}
      </div>

      <div className="terminal-suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" className="terminal-chip" onClick={() => run(s)}>
            {s}
          </button>
        ))}
      </div>

      {booted && (
        <div className="terminal-input-row">
          <span className="terminal-prompt">{promptText}</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
          />
        </div>
      )}
    </div>
  );
}
