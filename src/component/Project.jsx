/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function BrowserFrame({ children, url }) {
  return (
    <div className="browser-frame">
      <div className="browser-chrome">
        <div className="browser-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="browser-url">{url}</div>
      </div>
      {children}
    </div>
  );
}

export default function Project() {
  return (
    <section className="section-page" id="PROJECTS">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-tag">03 — Work</span>
          <h2 className="section-title">
            Featured <span className="primary-color">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real products built with React, Next.js, and modern tooling
          </p>
        </motion.div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="glass-card project-card"
              style={{ "--project-accent": project.accent }}
            >
              <BrowserFrame url={project.url}>
                <div className="project-image-wrap">
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="project-image-overlay" />
                </div>
              </BrowserFrame>
              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {project.live && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    data-magnetic
                  >
                    Visit Live <span>&rarr;</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
