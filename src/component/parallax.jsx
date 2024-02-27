import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useWindowSize } from "@react-hook/window-size";

export default function Parallax() {
  const [width] = useWindowSize();
  const isMobile = width < 1024;
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
      ref={ref}
      className="w-full h-[110vh]  overflow-hidden relative flex items-center justify-center  bg-gradient-to-b from-[#111132] to-[#0c0c1d] snap-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-4xl md:text-7xl relative z-20"
      >
        MY TechStack
      </motion.h1>

      <motion.div
        className="absolute inset-0   z-10"
        style={{
          backgroundImage: `url(/mountains.png)`,
          backgroundSize: isMobile ? "contain" : "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <motion.div
        className="absolute  inset-0 z-0"
        style={{
          backgroundImage: `url(/sun.png)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: backgroundY,
        }}
      ></motion.div>
      <motion.div
        className="absolute  inset-0 z-0"
        style={{
          backgroundImage: `url(/stars.png)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x: backgroundY,
        }}
      ></motion.div>
    </div>
  );
}