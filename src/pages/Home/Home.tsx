import React, { useState, useEffect } from "react";
import {
  AngularIcon,
  TypeScriptIcon,
  PythonIcon,
  FastApiIcon,
  PostgreSqlIcon,
  NodeJsIcon,
  GitIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  LocationIcon,
  PhoneIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  ToolsIcon,
  GraduationIcon,
  CodeScreenIcon,
  BookIcon,
  LayersIcon,
  RazorpayIcon,
  LaravelIcon,
} from "../../components/Icons";
import "./Home.css";

export const getAssetUrl = (assetPath: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

const PROJECTS = [
  {
    id: "ai-interview",
    title: "AI Interview & Proctoring Platform",
    badge: "Company Project • Acelucid Technologies",
    isCompany: true,
    description:
      "An AI-powered interview platform with real-time video proctoring, AI technical scoring, speech clarity analytics, and automated candidate assessment reports.",
    tags: ["Angular", "TypeScript", "FastAPI", "PostgreSQL", "RBAC"],
    image: getAssetUrl("project-ai-interview.jpg"),
    demoUrl: null,
    codeUrl: null,
  },
  {
    id: "edtech-platform",
    title: "Educational Learning Platform",
    badge: "Company Project • Acelucid Technologies",
    isCompany: true,
    description:
      "A scalable EdTech platform with classroom modules, interactive quiz editors, student dashboards, OneSignal notifications, and secure FastAPI backend endpoints deployed on AWS.",
    tags: ["Angular", "FastAPI", "AWS S3", "OneSignal", "PostgreSQL"],
    image: getAssetUrl("project-edtech.jpg"),
    demoUrl: null,
    codeUrl: null,
  },
  {
    id: "sheet-hotel",
    title: "Sheet Hotel Booking & Management",
    badge: "Hospitality & Property Platform",
    isCompany: false,
    description:
      "A custom hotel booking and property management web platform built for Sheet Hotel, featuring real-time room availability, suite previews, guest reservations, and Razorpay payment integration.",
    tags: ["Angular", "TypeScript", "Node.js", "Express.js", "Razorpay", "MySQL"],
    image: getAssetUrl("project-hotel.jpg"),
    demoUrl: "https://nikkipanwar.github.io/sheetal-resort/",
    codeUrl: "https://github.com/NikkiPanwar/sheetal-resort",
  },
  {
    id: "travel-buddies",
    title: "Travel Buddies — Rural Tourism Platform",
    badge: "Full-Stack Project",
    isCompany: false,
    description:
      "A rural-tourism community platform supporting destination management, curated travel packages, user experience sharing, authentication, and role-based access.",
    tags: ["Angular", "Laravel", "MySQL", "Responsive UI"],
    image: getAssetUrl("project-travel.jpg"),
    demoUrl: "https://github.com/NikkiPanwar",
    codeUrl: "https://github.com/NikkiPanwar",
  },
];

function Home() {
  const [projectSlideIndex, setProjectSlideIndex] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 860);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const maxSlideIndex = isMobileView ? PROJECTS.length - 1 : PROJECTS.length - 2;

  const nextProjectSlide = () => {
    setProjectSlideIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const prevProjectSlide = () => {
    setProjectSlideIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  useEffect(() => {
    if (isSliderHovered) return;
    const timer = setInterval(() => {
      setProjectSlideIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isSliderHovered, maxSlideIndex]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/projects");
    }
  };

  const resumeUrl = getAssetUrl("Nikita_Panwar_Resume.pdf");

  return (
    <div className="home-portfolio">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section id="home" className="hero-section">
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="container hero-container">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span>FULL-STACK Developer</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="gradient-text">Nikita Panwar.</span>
            </h1>

            <h2 className="hero-subheading">
              Building scalable, production web applications with Angular,
              TypeScript, and modern backend services.
            </h2>

            <p className="hero-bio">
              Full-Stack Developer with 2 years of experience at
              Acelucid Technologies, delivering end-to-end applications across
              EdTech and Travel domains with Angular, Python/FastAPI, Node.js,
              and AWS.
            </p>

            <div className="hero-cta-group">
              <a
                href="/projects"
                onClick={scrollToProjects}
                className="btn-gradient hero-cta-btn"
              >
                <span>View My Projects</span>
                <ArrowRightIcon size={16} />
              </a>

              <a
                href={resumeUrl}
                download="Nikita_Panwar_Resume.pdf"
                className="btn-glass hero-cta-btn"
                title="Download Nikita Panwar Resume (PDF)"
              >
                <span>Download CV</span>
                <DownloadIcon size={16} />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass hero-cta-btn"
                title="View Resume in browser"
              >
                <span>View CV</span>
                <ArrowUpRightIcon size={15} />
              </a>
            </div>

            {/* Tech Stack Row */}
            <div className="hero-tech-strip">
              <div className="tech-badge-item">
                <AngularIcon size={20} />
                <span>Angular</span>
              </div>
              <div className="tech-badge-item">
                <TypeScriptIcon size={20} />
                <span>TypeScript</span>
              </div>
              <div className="tech-badge-item">
                <PythonIcon size={20} />
                <span>Python</span>
              </div>
              <div className="tech-badge-item">
                <FastApiIcon size={20} />
                <span>FastAPI</span>
              </div>
              <div className="tech-badge-item">
                <PostgreSqlIcon size={20} />
                <span>PostgreSQL</span>
              </div>
              <div className="tech-badge-item">
                <NodeJsIcon size={20} />
                <span>Node.js</span>
              </div>
              <div className="tech-badge-item">
                <LaravelIcon size={20} />
                <span>Laravel</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual / Profile Portal */}
          <div className="hero-visual">
            <div className="portal-wrapper">
              <div className="portal-glow-halo" aria-hidden="true" />

              <div className="portal-avatar-frame">
                <img
                  src={getAssetUrl("nikita-portrait.jpg?v=2")}
                  alt="Nikita Panwar - Full-Stack Developer"
                  className="portal-avatar-img"
                />
              </div>

              {/* Floating Tech Chips */}
              <div className="floating-chip chip-angular">
                <AngularIcon size={16} />
                <span>Angular</span>
              </div>

              <div className="floating-chip chip-typescript">
                <TypeScriptIcon size={16} />
                <span>TypeScript</span>
              </div>

              <div className="floating-chip chip-fastapi">
                <FastApiIcon size={16} />
                <span>FastAPI</span>
              </div>

              {/* Profile Card Overlay */}
              <div className="hero-floating-card glass-card">
                <div className="card-header-info">
                  <h3 className="card-name">Nikita Panwar</h3>
                  <p className="card-title">Full-Stack Developer</p>
                </div>

                <div className="card-details-row">
                  <div className="card-detail-item">
                    <span className="card-detail-icon">⏱</span>
                    <span>2+ Years Production Experience</span>
                  </div>
                  <div className="card-detail-item status-available">
                    <span className="pulse-dot" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding about-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column: Bio */}
            <div className="about-info-col">
              <span className="section-tag">01 / ABOUT ME</span>
              <h2 className="section-title">
                The person behind <br />
                <span className="gradient-text">the code</span>
              </h2>

              <p className="about-highlight-quote">
                Turning ideas into clean, reliable, and user-friendly software.
              </p>

              <div className="about-paragraphs">
                <p>
                  I'm a Full-Stack Developer with 2 years of experience
                  building and maintaining production web applications end-to-end
                  across EdTech and Travel domains.
                </p>
                <p>
                  My primary strength is in <strong>Angular and TypeScript</strong> on the
                  frontend, paired with backend services in <strong>Python/FastAPI</strong>,{" "}
                  <strong>Node.js</strong>, and <strong>Laravel</strong>. I specialize in REST API
                  integration, authentication, role-based access control (RBAC),
                  reactive forms, and cloud deployments on AWS.
                </p>
                <p>
                  I also build critical third-party integrations including{" "}
                  <strong>Razorpay payment gateways</strong>,{" "}
                  <strong>OneSignal push notifications</strong>, and{" "}
                  <strong>automated WhatsApp campaigns</strong> to deliver seamless user
                  experiences from database to browser.
                </p>
              </div>
            </div>

            {/* Right Column: Technical Skills */}
            <div className="about-skills-col">
              <h3 className="skills-group-title">Technical Skills</h3>

              <div className="skills-stack-list">
                {/* Frontend */}
                <div className="skill-cat-card glass-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon-box box-frontend">
                      <FrontendIcon size={20} />
                    </div>
                    <h4 className="skill-cat-name">Frontend</h4>
                  </div>
                  <div className="skill-tags-wrap">
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML5</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">Bootstrap</span>
                  </div>
                </div>

                {/* Backend & APIs */}
                <div className="skill-cat-card glass-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon-box box-backend">
                      <BackendIcon size={20} />
                    </div>
                    <h4 className="skill-cat-name">Backend & APIs</h4>
                  </div>
                  <div className="skill-tags-wrap">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">FastAPI</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express.js</span>
                    <span className="tech-tag">Laravel</span>
                    <span className="tech-tag">REST APIs</span>
                  </div>
                </div>

                {/* Databases */}
                <div className="skill-cat-card glass-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon-box box-database">
                      <DatabaseIcon size={20} />
                    </div>
                    <h4 className="skill-cat-name">Databases</h4>
                  </div>
                  <div className="skill-tags-wrap">
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">SQL</span>
                  </div>
                </div>

                {/* Integrations & Cloud */}
                <div className="skill-cat-card glass-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon-box box-tools">
                      <ToolsIcon size={20} />
                    </div>
                    <h4 className="skill-cat-name">Cloud, Tools & Integrations</h4>
                  </div>
                  <div className="skill-tags-wrap">
                    <span className="tech-tag">Razorpay</span>
                    <span className="tech-tag">OneSignal</span>
                    <span className="tech-tag">WhatsApp API</span>
                    <span className="tech-tag">AWS (S3 & CloudFront)</span>
                    <span className="tech-tag">
                      <GitIcon size={14} /> Git
                    </span>
                    <span className="tech-tag">
                      <GitHubIcon size={14} /> GitHub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. 02 / EXPERIENCE SECTION                                   */}
      {/* ============================================================ */}
      <section id="experience" className="section-padding experience-section">
        <div className="container">
          <span className="section-tag">02 / EXPERIENCE</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            My professional journey and the technologies I've worked with.
          </p>

          <div className="experience-timeline">
            {/* Timeline Left Rail */}
            <div className="timeline-rail">
              <div className="timeline-dot" />
              <span className="timeline-date-label">2024 — Present</span>
            </div>

            {/* Experience Card */}
            <div className="experience-card glass-card">
              <div className="exp-card-header">
                <div className="company-logo-badge">
                  <span>A</span>
                </div>
                <div className="company-info-text">
                  <h3 className="company-name">Acelucid Technologies Pvt. Ltd.</h3>
                  <p className="company-role">Software Engineer</p>
                </div>
              </div>

              <p className="exp-description">
                Developing and maintaining reusable Angular components, responsive production
                interfaces, and backend services for EdTech and Travel applications.
                Implementing JWT authentication, RBAC, route guards, and delivering
                end-to-end features for classroom, quiz, course, assessment, and proctoring
                modules with AWS deployments.
              </p>

              <div className="exp-tech-tags">
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Python/FastAPI</span>
                <span className="tech-tag">Razorpay</span>
                <span className="tech-tag">OneSignal</span>
                <span className="tech-tag">WhatsApp API</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. 03 / PROJECTS SECTION (ANIMATED SLIDER)                   */}
      {/* ============================================================ */}
      <section id="projects" className="section-padding projects-section">
        <div className="container">
          <div className="projects-header-row">
            <div className="projects-header-text">
              <span className="section-tag">03 / PROJECTS</span>
              <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                Selected projects showcasing my frontend, backend, and full-stack
                development experience.
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="projects-slider-controls">
              <button
                onClick={prevProjectSlide}
                className="slider-arrow-btn"
                aria-label="Previous Project"
                title="Previous Projects"
              >
                <ArrowLeftIcon size={18} />
              </button>
              <span className="slider-counter">
                0{projectSlideIndex + 1} / 0{PROJECTS.length}
              </span>
              <button
                onClick={nextProjectSlide}
                className="slider-arrow-btn"
                aria-label="Next Project"
                title="Next Projects"
              >
                <ArrowRightIcon size={18} />
              </button>
            </div>
          </div>

          {/* Slider Viewport */}
          <div
            className="projects-slider-viewport"
            onMouseEnter={() => setIsSliderHovered(true)}
            onMouseLeave={() => setIsSliderHovered(false)}
          >
            <div
              className="projects-slider-track"
              style={{
                transform: `translateX(-${projectSlideIndex * (isMobileView ? 100 : 50)
                  }%)`,
              }}
            >
              {PROJECTS.map((project) => (
                <div key={project.id} className="project-slide-item">
                  <div className="project-showcase-card glass-card">
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="project-preview-img"
                      />
                      <div className="project-image-overlay" />
                      <div className="project-badge-pill">
                        {project.badge}
                      </div>
                    </div>

                    <div className="project-body">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tech-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.isCompany ? (
                        <div className="company-project-lock-box">
                          <span className="lock-icon">🔒</span>
                          <span className="lock-text">
                            Company Project (Proprietary / Internal Application)
                          </span>
                        </div>
                      ) : (
                        <div className="project-actions-row">
                          <a
                            href={project.demoUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glass project-action-btn"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRightIcon size={14} />
                          </a>
                          <a
                            href={project.codeUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glass project-action-btn"
                          >
                            <span>GitHub</span>
                            <ArrowUpRightIcon size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="projects-dots-row">
            {Array.from({ length: maxSlideIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProjectSlideIndex(idx)}
                className={`slider-dot ${projectSlideIndex === idx ? "active" : ""
                  }`}
                aria-label={`Go to project slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. 04 / WHAT I DO SECTION                                    */}
      {/* ============================================================ */}
      <section id="what-i-do" className="section-padding what-i-do-section">
        <div className="container">
          <span className="section-tag">04 / WHAT I DO</span>
          <h2 className="section-title">Things I love building</h2>
          <p className="section-subtitle">
            I focus on building solutions that are scalable, maintainable, and
            impactful.
          </p>

          <div className="what-i-do-grid">
            {/* Card 01 */}
            <div className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box box-frontend">
                  <FrontendIcon size={22} />
                </div>
                <span className="service-index">01</span>
              </div>
              <h3 className="service-title">Frontend Engineering</h3>
              <p className="service-desc">
                Responsive, accessible Single Page Applications using Angular and
                TypeScript with modular component design and reactive form validations.
              </p>
            </div>

            {/* Card 02 */}
            <div className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box box-backend">
                  <BackendIcon size={22} />
                </div>
                <span className="service-index">02</span>
              </div>
              <h3 className="service-title">Backend APIs & Services</h3>
              <p className="service-desc">
                Secure, performant REST APIs and server-side workflows built with
                Python, FastAPI, Node.js/Express, and Laravel with RBAC authentication.
              </p>
            </div>

            {/* Card 03 */}
            <div className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box box-tools">
                  <RazorpayIcon size={22} />
                </div>
                <span className="service-index">03</span>
              </div>
              <h3 className="service-title">Payments & Messaging</h3>
              <p className="service-desc">
                Seamless third-party integrations including Razorpay payment
                gateways, OneSignal push notifications, and automated WhatsApp
                campaigns.
              </p>
            </div>

            {/* Card 04 */}
            <div className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box box-fullstack">
                  <LayersIcon size={22} />
                </div>
                <span className="service-index">04</span>
              </div>
              <h3 className="service-title">Full-Stack & Cloud</h3>
              <p className="service-desc">
                Connecting modern frontends with relational databases (PostgreSQL,
                MySQL) and deploying reliable, monitored services on AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. 05 / JOURNEY SECTION                                      */}
      {/* ============================================================ */}
      <section id="journey" className="section-padding journey-section">
        <div className="container">
          <span className="section-tag">05 / JOURNEY</span>
          <h2 className="section-title">My learning journey</h2>
          <p className="section-subtitle">
            Education, certifications, and continuous learning.
          </p>

          <div className="journey-timeline-wrapper">
            {/* Step 1: Education */}
            <div className="journey-step-item">
              <div className="journey-node-column">
                <div className="journey-icon-node node-education">
                  <GraduationIcon size={20} />
                </div>
                <div className="journey-connector-line" />
              </div>
              <div className="journey-content-box">
                <h3 className="journey-item-title">Education</h3>
                <p className="journey-item-subtitle">
                  Bachelor of Computer Applications (BCA) • 2022 – 2025
                </p>
                <p className="journey-item-place">
                  Hemvati Nandan Bahuguna Garhwal University (HNBGU) — Himalayan
                  Institute of Technology, Dehradun
                </p>
              </div>
            </div>

            {/* Step 2: Full Stack Training */}
            <div className="journey-step-item">
              <div className="journey-node-column">
                <div className="journey-icon-node node-training">
                  <CodeScreenIcon size={20} />
                </div>
                <div className="journey-connector-line" />
              </div>
              <div className="journey-content-box">
                <h3 className="journey-item-title">Full-Stack Development Training</h3>
                <p className="journey-item-subtitle">
                  Dream Tech, Dehradun (9 Months)
                </p>
                <p className="journey-item-place">
                  Comprehensive training in modern full-stack web development and
                  industry best practices.
                </p>
              </div>
            </div>

            {/* Step 3: Certifications & Continuous Learning */}
            <div className="journey-step-item">
              <div className="journey-node-column">
                <div className="journey-icon-node node-learning">
                  <BookIcon size={20} />
                </div>
              </div>
              <div className="journey-content-box">
                <h3 className="journey-item-title">Certifications & Continuous Learning</h3>
                <p className="journey-item-subtitle">
                  Python (Core) — GIIT HUB, Karanpur (90 Days) • Web Development — Internshala (56 Days)
                </p>
                <p className="journey-item-place">
                  Continuously learning and exploring new technologies, cloud architectures,
                  and modern software engineering tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. 06 / CONTACT SECTION                                      */}
      {/* ============================================================ */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <span className="section-tag">06 / CONTACT</span>

          <div className="contact-grid">
            {/* Left Column */}
            <div className="contact-info-col">
              <h2 className="section-title">
                Let's build something great{" "}
                <span className="gradient-text">together.</span>
              </h2>

              <p className="contact-lead-desc">
                Have an opportunity, project or just want to connect? I'd love to
                hear from you.
              </p>

              <div className="contact-channels-list">
                {/* Phone */}
                <a
                  href="tel:9528421988"
                  className="contact-channel-card glass-card"
                >
                  <div className="contact-icon-box">
                    <PhoneIcon size={18} />
                  </div>
                  <div className="contact-text-details">
                    <span className="channel-label">Phone</span>
                    <span className="channel-value">+91 95284 21988</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:nikitapanwar.work@gmail.com"
                  className="contact-channel-card glass-card"
                >
                  <div className="contact-icon-box">
                    <MailIcon size={18} />
                  </div>
                  <div className="contact-text-details">
                    <span className="channel-label">Email</span>
                    <span className="channel-value">
                      nikitapanwar.work@gmail.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nikita-panwar-0b6206252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card glass-card"
                >
                  <div className="contact-icon-box">
                    <LinkedInIcon size={18} />
                  </div>
                  <div className="contact-text-details">
                    <span className="channel-label">LinkedIn</span>
                    <span className="channel-value">
                      linkedin.com/in/nikita-panwar-0b6206252
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/NikkiPanwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card glass-card"
                >
                  <div className="contact-icon-box">
                    <GitHubIcon size={18} />
                  </div>
                  <div className="contact-text-details">
                    <span className="channel-label">GitHub</span>
                    <span className="channel-value">
                      github.com/NikkiPanwar
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-channel-card glass-card">
                  <div className="contact-icon-box">
                    <LocationIcon size={18} />
                  </div>
                  <div className="contact-text-details">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">
                      Dehradun, Uttarakhand, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-availability-badge">
                <span className="pulse-dot" />
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-form-col">
              <form
                onSubmit={handleFormSubmit}
                className="contact-form-card glass-card"
              >
                <div className="form-row-group">
                  <div className="form-field-group">
                    <label htmlFor="name" className="field-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email" className="field-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can I help you?"
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient submit-contact-btn"
                  disabled={submitted}
                >
                  {submitted ? (
                    <span>Thank You! Message Sent ✓</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRightIcon size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;