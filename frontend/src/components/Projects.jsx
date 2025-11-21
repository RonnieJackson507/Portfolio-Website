import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <header className="projects-section__header">
        <h2>Featured Projects</h2>
        <p>
          A collection of my work across AI, full-stack development, healthcare,
          computer vision, and interactive experiences.
        </p>
      </header>

      <div className="projects-section__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
