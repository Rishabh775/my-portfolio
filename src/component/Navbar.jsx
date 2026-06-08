import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { portfolioData } from "../data/portfolioData";

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
        <a href="#HOME" className="navbar-logo">
          <span className="primary-color">&lt;</span>
          {portfolioData.firstName.toUpperCase()}
          <span className="primary-color">/&gt;</span>
        </a>

        <div className="navbar-links">
          {portfolioData.navItems.map((item) => (
            <NavItem key={item} title={item} />
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
              {portfolioData.navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ title }) {
  return (
    <a href={`#${title}`} className="nav-item" data-magnetic>
      <span>{title}</span>
      <span className="nav-item-line" />
    </a>
  );
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};
