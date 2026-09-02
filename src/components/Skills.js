import React from 'react';
import skills from '../data/skills';
import useReveal from '../hooks/useReveal';

function Skills() {
  const revealRef = useReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">TOOLKIT</span>
          <h2 className="section-heading">Engineering Toolkit</h2>
          <p className="section-intro">
            Technologies I use to build AI-powered automation, full-stack applications and enterprise integrations.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skills-group" key={group.category}>
              <h3 className="skills-group-title">{group.category}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
