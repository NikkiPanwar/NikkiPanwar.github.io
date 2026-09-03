import CtaBanner from "../../components/CtaBanner/CtaBanner";
import "./Experience.css";

const responsibilities = [
  "Build and maintain responsive user interfaces and modular components using Angular and TypeScript.",
  "Developed key features for an EdTech client platform, including timed quiz engines, classroom workflows, and candidate evaluation dashboards.",
  "Integrated frontend modules with backend REST APIs built in Python/FastAPI, Node.js/Express, and Laravel.",
  "Implemented client-side route guards, role-based access control (RBAC), and JWT token management.",
  "Created complex reactive forms with real-time validation and state recovery.",
  "Assisted in deploying frontends and static assets onto AWS (S3 and CloudFront CDN).",
  "Collaborated with backend engineers, QA, and product managers in bi-weekly Agile sprints and code reviews.",
];

function Experience() {
  return (
    <div className="experience-page">
      <section className="experience-section">
        <div className="container experience-container">
          <div className="page-header">
            <span className="section-label">Resume</span>
            <h1 className="page-title">Work Experience</h1>
            <p className="page-subtitle">
              My hands-on experience building software in production environments.
            </p>
          </div>

          {/* Job Card */}
          <div className="job-card">
            <div className="job-header">
              <div>
                <h2 className="job-title">Software Engineer</h2>
                <h3 className="job-company">Acelucid Technologies Pvt. Ltd.</h3>
              </div>
              <div className="job-meta">
                <span className="job-period">2024 – Present</span>
                <span className="job-location">Dehradun, India</span>
              </div>
            </div>

            <p className="job-summary">
              Working as a frontend-focused software engineer on production web applications across the EdTech and travel domains.
            </p>

            <h4 className="job-section-title">What I Do:</h4>
            <ul className="job-bullet-list">
              {responsibilities.map((item, index) => (
                <li key={index}>
                  <span className="bullet-dot">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="job-tech-stack">
              <span className="tech-stack-title">Technologies Used:</span>
              <div className="tech-stack-tags">
                {[
                  "Angular",
                  "TypeScript",
                  "RxJS",
                  "Python/FastAPI",
                  "Node.js",
                  "REST APIs",
                  "MySQL",
                  "PostgreSQL",
                  "AWS (S3 & CloudFront)",
                  "Git",
                ].map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-card">
            <div className="education-header">
              <div>
                <h2 className="education-degree">Bachelor of Computer Applications (BCA)</h2>
                <h3 className="education-field">Undergraduate Degree</h3>
              </div>
            </div>
            <p className="education-desc">
              Gained strong foundations in Data Structures, Object-Oriented Programming, Relational Databases, and Software Engineering principles. Built full-stack web application project <em>Travel Buddies</em>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </div>
  );
}

export default Experience;