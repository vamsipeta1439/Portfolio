import React from 'react';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

function ProjectCard({ project, onOpenCaseStudy, featured }) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-top">
        <span className="mono project-tag">{project.tag}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      {project.results.length > 0 && (
        <div className="project-results">
          {project.results.map((result) => (
            <div className="project-result" key={result.label}>
              <span className="project-result-value">{result.value}</span>
              <span className="project-result-label">{result.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        <button type="button" className="project-link" onClick={() => onOpenCaseStudy(project)}>
          View Case Study <FiArrowRight aria-hidden="true" />
        </button>

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
            Live Demo <FiExternalLink aria-hidden="true" />
          </a>
        )}

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
