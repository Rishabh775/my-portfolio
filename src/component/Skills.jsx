import { motion } from "framer-motion";
export default function Skills() {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: ["0%", "-101.5%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    },
  };
  const skills = [
    { name: "C++", img: "c-.png" },
    { name: "HTML", img: "html-5.png" },
    { name: "CSS", img: "css.webp" },
    { name: "JAVASCRIPT", img: "js.webp" },
    { name: "TYPESCRIPT", img: "typescript.png" },
    { name: "REACT", img: "React.webp" },
    { name: "NEXT", img: "next.jpg" },
    { name: "PRISMA", img: "prisma.svg" },
    { name: "MONGODB", img: "mongo.webp" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] text-white font-bold font-sans">
      <div className="h-[60vh] hidden overflow-hidden sm:flex flex-col items-center justify-center ">
        <h1 className="primary-color text-5xl pb-10">Skills</h1>
        <div className=" py-10 marquee sm:flex w-5/6 mx-auto whitespace-nowrap gap-x-10 ">
          <div>
            <motion.div
              className="inline-block  "
              variants={sliderVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex  gap-x-10 ">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex gap-4  items-center justify-start  hover:shadow-indigo-950 shadow-md bg-gray-800 rounded-3xl py-4 w-64 px-6"
                  >
                    <img className="size-16" src={skill.img} alt={skill.name} />
                    <span className="text-xl">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="inline-block "
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex  gap-x-10  ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex gap-4  justify-start items-center  hover:shadow-indigo-950 shadow-md bg-gray-800 rounded-3xl py-4 w-64 px-6"
                >
                  <img className="size-16" src={skill.img} alt={skill.name} />
                  <span className="text-xl">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-[100vh] sm:hidden flex flex-col items-center justify-center m-auto">
        <h1 className="primary-color text-5xl pb-10">Skills</h1>

        <div className="w-5/6 lg:w-4/6 py-4 flex flex-wrap items-center gap-4  justify-evenly ">
          {skills.map((skill, index) => (
            <label
              key={index}
              className="flex gap-4 items-center hover:shadow-indigo-950 shadow-md bg-gray-800 rounded-full px-8 py-2 "
            >
              <img className="size-10" src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
