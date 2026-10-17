import { portfolioData } from "./portfolioData.js";

const ROOMS = {
  campus: {
    name: "The Campus",
    desc:
      "Rungta College of Engineering & Technology (2020–2024).\n" +
      "The halls smell of chai and compiler errors. A framed diploma glints on the wall.\n\n" +
      "Exits: east → the Startup Office.",
    items: ["diploma"],
    exits: { east: "startup" },
  },
  startup: {
    name: "The Startup Office",
    desc:
      "i2Campus (Insors IT Solutions), Bhilai — Mar 2024 to Feb 2025.\n" +
      "A tiny 3-person team; Rishabh was the sole frontend + mobile engineer.\n" +
      "A launch key sits on the desk.\n\n" +
      "Exits: west → Campus, east → the Enterprise HQ.",
    items: ["launch-key"],
    exits: { west: "campus", east: "enterprise" },
  },
  enterprise: {
    name: "Enterprise HQ",
    desc:
      "emagine (formerly DevOn), Bengaluru — Apr 2025 to Present.\n" +
      "A scholarly publishing platform hums with React, TypeScript, and GraphQL.\n" +
      "A 'Promising Fresher' award gleams on the shelf.\n\n" +
      "Exits: west → Startup Office, north → the AI Lab.",
    items: ["fresher-award"],
    exits: { west: "startup", north: "ailab" },
  },
  ailab: {
    name: "The AI Lab",
    desc:
      "Where Rishabh built AI incident-clustering (Sentence Transformers, HDBSCAN,\n" +
      "Gemini 2.0 Flash) — Top 4 of 25. A 'top4-badge' blinks on the workbench.\n\n" +
      "Exits: south → Enterprise HQ, east → the Trophy Room.",
    items: ["top4-badge"],
    exits: { south: "enterprise", east: "trophy" },
  },
  trophy: {
    name: "The Trophy Room",
    desc:
      "A wall of wins: Top 14 of 2,400+ at NVIDIA's Agentic AI Open Hackathon (2026),\n" +
      "and a 1st-place Smart Odisha Hackathon trophy. A champion's trophy waits.\n\n" +
      "Exits: west → AI Lab, east → the Portal.",
    items: ["champion-trophy"],
    exits: { west: "ailab", east: "portal" },
  },
  portal: {
    name: "The Portal",
    desc:
      "You've reached the end of the quest — the whole journey in one walkthrough.\n\n" +
      `That's ${portfolioData.name}: education → startup → enterprise → AI → trophies.\n` +
      `Contact him at ${portfolioData.email}.`,
    items: [],
    exits: {},
  },
};

const ITEMS = {
  diploma: "B.Tech in Computer Science & Engineering, CGPA 8.2/10. Solid foundations.",
  "launch-key":
    "The i2Campus School Management System — 5 dashboards, web + mobile, shipped end-to-end by Rishabh alone.",
  "fresher-award": "Promising Fresher Award (2025) — for shipping production features in his first months.",
  "top4-badge": "Top 4 of 25 in DevOn's Innovation Programme for the AI incident-clustering app.",
  "champion-trophy": "Top 14 of 2,400+ teams — India Agentic AI Open Hackathon (NVIDIA, 2026).",
};

const DIRECTIONS = {
  n: "north", north: "north",
  s: "south", south: "south",
  e: "east", east: "east",
  w: "west", west: "west",
};

const HELP =
  "Commands:\n" +
  "  look / l           look around\n" +
  "  go <direction>     north, south, east, west\n" +
  "  examine <item>     inspect an item\n" +
  "  take <item>        pick up an item\n" +
  "  inventory / i      your items\n" +
  "  quit / exit        leave the quest";

export function startAdventure() {
  const state = { room: "campus", inventory: [], taken: [] };
  const room = ROOMS[state.room];
  return {
    state,
    output:
      `You wake up at the start of a career.\n\n` +
      `${room.name} — ${room.desc}\n\n` +
      `Type "help" for commands, or "look" to look around.`,
  };
}

export function runAdventure(input, state) {
  const q = (input || "").trim().toLowerCase();
  if (!q) return { state, output: "" };

  const [verb, ...nounParts] = q.split(/\s+/);
  const noun = nounParts.join(" ");

  const room = ROOMS[state.room];
  const present = room.items.filter((i) => !state.taken.includes(i));

  const describeRoom = () => {
    const items = present.length ? `\nYou see: ${present.join(", ")}.` : "";
    const exits = Object.keys(room.exits).length
      ? `\nExits: ${Object.keys(room.exits)
          .map((d) => `${d} → ${ROOMS[room.exits[d]].name}`)
          .join(", ")}.`
      : "";
    return `${room.name} — ${room.desc}${items}${exits}`;
  };

  switch (verb) {
    case "help":
    case "?":
      return { state, output: HELP };

    case "look":
    case "l":
      return { state, output: describeRoom() };

    case "go":
    case "move":
    case "walk": {
      const dir = DIRECTIONS[noun];
      if (!dir) return { state, output: 'Go where? Try "go east".' };
      const target = room.exits[dir];
      if (!target) return { state, output: `You can't go ${dir} from here.` };
      const next = ROOMS[target];
      let extra = "";
      if (target === "portal") {
        extra = `\n\n🏆 QUEST COMPLETE — you walked ${portfolioData.name}'s whole career.\nType "quit" to return to the shell, then "contact" to reach out.`;
      }
      return { state: { ...state, room: target }, output: `${next.name} — ${next.desc}${extra}` };
    }

    case "examine":
    case "x":
    case "read": {
      if (!noun) return { state, output: "Examine what?" };
      if (ITEMS[noun]) return { state, output: ITEMS[noun] };
      return { state, output: `There's no "${noun}" here.` };
    }

    case "take":
    case "get":
    case "grab": {
      if (!noun) return { state, output: "Take what?" };
      if (present.includes(noun)) {
        return {
          state: { ...state, taken: [...state.taken, noun], inventory: [...state.inventory, noun] },
          output: `Taken: ${noun} (${ITEMS[noun]?.split(".")[0]}.)`,
        };
      }
      return { state, output: `There's no "${noun}" to take here.` };
    }

    case "inventory":
    case "i":
      return {
        state,
        output: state.inventory.length
          ? `You carry: ${state.inventory.join(", ")}`
          : "Your pockets are empty.",
      };

    case "quit":
    case "exit":
    case "q":
    case "leave":
      return { state, quit: true, output: "Leaving the quest. Back to the shell." };

    default:
      return { state, output: `I don't understand "${input}". Try "help".` };
  }
}
