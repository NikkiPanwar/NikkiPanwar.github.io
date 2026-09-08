import { useState, useEffect } from "react";
import { ArrowRightIcon } from "../Icons";
import "./Navbar.css";

const NAV_ITEMS = [
  { name: "Home", path: "/", id: "home" },
  { name: "About", path: "/about", id: "about" },
  { name: "Experience", path: "/experience", id: "experience" },
  { name: "Projects", path: "/projects", id: "projects" },
  { name: "Contact", path: "/contact", id: "contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    setMobileOpen(false);
    e.preventDefault();

    if (path === "/" || id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", path);
      setActiveSection("home");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", path);
      setActiveSection(id);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/", "home")}
          className="brand-logo"
        >
          NP<span className="brand-dot">.</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path, item.id)}
                className={`nav-link-item ${isActive ? "active" : ""}`}
              >
                {item.name}
                {isActive && <span className="nav-active-pill" />}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="nav-actions">
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact", "contact")}
            className="btn-gradient nav-cta-btn"
          >
            <span>Let's Talk</span>
            <ArrowRightIcon size={16} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger-line top" />
            <span className="hamburger-line middle" />
            <span className="hamburger-line bottom" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path, item.id)}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact", "contact")}
            className="btn-gradient mobile-nav-cta"
          >
            <span>Let's Talk</span>
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;