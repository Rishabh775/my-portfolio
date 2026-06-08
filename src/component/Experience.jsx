import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "DevOn",
    period: "2024 \u2013 Present",
    current: true,
    description:
      "Building performant web applications with React and Next.js for enterprise clients.",
  },
];

const achievements = [
  { title: "1st Place \u2014 Smart Odisha Hackathon 2022", icon: "\ud83c\udfc6" },
  { title: "Promising Fresher Award", icon: "\u2b50" },
];

export default function Experience() {
  return (
    <section className="bg-[#0a0a0f] py-24 relative" id="EXPERIENCE">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.05)_0%,transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Experience &{" "}
            <span className="primary-color">Achievements</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            Where I&apos;ve worked and what I&apos;ve accomplished
          </p>
        </motion.div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TiltCard className="rounded-xl">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-xs px-2.5 py-0.5 bg-green-900/50 text-green-400 border border-green-800/50 rounded-full animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-orange-400 font-semibold">
                    {exp.company} &middot; {exp.period}
                  </p>
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5 text-center">
            Achievements
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {achievements.map((achievement, index) => (
              <motion.span
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="px-5 py-2.5 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-full text-sm hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-default"
              >
                <span className="mr-1.5">{achievement.icon}</span>
                {achievement.title}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}