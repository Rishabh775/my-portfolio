import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-name">
          <span className="primary-color">&lt;</span>
          {portfolioData.name}
          <span className="primary-color">/&gt;</span> © 2026
        </span>
        <div className="footer-links">
          <a href={portfolioData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <a href={`mailto:${portfolioData.email}`} className="footer-email">
          {portfolioData.email}
        </a>
      </div>
    </footer>
  );
}
