import { useEffect, useState } from "react";
import PortfolioExperience from "./component/PortfolioExperience";
import MagneticCursor from "./component/MagneticCursor";
import NoiseOverlay from "./component/NoiseOverlay";
import TerminalChat from "./component/TerminalChat";
import TerminalPage from "./component/TerminalPage";

export default function App() {
  const [view, setView] = useState(() =>
    window.location.hash === "#terminal" ? "terminal" : "portfolio"
  );

  useEffect(() => {
    const onHash = () =>
      setView(window.location.hash === "#terminal" ? "terminal" : "portfolio");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (view === "terminal") {
    return <TerminalPage />;
  }

  return (
    <>
      <MagneticCursor />
      <NoiseOverlay />
      <PortfolioExperience />
      <TerminalChat />
    </>
  );
}
