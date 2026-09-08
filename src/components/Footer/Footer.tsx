import React from "react";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpIcon } from "../Icons";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "/");
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    e.preventDefault();
    if (path === "/" || id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", path);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", path);
    }
  };

  return (
    <footer className="portfolio-footer">
      {/* Ambient background glow decoration */}
      <div className="footer-glow-mesh" aria-hidden="true" />

      <div className="container footer-content-wrapper">
        <div className="footer-grid">
          {/* Brand & Bio Column */}
          <div className="footer-brand-col">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/", "home")}
              className="footer-logo"
            >
              NP<span className="brand-dot">.</span>
            </a>
            <h3 className="footer-author">Nikita Panwar</h3>
            <p className="footer-role">Software Engineer</p>
            <p className="footer-tagline">
              Building clean, reliable web applications.
            </p>

            <div className="footer-social-row">
              <a
                href="https://github.com/NikkiPanwar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-panwar-0b6206252/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:nikitapanwar.work@gmail.com"
                className="footer-social-btn"
                aria-label="Email Nikita"
              >
                <MailIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, "/", "home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLinkClick(e, "/about", "about")}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/experience"
                  onClick={(e) => handleLinkClick(e, "/experience", "experience")}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => handleLinkClick(e, "/projects", "projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact", "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Nikita Panwar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            aria-label="Scroll back to top"
            title="Scroll back to top"
          >
            <ArrowUpIcon size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;