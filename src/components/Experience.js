import React from 'react';

function Experience() {
  const experienceData = [
    {id: 4,
     title: 'Junior Software Engineer',
     company: 'ConsuleventInc',
     period: 'June 2025 - Present',
     description: 'Currently Working on the internal project using Wordpress and JavaScript.Looking forward to work on the Client Project with any technologies like Mern stack or Uipath.' 
    },
    {
      id: 3,
      title: 'Junior Software Engineer',
      company: 'Altumind Global Private Limited',
      period: 'Nov 2024 - May 2025',
      description: 'Completed the development of an internal project using Wordpress and JavaScript.Worked on the Client Project Form Energy using UiPath Excel activities and UiPath Apps.'
    },
    {
      id: 2,
      title: 'Trainee Software Engineer',
      company: 'Altumind Global Private Limited',
      period: 'Apr 2024 - Nov 2024',
      description: 'Trained in the RPA UiPath with VB.Net and UiPath Apps.Worked on the excel extraction and data manipulation using UiPath and VB.Net.'
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