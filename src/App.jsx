import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Cursor from "./component/cursor";
import Project from "./component/Project";
import Parallax1 from "./component/parallax1";
import Parallax2 from "./component/parallax2";

export default function App() {
  return (
    <div className="  bg-black ">
      <Cursor />
      <Navbar />
      <Hero />
      <Parallax1 />
      <Skills />
      <Parallax2 />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
