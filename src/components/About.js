import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              A skilled software developer with strengths in programming, software development, and problem-solving, aiming to contribute to
              organizational success. Aspiring to achieve top positions where my expertise drives both personal and company growth.
            </p>
            
            <div className="about-stats-bar">
              <div className="about-stat-block">
                <span className="about-stat-icon"><FontAwesomeIcon icon={faFolderOpen} /></span>
                <span className="about-stat-value">5</span>
                <span className="about-stat-text">Projects Completed</span>
              </div>
              <div className="about-stat-block">
                <span className="about-stat-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
                <span className="about-stat-value">8.86</span>
                <span className="about-stat-text">CGPA</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-image-container">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Murali Mohan Darapureddy" 
                className="profile-image"
              />
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-title">Educational Journey</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2022 - 2026</div>
                <h3 className="timeline-title">Bachelor of Technology - Computer Science & Engineering</h3>
                <div className="timeline-subtitle">Malla Reddy University, Hyderabad</div>
                <p className="timeline-description">
                  CGPA: 8.86. Specialized in Computer Science and Engineering with focus on software development, programming, 
                  and modern web technologies. Currently pursuing final year with strong foundation in Java, Python, JavaScript, 
                  and MERN stack development.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2022</div>
                <h3 className="timeline-title">Intermediate - MPC (Mathematics, Physics, Chemistry)</h3>
                <div className="timeline-subtitle">Narayana Junior College, Hyderabad</div>
                <p className="timeline-description">
                  GPA: 9.5. Completed intermediate education with Mathematics, Physics, and Chemistry as core subjects. 
                  Developed strong analytical and problem-solving skills through rigorous academic curriculum and practical experiments.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2019 - 2020</div>
                <h3 className="timeline-title">Secondary School Certificate (SSC)</h3>
                <div className="timeline-subtitle">Holy Angels School, Bhimavaram</div>
                <p className="timeline-description">
                  GPA: 8.8. Completed secondary education with excellent academic performance. Developed strong foundation in 
                  mathematics, science, and computer fundamentals. Participated in various academic and extracurricular activities.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-title">Work Experience</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Nov 2024 - Mar 2025</div>
                <h3 className="timeline-title">SEO Intern – Digital Connect</h3>
                <div className="timeline-subtitle">Internship Experience</div>
                <p className="timeline-description">
                  Worked on improving website visibility and search engine rankings through keyword research, off-page and on-page optimization, and content strategy.
                  Contributed to a 20% increase in organic traffic by optimizing keywords, meta tags, and blog content using SEO best practices.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 