import React from 'react';

function About() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'RESTful APIs','Wordpress','Tailwind CSS','UiPath','Python','SQlite' ];
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="portfolio img1.png" alt="About Me" />
          </div>
          <div className="about-text">
            <h3>Hello, I'm Vamshi</h3>
            <p>
              I am a passionate Junior Software Engineer with a strong foundation in web development and a keen 
              interest in building user-friendly applications. With a problem-solving mindset and attention to detail, 
              I strive to create clean, efficient, and maintainable code.
            </p>
            <p>
              My journey in software development began during my college years where I discovered my passion for 
              turning ideas into functional applications. Since then, I've been continuously learning and improving 
              my skills through various projects and professional experiences.
            </p>
            <div className="skills">
              <h4>Technical Skills</h4>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;