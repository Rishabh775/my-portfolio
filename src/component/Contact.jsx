import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-page section-page-contact" id="CONTACT">
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
              Frontend engineer specializing in React &amp; Next.js. Based in{" "}
              {portfolioData.location}.
            </p>
            <a href={`mailto:${portfolioData.email}`} className="contact-email">
              {portfolioData.email}
            </a>
            <a href={`tel:${portfolioData.phone}`} className="contact-phone">
              {portfolioData.phone}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card contact-form-card"
          >
            <form
              action="https://getform.io/f/kazRmOaJ"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-grid">
                <div className="form-field">
                  <label className="sr-only" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label className="sr-only" htmlFor="contact-email">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-field form-field-full">
                  <label className="sr-only" htmlFor="contact-message">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Your Message"
                    className="form-input form-textarea"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary btn-full"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>
              {status === "success" && (
                <p className="form-feedback form-feedback-success" role="status">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-feedback form-feedback-error" role="alert">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
