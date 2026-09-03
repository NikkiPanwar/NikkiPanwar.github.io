import "./SkillCard.css";

export interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export function SkillCard({ title, description, skills }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <p className="skill-desc">{description}</p>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
