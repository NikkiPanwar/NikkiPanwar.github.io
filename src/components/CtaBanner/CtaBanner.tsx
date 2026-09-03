import { Link } from "react-router-dom";
import "./CtaBanner.css";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CtaBanner({
  title = "Let's build something amazing together!",
  subtitle = "I'm open to new opportunities and exciting projects.",
  buttonText = "Get In Touch",
  buttonLink = "/contact",
}: CtaBannerProps) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-icon-wrapper">
          <div className="cta-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>

        <div className="cta-text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="cta-action">
          <Link to={buttonLink} className="cta-btn">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
