import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from './Data';

export default function Projects() {
  return (
    <section className="project section" id="projects">
      <div className="project_1">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <span className="section-line" />
          <p className="section-subtitle">
            Real-world applications I&apos;ve contributed to as a Full Stack Developer.
          </p>
        </div>

        <div className="all_project">
          {projects.map((project) => (
            <article className="project_artic" key={project.id}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="project_data">
                <span className="project-role">{project.role}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-tech">{project.tech}</p>

                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-view"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github"
                      aria-label="GitHub repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
