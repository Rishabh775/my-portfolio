import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Cursor from "./component/cursor";
import Parallax from "./component/parallax";
import Project from "./component/Project";

export default function App() {
  return (
    <div className="  bg-black ">
      <Cursor />
      <Navbar />
      <Hero />
      <Parallax />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
