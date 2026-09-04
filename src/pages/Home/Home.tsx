import { Link } from "react-router-dom";
import SkillCard from "../../components/SkillCard/SkillCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-greeting">Hi, I'm Nikita Panwar 👋</span>
            <h1 className="hero-title">
              Software Engineer building clean, reliable web applications.
            </h1>
            <p className="hero-bio">
              I'm a developer based in Dehradun, India, with 2 years of experience at <strong>Acelucid Technologies</strong>. I specialize in frontend engineering with <strong>Angular</strong> and <strong>TypeScript</strong>, working alongside backend APIs built with <strong>Python/FastAPI</strong> and <strong>Node.js</strong>.
            </p>

            <div className="hero-actions">
              <a
                href="/Nikita_Panwar_Resume.pdf"
                download="Nikita_Panwar_Resume.pdf"
                className="btn-primary"
              >
                Download Resume
              </a>

              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>

            <div className="hero-links">
              <span className="links-label">Find me on:</span>
              <a
                href="https://linkedin.com/in/nikita-panwar-086209832"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                LinkedIn
              </a>
              <span className="dot-sep">•</span>
              <a
                href="https://github.com/nikitapanwar11"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                GitHub
              </a>
              <span className="dot-sep">•</span>
              <a
                href="mailto:nikitapanwar11@gmail.com"
                className="hero-social-link"
              >
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-box">
              <img
                src="/profile.png"
                alt="Nikita Panwar"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ABOUT INTRO */}
      <section className="section-intro">
        <div className="container">
          <div className="intro-card">
            <div className="intro-text">
              <span className="section-label">About Me</span>
              <h2>Focused on practical, user-friendly software</h2>
              <p>
                Over the past two years, I've contributed to client-facing web applications in the EdTech and travel sectors. I enjoy turning design ideas and product requirements into well-structured, responsive web pages, building reusable components, and making sure forms and user flows work smoothly without bugs.
              </p>
            </div>
            <Link to="/about" className="intro-read-more">
              More about my background →
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section className="section-skills">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Skills & Tools</span>
            <h2>What I work with</h2>
            <p className="section-subtitle">
              The primary technologies and tools I use to build web applications day to day.
            </p>
          </div>

          <div className="skills-grid">
            <SkillCard
              title="Frontend Development"
              description="Building responsive, component-driven single page applications."
              skills={["Angular", "React", "TypeScript", "JavaScript", "RxJS", "HTML5", "CSS3", "Bootstrap"]}
            />

            <SkillCard
              title="Backend & APIs"
              description="Connecting frontends with secure and efficient REST APIs."
              skills={["Python", "FastAPI", "Node.js", "Express.js", "Laravel", "REST APIs", "PHP"]}
            />

            <SkillCard
              title="Databases & Cloud"
              description="Data storage, version control, and cloud hosting."
              skills={["MySQL", "PostgreSQL", "MongoDB", "AWS (S3 & CloudFront)", "Git", "GitHub"]}
            />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="section-projects">
        <div className="container">
          <div className="projects-header-row">
            <div>
              <span className="section-label">Projects</span>
              <h2>Featured Work</h2>
            </div>
            <Link to="/projects" className="view-all-link">
              View all projects →
            </Link>
          </div>

          <div className="featured-projects-grid">
            <ProjectCard
              badge="Work Project"
              subtitle="company project"
              title="Educational Learning Platform"
              description="A web-based learning and assessment platform with classroom modules, interactive quizzes, and student dashboards. Developed the Angular frontend interfaces and connected them with backend FastAPI endpoints."
              technologies={["Angular", "TypeScript", "Python/FastAPI", "AWS S3"]}
              link="/projects"
            />

            <ProjectCard
              badge="Work Project"
              subtitle="company project"
              title="Travel Management Platform"
              description="A web platform for travel companies to manage itineraries, customer bookings, packages, and tour guides. Built the booking workflows and admin management screens."
              technologies={["Angular", "Node.js", "Express.js", "MySQL"]}
              link="/projects"
            />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </div>
  );
}

export default Home;