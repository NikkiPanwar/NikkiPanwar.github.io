import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
import "./Projects.css";

interface ProjectItem {
  id: string;
  title: string;
  badge: "Work Project" | "College Project" | "Personal Project";
  subtitle: string;
  description: string;
  technologies: string[];
  category: "all" | "work" | "personal";
  externalLink?: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "edtech-platform",
    title: "Educational Learning Platform",
    badge: "Work Project",
    subtitle: "Company Project",
    description:
      "A web-based learning and assessment platform with classroom modules, interactive quizzes, and student dashboards. I developed the Angular frontend interfaces and connected them with backend FastAPI endpoints.",
    technologies: ["Angular", "TypeScript", "Python/FastAPI", "AWS S3", "CloudFront"],
    category: "work",
  },
  {
    id: "travel-platform",
    title: "Travel Management Platform",
    badge: "Work Project",
    subtitle: "Acelucid Technologies",
    description:
      "A web platform for travel companies to manage itineraries, customer bookings, packages, and tour guides. Built the booking workflows and admin management screens.",
    technologies: ["Angular", "PHP", "Laravell", "MySQL", "RxJS"],
    category: "work",
  },
  {
    id: "rbac-auth",
    title: "Role-Based Auth & Access Control",
    badge: "Work Project",
    subtitle: "Company Project",
    description:
      "An authentication and authorization setup with login, JWT token refresh, and Angular route guards that restrict access based on user roles (Admin, Instructor, Student).",
    technologies: ["Angular", "TypeScript", "JWT", "REST APIs"],
    category: "work",
  },
  {
    id: "travel-buddies",
    title: "Travel Buddies",
    badge: "College Project",
    subtitle: "BCA",
    description:
      "A full-stack travel web application created as my college capstone project. Helps users browse destinations, explore trip packages, and plan itineraries.",
    technologies: ["Angular", "Node.js", "Express.js", "MySQL"],
    category: "personal",
    externalLink: "https://github.com/NikkiPanwar/Travel-buddies-main",
  },
  {
    id: "portfolio-website",
    title: "Personal Developer Portfolio",
    badge: "Personal Project",
    subtitle: "This Website",
    description:
      "A clean, responsive portfolio website built with React and TypeScript to showcase my projects, work experience, and skills.",
    technologies: ["React", "TypeScript", "Vite", "CSS3"],
    category: "personal",
    externalLink: "https://github.com/NikkiPanwar/portfoli-np",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "personal">("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeTab);

  return (
    <div className="projects-page">
      <section className="projects-section">
        <div className="container projects-container">
          <div className="page-header">
            <span className="section-label">Portfolio</span>
            <h1 className="page-title">Projects</h1>
            <p className="page-subtitle">
              A selection of web applications and modules I've built at work and for college projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`filter-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All ({projectsList.length})
            </button>
            <button
              className={`filter-btn ${activeTab === "work" ? "active" : ""}`}
              onClick={() => setActiveTab("work")}
            >
              Work Projects (3)
            </button>
            <button
              className={`filter-btn ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
            >
              Personal & College (2)
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                badge={project.badge}
                subtitle={project.subtitle}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                externalLink={project.externalLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </div>
  );
}

export default Projects;