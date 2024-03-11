import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
// import { useWindowSize } from "@react-hook/window-size";

export default function Project() {
  // const [width] = useWindowSize();
  // const isMobile = width < 640;
  const cards = [
    {
      image: "/oxyzon.png",
      name: "Oxyzon",
      url: "https://next-js-ecommerce-omega.vercel.app/",
      description: " E-commerce website",
    },
    {
      image: "/visitto.png",
      name: "Visitto",
      url: "https://visitto.netlify.app/",
      description: "Landing page for a travel agency",
    },

    {
      image: "/todo.png",
      name: "Todo",
      url: "https://react-mytodo.vercel.app/",
      description: " A simple todo app",
    },
  ];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["13%", "-100%"]);

  return (
    <section
      ref={targetRef}
      className="relative overflow-hidden max-sm:h-[300vh] h-[320vh] bg-gradient-to-b from-[#111132] to-[#0c0c1d]"
      id="PROJECTS"
    >
      <div className="sticky  top-0 flex h-screen items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex gap-x-16 sm:gap-x-48">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative max-sm:w-[320px] max-sm:h-[300px] sm:w-[600px] sm:h-[400px] rounded-2xl   lg:w-[1024px]  lg:h-[624px]  overflow-hidden"
            >
              <div
                className="absolute  inset-0 z-0 "
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 font-bold flex flex-wrap  justify-center items-center  opacity-0 hover:opacity-100 text-black duration-500 backdrop-blur-md ">
                <a
                  href={card.url}
                  target="_blank"
                  className="flex flex-wrap  flex-col justify-center items-center"
                >
                  <p className=" py-4 text-2xl md:text-6xl  uppercase  ">
                    {card.name}
                  </p>
                  <p className="font-sans mx-auto text-xl md:text-3xl ">
                    {card.description}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
