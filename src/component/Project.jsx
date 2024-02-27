import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Project() {
  const cards = [
    {
      image: "/visitto.png",
      name: "Visitto",
      url: "https://visitto.netlify.app/",
    },
    {
      image: "/oxyzon.png",
      name: "Oxyzon",
      url: "https://next-js-ecommerce-omega.vercel.app/",
    },
    {
      image: "/todo.png",
      name: "Todo",
      url: "https://react-mytodo.vercel.app/",
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
      className="relative max-sm:h-[300vh] h-[320vh] bg-[#111132]"
      id="PROJECTS"
    >
      <div className=" text-center">
        <p className="text-5xl mt-10 pb-10 font-bold primary-color">Projects</p>
      </div>
      <div className="sticky  top-0 flex h-screen items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex gap-48">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative max-sm:w-[320px] max-sm:h-[300px] sm:w-[600px] sm:h-[400px]  lg:w-[1024px]  lg:h-[600px]  overflow-hidden bg-neutral-200"
            >
              <div
                className="absolute  inset-0 z-0 "
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 z-10 flex justify-center items-center backdrop-blur-[2px] opacity-0 hover:opacity-100 ">
                <a href={card.url} target="_blank">
                  <p className=" p-8 text-2xl md:text-6xl  uppercase  ">
                    {card.name}
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
