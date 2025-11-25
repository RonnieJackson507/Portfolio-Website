import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

const MAX_PROJECTS = 6;
const DEFAULT_VISIBLE = 3;
const MOBILE_BREAKPOINT = 768; // px

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Only ever use up to 6
  const featuredProjects = projects.slice(0, MAX_PROJECTS);

  // Decide how many to show
  const visibleProjects = showAll
    ? featuredProjects
    : featuredProjects.slice(0, DEFAULT_VISIBLE);

  // Automatically show all projects on desktop,
  // and use the 3/6 toggle only on mobile.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        // Desktop: always show all
        setShowAll(true);
      } else {
        // Mobile: start collapsed (3 visible)
        setShowAll(false);
      }
    };

    // Run once on mount
    handleResize();

    // Listen for window resizes
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <header className="projects-section__header">
        <h2>Projects</h2>
        <p>
          A collection of my work across AI, full-stack development, healthcare,
          computer vision, and interactive experiences.
        </p>
      </header>

      <div className="projects-section__grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Toggle button (used on mobile, hidden via CSS on desktop) */}
      {featuredProjects.length > DEFAULT_VISIBLE && (
        <div className="projects-section__more">
          <button
            type="button"
            className="projects-section__more-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show fewer projects" : "Show all projects"}
          </button>
        </div>
      )}
    </section>
  );
}
