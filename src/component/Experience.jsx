import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section-page" id="EXPERIENCE">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-tag">04 — Journey</span>
          <h2 className="section-title">
            Experience & <span className="primary-color">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Where I&apos;ve worked and what I&apos;ve accomplished
          </p>
        </motion.div>

        <div className="experience-timeline">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card experience-card"
            >
              <div className="experience-marker" />
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                {exp.current && <span className="current-badge">Current</span>}
              </div>
              <p className="experience-company">
                {exp.company} · {exp.period}
              </p>
              <p className="experience-desc">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="achievements-section"
        >
          <h3 className="achievements-label">Achievements</h3>
          <div className="achievements-grid">
            {portfolioData.achievements.map((achievement, index) => (
              <motion.span
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="achievement-pill"
              >
                <span className="achievement-icon">{achievement.icon}</span>
                {achievement.title}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
