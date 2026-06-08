import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Experience from "./component/Experience";
import MagneticCursor from "./component/MagneticCursor";
import Spotlight from "./component/Spotlight";
import NoiseOverlay from "./component/NoiseOverlay";
import ScrollProgress from "./component/ScrollProgress";

export default function App() {
  return (
    <div className="animated-gradient-bg min-h-screen">
      <MagneticCursor />
      <Spotlight />
      <NoiseOverlay />
      <ScrollProgress />
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}