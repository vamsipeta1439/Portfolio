import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import useReveal from '../hooks/useReveal';

function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const revealRef = useReveal();

  return (
    <section id="work" className="selected-work">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">SELECTED WORK</span>
          <h2 className="section-heading">Selected Work</h2>
          <p className="section-intro">
            Engineering case studies from production automation, AI-assisted data processing and full-stack
            application work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={setActiveProject}
              featured={index === 0}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

export default SelectedWork;
