/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { portfolioData } from "../data/portfolioData";
import { scrollController } from "./scrollController";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="navbar-inner"
      >
        <a
          href="#HOME"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollController.scrollToSection(0);
          }}
        >
          <span className="primary-color">&lt;</span>
          {portfolioData.firstName.toUpperCase()}
          <span className="primary-color">/&gt;</span>
        </a>

        <div className="navbar-links">
          {portfolioData.navItems.map((item, index) => (
            <NavItem key={item} title={item} index={index} />
          ))}
          <div className="navbar-socials">
            <a target="_blank" href={portfolioData.github} rel="noreferrer" data-magnetic>
              <img className="social-icon" src="/github.png" alt="GitHub" />
            </a>
            <a target="_blank" href={portfolioData.linkedin} rel="noreferrer" data-magnetic>
              <img className="social-icon linkedin" src="/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="navbar-toggle"
          aria-label="Toggle menu"
        >
          {open ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            className="mobile-menu"
            onClick={() => setOpen(false)}
          >
            <p className="mobile-menu-name">{portfolioData.name}</p>
            <ul className="mobile-menu-links">
              {portfolioData.navItems.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      scrollController.scrollToSection(index);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={portfolioData.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mobile-menu-resume"
            >
              View Resume
            </a>
            <div className="mobile-menu-socials">
              <a href={portfolioData.github} target="_blank" rel="noreferrer">
                <img className="social-icon" src="/github.png" alt="GitHub" />
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
                <img className="social-icon linkedin" src="/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ title, index }) {
  return (
    <a
      href={`#${title}`}
      className="nav-item"
      data-magnetic
      onClick={(e) => {
        e.preventDefault();
        scrollController.scrollToSection(index);
      }}
    >
      <span>{title}</span>
      <span className="nav-item-line" />
    </a>
  );
}
