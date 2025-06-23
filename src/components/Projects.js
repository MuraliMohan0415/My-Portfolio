import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'WorkXpert – AI-Powered Employee Productivity Analytics',
      description: 'Designed a smart web application that empowers organizations to analyze employee performance and enhance productivity using AI. Introduced role-specific dashboards with interactive visuals and predictive models to deliver tailored productivity insights.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Data Analytics'],
      image: '/images/project1.jpg',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Expiry Pro – Smart Expiry Date Management System',
      description: 'Engineered a centralized expiry management system for sectors like food, pharmaceuticals, and retail to reduce waste and enhance safety. Deployed real-time alerts, product lifecycle tracking, and user-specific modules for seamless coordination across the supply chain.',
      category: 'web',
      technologies: ['MERN Stack', 'Real-time Alerts', 'Supply Chain', 'IoT'],
      image: '/images/project2.jpg',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Future Tech Forge – Collaborative Project & Idea Management',
      description: 'Created a student-centric digital hub enabling B.Tech learners to share project ideas, register innovations, and collaborate securely. Implemented features like idea originality verification, a searchable project gallery, and peer reviews to support academic innovation.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Collaboration Tools', 'Peer Review'],
      image: '/images/project3.jpg',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Explore my latest work and creative solutions that showcase my skills and passion for development
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="project-placeholder">
                <span>{project.title}</span>
              </div>
              
              <div className="project-content">
                <span className="project-category">
                  {categories.find(cat => cat.id === project.category)?.name}
                </span>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link primary">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link secondary">
                    <FontAwesomeIcon icon={faGithub} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 