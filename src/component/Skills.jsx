export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-[110vh] sm:h-screen flex flex-col items-center justify-center text-white font-bold font-sans">
      <h1 className="text-center primary-color text-5xl pb-10 text-white">
        Skills
      </h1>
      <div className=" group relative ">
        <div className="relative w-5/6  lg:w-4/6   py-8 flex flex-wrap items-center gap-2 sm:gap-7 md:gap-14 rounded-2xl justify-evenly m-auto">
          <label className="flex gap-4 items-center hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="c-.png" alt="" />
            <span>c++</span>
          </label>
          <label className="flex gap-4 items-center   hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="html-5.webp" alt="" />
            <span>HTML</span>
          </label>
          <label className="flex gap-4 items-center  hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="css.webp" alt="" />
            <span>CSS</span>
          </label>
          <label className="flex gap-4 items-center  hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="js.webp" alt="" />
            <span>JAVASCRIPT</span>
          </label>
          <label className="flex gap-4 items-center  hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="typescript.png" alt="" />
            <span>TYPESCRIPT</span>
          </label>
          <label className="flex gap-4 items-center  hover:shadow-indigo-950 shadow-md   bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="React.webp" alt="" />
            <span>REACT</span>
          </label>
          <label className="flex gap-4 items-center   hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="next.jpg" alt="" />
            <span>NEXT</span>
          </label>
          <label className="flex gap-4 items-center  hover:shadow-indigo-950 shadow-md  bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="prisma.svg" alt="" />
            <span>PRISMA</span>
          </label>
          <label className="flex gap-4 items-center  hover:shadow-indigo-950 shadow-md   bg-gray-800 rounded-full px-8 py-2 ">
            <img className="size-10" src="mongo.webp" alt="" />
            <span>MONGODB</span>
          </label>
        </div>
      </div>
    </div>
  );
}
