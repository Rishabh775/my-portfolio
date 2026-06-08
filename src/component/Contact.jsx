import { motion } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const constraintsRef = useRef(null);

  return (
    <section className="section-page section-page-contact" id="CONTACT" ref={constraintsRef}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-tag">05 — Connect</span>
          <h2 className="section-title">
            Let&apos;s <span className="primary-color">Build</span> Together
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Drop me a message.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info glass-card"
          >
            <h3 className="contact-info-title">Open to opportunities</h3>
            <p className="contact-info-text">
              Frontend engineer specializing in React & Next.js. Based in{" "}
              {portfolioData.location}.
            </p>
            <a href={`mailto:${portfolioData.email}`} className="contact-email">
              {portfolioData.email}
            </a>
            <div className="contact-socials">
              <a href={portfolioData.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            drag
            dragConstraints={constraintsRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card contact-form-card"
          >
            <form
              action="https://getform.io/f/kazRmOaJ"
              target="_blank"
              method="POST"
            >
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="form-input form-textarea"
                />
                <button type="submit" className="btn-primary btn-full">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
