import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Randon() {
  const cards = [
    {
      url: "/c-.png",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/html-5.webp",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/css.webp",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/js.webp",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/typescript.png",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/React.webp",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/next.jpg",
      title: "Title 7",
      id: 7,
    },
    {
      url: "/prisma.svg",
      title: "Title 7",
      id: 8,
    },
    {
      url: "/mongo.webp",
      title: "Title 7",
      id: 9,
    },
  ];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative w-[400px]  h-[400px]  overflow-hidden bg-neutral-200"
            >
              <div
                style={{
                  backgroundImage: `url(${card.url})`,
                  //   backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="absolute inset-0 z-10 grid place-content-center">
                {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                  {card.title}
                </p> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
