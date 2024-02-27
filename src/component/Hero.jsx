import { motion } from "framer-motion";

export default function Hero() {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
      className="  relative font-DM Sans h-[90vh] overflow-clip bg-black snap-center"
    >
      <div className="grid grid-cols-1  md:grid-cols-3 h-[80vh] gap-8 w-5/6 mx-auto">
        <div className="col-span-1 z-10 my-auto mx-auto">
          <div className="w-[300px] h-auto lg:w-[400px]">
            <img src="/hero.webp" alt=" hero img" />
          </div>
        </div>

        <div className="col-span-2  z-10 px-8 my-auto">
          <h1 className="text-white leading-normal text-2xl lg:text-5xl font-extrabold">
            <span className="primary-color leading-normal">
              Hey, I&apos;m Rishabh Singh
            </span>{" "}
            <br />
            <span className="primary-color">Web developer</span> <br />
          </h1>
          <p className="text-white sm:text-lg my-6 lg:text-xl">
            I am a web developer with a passion for creating beautiful and
            user-friendly websites.Passionate to learn fullStack development. I
            love to work with React, Next.js, and Tailwind CSS.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1IDNsp5wf3GKi4YVNFazizg5LnrgBbI-g/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" px-6 py-3 rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:text-lg duration-500  hover:after:content-['➜'] hover:scale-105">
                Resume
              </button>
            </a>
            <a href="#Contact">
              <button className="px-6 py-3 rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none hover:text-lg duration-500 hover:scale-110">
                Contact
              </button>
            </a>
            <div className="flex gap-3 items-center py-4 ">
              <a
                target="_blank"
                href="https://www.instagram.com/rishabh_797604/"
              >
                <img
                  className="w-6 cursor-pointer hover:scale-110"
                  src="/instagram.png"
                  alt="instagram"
                />
              </a>
              <a target="_blank" href="https://github.com/Rishabh775">
                <img
                  className="w-8 cursor-pointer hover:scale-110"
                  src="/github.png"
                  alt="github"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rishabh-singh-794171205/"
              >
                <img
                  className="w-9 cursor-pointer hover:scale-110"
                  src="/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
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
