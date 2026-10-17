import { motion } from "framer-motion";
import { FaTrophy, FaRocket, FaStar, FaMedal, FaAward, FaGraduationCap } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const ACHIEVEMENT_ICONS = {
  trophy: FaTrophy,
  rocket: FaRocket,
  star: FaStar,
  medal: FaMedal,
};

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
              key={`${exp.company}-${exp.period}`}
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
              <ul className="experience-bullets">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
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
            {portfolioData.achievements.map((achievement, index) => {
              const Icon = ACHIEVEMENT_ICONS[achievement.icon] || FaAward;
              return (
                <motion.article
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card achievement-card"
                >
                  <div className="achievement-top">
                    <span className="achievement-badge">
                      <Icon />
                    </span>
                    <span className="achievement-rank">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-org">{achievement.org}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="education-section"
        >
          <h3 className="achievements-label">Education</h3>
          <div className="education-grid">
            {portfolioData.education.map((edu, index) => (
              <motion.article
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card education-card"
              >
                <span className="education-marker">
                  <FaGraduationCap />
                </span>
                <div className="education-body">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-school">{edu.school}</p>
                  <div className="education-meta">
                    <span>{edu.period}</span>
                    <span className="education-sep" />
                    <span className="education-detail">{edu.detail}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
