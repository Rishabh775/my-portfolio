import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="section-page hero-section" id="HOME">
      <div className="section-inner hero-layout">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-badge"
          >
            <span className="pulse-dot" />
            Currently at {portfolioData.company}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="hero-title"
          >
            Hey, I&apos;m {portfolioData.name.split(" ")[0]}
            <br />
            <span className="primary-color hero-role">{portfolioData.heroRole}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-description"
          >
            {portfolioData.tagline} {portfolioData.highlight}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="hero-actions"
          >
            <a href={portfolioData.resume} target="_blank" rel="noreferrer" data-magnetic>
              <button className="btn-primary" data-magnetic>
                View Resume
              </button>
            </a>
            <a href="#CONTACT" data-magnetic>
              <button className="btn-secondary" data-magnetic>
                Get in Touch
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-stats"
          >
            {portfolioData.stats.map((stat, index) => (
              <div key={stat.label} className="hero-stat-group">
                {index > 0 && <div className="stat-divider" />}
                <div className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-spacer" aria-hidden="true" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-hint"
      >
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
