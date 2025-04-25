import React, { useState } from 'react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projectsData = [
    {
      id: 1,
      title: 'Nxt Watch',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      description: 'Developed a full-stack e-commerce website with React, Node.js, and MongoDB. Features include user authentication, product listings, cart functionality, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile App',
      image: '/api/placeholder/400/300',
      description: 'Created a responsive task management application with React Native. Users can create, update, and delete tasks, set priorities, and receive notifications.',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      description: 'Built a weather dashboard that displays current weather and forecast for any location. Integrated with OpenWeatherMap API for real-time data.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];
  
  const filters = ['All', 'Web Development', 'UiPath Apps'];
  
  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="project-filters">
          {filters.map((filter, index) => (
            <button 
              key={index} 
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;