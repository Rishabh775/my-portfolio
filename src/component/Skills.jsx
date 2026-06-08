import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Prisma", color: "#2D3748" },
      { name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "Cursor", color: "#A855F7" },
      { name: "GitHub Copilot", color: "#6E40C9" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0a0a0f] py-24 relative" id="SKILLS">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05)_0%,transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            My <span className="primary-color">Tech Stack</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            Technologies I work with daily
          </p>
        </motion.div>
        <div className="space-y-10 text-center">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
            >
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: catIndex * 0.2 + skillIndex * 0.08,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <span
                      className="px-5 py-2.5 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-white rounded-full text-sm hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 inline-block cursor-default"
                      style={{
                        // subtle glow on hover via inline style for the accent color
                        "--glow-color": skill.color,
                      }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: skill.color }} />
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}