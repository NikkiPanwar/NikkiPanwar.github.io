import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          NP<span className="logo-dot">.</span>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`bar ${mobileOpen ? "open" : ""}`}></span>
          <span className={`bar ${mobileOpen ? "open" : ""}`}></span>
          <span className={`bar ${mobileOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>
            About
          </NavLink>
          <NavLink to="/experience" onClick={() => setMobileOpen(false)}>
            Experience
          </NavLink>
          <NavLink to="/projects" onClick={() => setMobileOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;