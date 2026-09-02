import React from 'react';
import education from '../data/education';
import useReveal from '../hooks/useReveal';

function Education() {
  const revealRef = useReveal();

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">EDUCATION</span>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <div className="education-item" key={item.id}>
              <div className="education-year mono">{item.year}</div>
              <div className="education-details">
                <h3>{item.institution}</h3>
                <p>{item.course}</p>
              </div>
              <div className="education-grade">{item.grade}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
