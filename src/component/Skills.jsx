import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section-page" id="SKILLS">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-tag">02 — Tech Stack</span>
          <h2 className="section-title">
            Skills in <span className="primary-color">Orbit</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with daily as a frontend engineer
          </p>
        </motion.div>

        <div className="skills-grid">
          {portfolioData.skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
              className="glass-card skills-category"
            >
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.06,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="skill-pill"
                    style={{ "--skill-color": skill.color }}
                  >
                    <span className="skill-dot" />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
