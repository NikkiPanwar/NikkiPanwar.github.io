import { Link } from "react-router-dom";
import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  technologies?: string[];
  link?: string;
  externalLink?: string;
  image?: string;
  badge?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  technologies = [],
  link,
  externalLink,
  image,
  badge,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-header">
          {badge && <span className="project-badge">{badge}</span>}
          {subtitle && <span className="project-subtitle">{subtitle}</span>}
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {technologies.length > 0 && (
          <div className="project-tech-tags">
            {technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-footer">
          {externalLink ? (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          ) : link ? (
            <Link to={link} className="project-link">
              Read more →
            </Link>
          ) : (
            <span className="project-note">Company Project (Acelucid)</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
