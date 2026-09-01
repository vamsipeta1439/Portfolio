import React from 'react';

function Experience() {
  const experienceData = [
    {id: 2,
     title: 'Software Engineer',
     company: 'ConsuleventInc',
     period: 'June 2025 - Present',
     description: 'Currently Working on the internal project using Wordpress and JavaScript.Looking forward to work on the Client Project with any technologies like Mern stack or Uipath.' 
    },
    {
      id: 1,
      title: 'Trainee Student',
      company: 'CCBP 4.0 Intensive Program',
      period: 'Sep 2022 - Apr 2023',
      description: 'Learnt the fundamentals of web development and software engineering. Completed projects in MERN stack development.Also created some project on html and css,reactjs and nodejs'
    }
  ];
  
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experienceData.map(experience => (
            <div className="timeline-item" key={experience.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p className="duration">{experience.period}</p>
                <p className="description">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;