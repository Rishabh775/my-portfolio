import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Cursor from "./component/cursor";
import Parallax from "./component/parallax";

export default function App() {
  return (
    <div className=" scroll-smooth bg-black ">
      <Cursor />
      <Navbar />
      <Hero />
      <Parallax />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
