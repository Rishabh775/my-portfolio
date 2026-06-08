import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import SceneContent from "./scene/SceneContent";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollProgressBar, { ScrollProgressDriver } from "./ScrollProgress3D";

export default function PortfolioExperience() {
  return (
    <>
      <Navbar />
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense fallback={null}>
            <ScrollControls pages={5} damping={0.15}>
              <Scroll>
                <SceneContent />
                <ScrollProgressDriver />
              </Scroll>
              <Scroll html style={{ width: "100%" }}>
                <ScrollProgressBar />
                <Hero />
                <Skills />
                <Project />
                <Experience />
                <Contact />
                <Footer />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
