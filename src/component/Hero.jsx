import { motion } from "framer-motion";
import { Resume } from "../Constant/ResumeLink";
import HeroScene from "./HeroScene";
import Typewriter from "./Typewriter";

export default function Hero() {
  const sliderVariants = {
    initial: { x: 0 },
    animate: {
      x: "-300%",
      transition: { repeat: Infinity, repeatType: "mirror", duration: 25 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
      className="relative font-DM Sans h-[105vh] sm:h-[90vh] overflow-clip"
      id="HOME"
    >
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/80 to-[#0a0a0f] z-[1]" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 h-[80vh] gap-8 sm:w-5/6 mx-auto">
        <div className="col-span-1 z-10 my-auto mx-auto">
          <div className="w-[300px] h-auto xl:w-[400px]">
            <img src="/hero.webp" alt="hero img" />
          </div>
        </div>

        <div className="col-span-2 z-10 px-8 my-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-orange-400 font-semibold mb-3 text-lg"
          >
            Currently at DevOn
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white leading-normal text-2xl sm:text-3xl xl:text-5xl font-extrabold"
          >
            Hey, I&apos;m Rishabh Singh
            <br />
            <span className="primary-color">
              <Typewriter
                texts={[
                  "Frontend Engineer",
                  "React Developer",
                  "Next.js Specialist",
                  "TypeScript Enthusiast",
                ]}
                speed={70}
                deleteSpeed={35}
                pauseDuration={2200}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 sm:text-lg my-6 lg:text-xl"
          >
            Frontend engineer building performant, accessible web applications
            with React and Next.js. 1st place at Smart Odisha Hackathon 2022.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-sm:flex max-sm:flex-col sm: max-sm:justify-center flex gap-x-4 gap-y-2 sm:items-center"
          >
            <a href={Resume.link} target="_blank" rel="noreferrer" data-magnetic>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:text-lg duration-300 hover:after:content-['➜']" data-magnetic>
                Resume
              </button>
            </a>
            <a href="#CONTACT" data-magnetic>
              <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:text-lg duration-300" data-magnetic>
                Contact
              </button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContainer cursor-default"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Frontend Engineer
        </motion.div>
      </div>
    </motion.div>
  );
}