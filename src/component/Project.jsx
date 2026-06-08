/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const projects = [
  {
    image: "/oxyzon.png",
    name: "Oxyzon",
    url: "https://next-js-ecommerce-omega.vercel.app/",
    description:
      "Full-stack e-commerce platform with product catalog, cart, and checkout flow.",
    tech: ["Next.js", "TypeScript", "Prisma", "MongoDB"],
    live: true,
  },
  {
    image: "/Loop.png",
    name: "Loop",
    url: "https://loop-sepia.vercel.app/",
    description:
      "Music streaming platform with playlist management and real-time audio playback.",
    tech: ["React", "Node.js"],
    live: true,
  },
  {
    image: "/visitto.png",
    name: "Visitto",
    url: "https://visitto.netlify.app/",
    description:
      "Landing page for a travel agency with immersive scroll experiences.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: true,
  },
];

function BrowserFrame({ children, url }) {
  return (
    <div className="rounded-t-xl overflow-hidden border border-gray-700/50 border-b-0">
      <div className="bg-gray-800/80 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-3 flex-1 bg-gray-900/80 rounded-md px-3 py-1 text-gray-400 text-xs truncate border border-gray-700/30">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export default function Project() {
  return (
    <section className="bg-transparent py-24 relative" id="PROJECTS">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06)_0%,transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            My <span className="primary-color">Projects</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            Things I&apos;ve built that solve real problems
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TiltCard className="h-full rounded-xl">
                <div className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col border border-gray-800/50">
                  <BrowserFrame url={project.url}>
                    <div className="relative overflow-hidden">
                      <div
                        className="h-40 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                    </div>
                  </BrowserFrame>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 bg-gray-800/80 text-gray-300 rounded-full border border-gray-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.live && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm group/link"
                        data-magnetic
                      >
                        <span>Visit Live</span>
                        <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}