import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, AdaptiveDpr, useScroll } from "@react-three/drei";
import SceneContent from "./scene/SceneContent";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollProgressBar, { ScrollProgressDriver } from "./ScrollProgress3D";
import { scrollOffsetsRef } from "./scrollOffsetsRef";
import { scrollController } from "./scrollController";

const SCROLL_CONTENT_ID = "portfolio-scroll-content";
const SECTION_IDS = ["HOME", "SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"];

function ScrollControllerLink() {
  const scroll = useScroll();
  useEffect(() => {
    if (scroll?.el) scrollController.el = scroll.el;
  }, [scroll]);
  return null;
}

export default function PortfolioExperience() {
  const [pages, setPages] = useState(6);
  const [frameloop, setFrameloop] = useState("always");

  useLayoutEffect(() => {
    let rafId;
    let ro;

    const measure = () => {
      const el = document.getElementById(SCROLL_CONTENT_ID);
      const vh = window.innerHeight;
      if (!el || !vh) return false;
      const height = el.scrollHeight;
      if (height <= 0) return false;

      setPages(Math.max(1, Math.ceil((height / vh) * 100) / 100));

      const scrollable = height - vh;
      scrollOffsetsRef.current = SECTION_IDS.map((id) => {
        const sec = document.getElementById(id);
        if (!sec) return 0;
        const top = sec.offsetTop;
        const center = top + sec.offsetHeight / 2;
        if (scrollable <= 0) return 0;
        return Math.min(1, Math.max(0, (center - vh / 2) / scrollable));
      });

      return true;
    };

    const start = () => {
      if (measure()) {
        if (!ro) {
          const el = document.getElementById(SCROLL_CONTENT_ID);
          ro = new ResizeObserver(measure);
          ro.observe(el);
        }
        return;
      }
      rafId = requestAnimationFrame(start);
    };

    start();
    window.addEventListener("resize", measure);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      const el = scrollController.el;
      if (!el || scrollController.maxScroll() <= 0) return;
      const t = e.target;
      if (
        t instanceof HTMLElement &&
        (t.matches("input, textarea, select") || t.isContentEditable)
      ) {
        return;
      }

      const page = scrollController.pageDelta();
      let delta = null;
      if (e.key === "PageDown" || (e.key === " " && e.code === "Space" && !e.shiftKey)) {
        delta = page;
      } else if (e.key === "PageUp" || (e.key === " " && e.code === "Space" && e.shiftKey)) {
        delta = -page;
      } else if (e.key === "ArrowDown") {
        delta = 96;
      } else if (e.key === "ArrowUp") {
        delta = -96;
      } else if (e.key === "Home") {
        delta = -scrollController.maxScroll();
      } else if (e.key === "End") {
        delta = scrollController.maxScroll();
      } else {
        return;
      }

      e.preventDefault();
      scrollController.smoothScrollBy(delta);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      setFrameloop(document.hidden ? "never" : "always");
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <>
      <Navbar />
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 2]}
          frameloop={frameloop}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        >
          <AdaptiveDpr pixelated />
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={0.15}>
              <ScrollControllerLink />
              <Scroll>
                <SceneContent />
                <ScrollProgressDriver />
              </Scroll>
              <Scroll html id={SCROLL_CONTENT_ID} style={{ width: "100%" }}>
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
