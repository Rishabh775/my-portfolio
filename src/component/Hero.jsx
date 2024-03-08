import { motion } from "framer-motion";

export default function Hero() {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-300%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 25,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
      className="  relative font-DM Sans h-[100vh] sm:h-[90vh] overflow-clip bg-black snap-center"
      id="HOME"
    >
      <div className="grid grid-cols-1  lg:grid-cols-3 h-[80vh] gap-8 w-5/6 mx-auto">
        <div className="col-span-1 z-10 my-auto mx-auto">
          <div className="w-[300px] h-auto xl:w-[400px]">
            <img src="/hero.webp" alt=" hero img" />
          </div>
        </div>

        <div className="col-span-2  z-10 px-8 my-auto">
          <h1 className="text-white leading-normal text-2xl sm:text-3xl xl:text-5xl font-extrabold">
            <span className=" leading-normal">Hey, I&apos;m Rishabh Singh</span>{" "}
            <br />
            <span className="primary-color">Web developer</span> <br />
          </h1>
          <p className="text-white sm:text-lg my-6 lg:text-xl">
            I am a web developer with a passion for creating beautiful and
            user-friendly websites. Passionate to learn fullStack development. I
            love to work with React, Next.js, and Tailwind CSS.
          </p>
          <div className="max-sm:flex max-sm:flex-col sm: max-sm:justify-center  flex gap-x-4 gap-y-2 sm:items-center ">
            <a
              href="https://drive.google.com/file/d/1IDNsp5wf3GKi4YVNFazizg5LnrgBbI-g/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" px-6 py-3 rounded-xl  bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:text-lg duration-100  hover:after:content-['➜'] ">
                Resume
              </button>
            </a>
            <a href="#CONTACT">
              <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none hover:text-lg duration-100 ">
                Contact
              </button>
            </a>
          </div>
        </div>
        <motion.div
          className="slidingTextContainer cursor-default "
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Front-End developer
        </motion.div>
      </div>
    </motion.div>
  );
}
