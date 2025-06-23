import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill;
            setAnimatedSkills(prev => ({
              ...prev,
              [skillName]: true
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.skill-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      description: 'Proficient in multiple programming languages for web and software development.',
      icon: faCode,
      skills: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      description: 'Experienced with popular frameworks and libraries for building robust applications.',
      icon: faCode,
      skills: [
        { name: 'MERN Stack' },
        { name: 'Spring Boot' }
      ]
    },
    {
      id: 'database',
      title: 'Database Management',
      description: 'Experience with both SQL and NoSQL databases for data management.',
      icon: faDatabase,
      skills: [
        { name: 'MongoDB' },
        { name: 'MySQL' }
      ]
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      description: 'Proficient with modern development tools and platforms.',
      icon: faServer,
      skills: [
        { name: 'VS Code' },
        { name: 'Spring Boot' },
        { name: 'NetBeans' },
        { name: 'Git & GitHub' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & CRM Platforms',
      description: 'Familiar with cloud services and CRM platforms for scalable solutions.',
      icon: faServer,
      skills: [
        { name: 'AWS' },
        { name: 'Salesforce' }
      ]
    },
    {
      id: 'softskills',
      title: 'Soft Skills',
      description: 'Essential interpersonal and professional skills for team collaboration.',
      icon: faPalette,
      skills: [
        { name: 'Networking' },
        { name: 'Leadership' },
        { name: 'Self-Motivation' },
        { name: 'Stress Management' },
        { name: 'Goal Setting' }
      ]
    }
  ];

  const stats = [
    { number: '8.86', label: 'CGPA' },
    { number: '3+', label: 'Projects Completed' },
    { number: '20%', label: 'Traffic Increase (SEO)' },
    { number: '2nd', label: 'Web Dev Contest Position' }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">Skills & Expertise</h1>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills and professional expertise
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <p className="category-description">{category.description}</p>
              
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="skill-pill"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 