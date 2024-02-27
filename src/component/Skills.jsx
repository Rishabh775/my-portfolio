import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-screen flex flex-col items-center justify-center  text-white font-bold font-sans">
      <h1 className="text-center primary-color text-5xl pb-10 text-white">
        Skills
      </h1>
      <div className="relative group  ">
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 60, -60, 0],
            y: [0, 60, -60, 0],
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 10,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="w-5/6 md:w-3/6 lg:w-2/6  m-auto  absolute -inset-1 bg-gradient-to-r from-green-600 to-purple-600 opacity-75 rounded-lg blur-lg group-hover:bg-opacity-100 transition duration-200"
        ></motion.div>
        <div className=" relative w-5/6 md:w-3/6 lg:w-2/6 py-8 flex flex-wrap  items-center gap-7 md:gap-14 bg-slate-900  rounded-2xl justify-center m-auto  ">
          <label className="flex gap-4 items-center border border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="c-.png" alt="" />
            <span>c++</span>
          </label>
          <label className="flex gap-4 items-center border border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="html-5.webp" alt="" />
            <span>HTML</span>
          </label>
          <label className="flex gap-4 items-center border  border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="css.webp" alt="" />
            <span>CSS</span>
          </label>
          <label className="flex gap-4 items-center border  border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="js.webp" alt="" />
            <span>JAVASCRIPT</span>
          </label>
          <label className="flex gap-4 items-center border  border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="typescript.png" alt="" />
            <span>TYPESCRIPT</span>
          </label>
          <label className="flex gap-4 items-center border  border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="React.webp" alt="" />
            <span>REACT</span>
          </label>
          <label className="flex gap-4 items-center border  border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="next.jpg" alt="" />
            <span>NEXT</span>
          </label>
          <label className="flex gap-4 items-center border border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="prisma.svg" alt="" />
            <span>PRISMA</span>
          </label>
          <label className="flex gap-4 items-center border  border-gray-400 rounded-full p-4 py-4 ">
            <img className="size-10" src="mongo.webp" alt="" />
            <span>MONGODB</span>
          </label>
        </div>
      </div>
    </div>
  );
}
