export default function Projects() {
  return (
    <div className="bg-[#111132]  " id="PROJECTS">
      <div className=" w-4/6 mx-auto  p-5">
        <div className="pb-8 text-center">
          <p className="text-4xl  mb-3 font-bold primary-color">Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center  h-[200px] bg-cover  group relative">
            <img src="visitto.png" alt="" />
            <div className="opacity-0 group:hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Visitto
              </span>
              <div className="pt-8 text-center">
                <a href="https://visitto.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center  h-[200px] bg-cover  group relative">
            <img src="oxyzon.png" alt="" />
            <div className="opacity-0 group:hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Oxyzon
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://next-js-ecommerce-omega.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center  h-[200px] bg-cover  group relative">
            <img src="todo.png" alt="" />
            <div className="opacity-0 group:hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-mytodo.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
