import React, { useEffect, useRef } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';
import ArchitectureFlow from './ArchitectureFlow';

function CaseStudyModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;
  const { caseStudy } = project;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close case study"
          ref={closeButtonRef}
        >
          <FiX />
        </button>

        <span className="mono modal-tag">{project.tag}</span>
        <h2 id="case-study-title">{project.title}</h2>
        <p className="modal-category">{project.category}</p>

        <div className="modal-section">
          <h3>Problem</h3>
          <p>{caseStudy.problem}</p>
        </div>

        <div className="modal-section">
          <h3>Solution</h3>
          <p>{caseStudy.solution}</p>
        </div>

        {project.architecture.length > 0 && (
          <div className="modal-section">
            <h3>Architecture</h3>
            <ArchitectureFlow steps={project.architecture} />
          </div>
        )}

        <div className="modal-section">
          <h3>Technologies</h3>
          <div className="modal-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h3>Engineering Challenges</h3>
          <p>{caseStudy.challenges}</p>
        </div>

        <div className="modal-section">
          <h3>Outcome</h3>
          <p>{caseStudy.outcome}</p>
          {project.results.length > 0 && (
            <div className="modal-results">
              {project.results.map((result) => (
                <div className="modal-result" key={result.label}>
                  <span className="modal-result-value">{result.value}</span>
                  <span className="modal-result-label">{result.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary modal-live-link"
          >
            Live Demo <FiExternalLink aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

export default CaseStudyModal;
