export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <header className="project-card__header">
        <h3>{project.title}</h3>
        {project.timeframe && (
          <span className="project-card__timeframe">{project.timeframe}</span>
        )}
      </header>

      {project.role && (
        <p className="project-card__role">{project.role}</p>
      )}

      <p className="project-card__description">{project.shortDescription}</p>

      {project.tech && project.tech.length > 0 && (
        <ul className="project-card__tech-list">
          {project.tech.map((t) => (
            <li key={t} className="project-card__tech-pill">
              {t}
            </li>
          ))}
        </ul>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-card__highlights">
          {project.highlights.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
      )}

      <footer className="project-card__footer">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
          >
            View Code
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--primary"
          >
            Live Demo
          </a>
        )}
      </footer>
    </article>
  );
}
