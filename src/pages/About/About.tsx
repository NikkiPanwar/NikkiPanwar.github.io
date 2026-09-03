import CtaBanner from "../../components/CtaBanner/CtaBanner";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="container about-container">
          <div className="about-visual">
            <div className="about-photo-card">
              <img
                src="/profile.png"
                alt="Nikita Panwar"
                className="about-photo"
              />
            </div>
            <div className="about-quick-facts">
              <h3>Quick Info</h3>
              <ul>
                <li><strong>Role:</strong> Software Engineer</li>
                <li><strong>Company:</strong> Acelucid Technologies</li>
                <li><strong>Experience:</strong> 2 Years</li>
                <li><strong>Location:</strong> Dehradun, Uttarakhand, India</li>
                <li><strong>Education:</strong> Bachelor of Computer Applications</li>
              </ul>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Me</span>
            <h1 className="about-heading">
              Hi, I'm Nikita. I build web applications with care and curiosity.
            </h1>

            <div className="about-text">
              <p>
                I am a Software Engineer based in Dehradun, India. Over the past 2 years at <strong>Acelucid Technologies</strong>, I have been focused on building web applications for EdTech and travel clients.
              </p>
              <p>
                My daily work is primarily in <strong>Angular and TypeScript</strong>. I enjoy creating responsive, accessible user interfaces, building modular components, and writing clean, reliable form validations. I also work with backend APIs built with <strong>Python/FastAPI</strong> and <strong>Node.js</strong>, and interact with relational databases like PostgreSQL and MySQL.
              </p>
              <p>
                I graduated with a <strong>Bachelor of Computer Applications</strong>. During college, I built projects like <em>Travel Buddies</em>, which sparked my interest in full-stack web development.
              </p>
              <p>
                When I'm not in front of my code editor, I enjoy reading, exploring new places, listening to music, and learning about emerging tech.
              </p>
            </div>

            {/* Contact Details */}
            <div className="about-contact-cards">
              <div className="contact-mini-card">
                <span className="mini-card-label">Email</span>
                <a href="mailto:nikitapanwar11@gmail.com" className="mini-card-value">
                  nikitapanwar11@gmail.com
                </a>
              </div>

              <div className="contact-mini-card">
                <span className="mini-card-label">Phone</span>
                <a href="tel:9528421988" className="mini-card-value">
                  +91 95284 21988
                </a>
              </div>

              <div className="contact-mini-card">
                <span className="mini-card-label">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/nikita-panwar-086209832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mini-card-value"
                >
                  linkedin.com/in/nikita-panwar
                </a>
              </div>

              <div className="contact-mini-card">
                <span className="mini-card-label">Location</span>
                <span className="mini-card-value">
                  Dehradun, Uttarakhand, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </div>
  );
}

export default About;