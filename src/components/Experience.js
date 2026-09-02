import React from 'react';
import experience from '../data/experience';
import useReveal from '../hooks/useReveal';

function Experience() {
  const revealRef = useReveal();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">EXPERIENCE</span>
          <h2 className="section-heading">Experience</h2>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>{experience.title}</h3>
              <p className="experience-company">{experience.company}</p>
            </div>
            <div className="experience-meta">
              <span className="mono">{experience.period}</span>
              <span className="experience-location">{experience.location}</span>
            </div>
          </div>

          <div className="experience-groups">
            {experience.groups.map((group) => (
              <div className="experience-group" key={group.category}>
                <h4 className="experience-group-title">{group.category}</h4>
                <ul className="experience-items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
