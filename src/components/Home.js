import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => ['Software Developer', 'MERN Stack Developer', 'Problem Solver'], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const shouldDelete = isDeleting;

      setText(current => {
        if (shouldDelete) {
          setTypingSpeed(prev => prev / 2);
          return current.substring(0, current.length - 1);
        }

        setTypingSpeed(150);
        return currentRole.substring(0, current.length + 1);
      });

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="highlight">Murali Mohan Darapureddy</span>
            </h1>
            <h2 className="home-subtitle">
              I'm a <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="home-description">
              A skilled software developer with strengths in programming, software development, and problem-solving, aiming to contribute to
              organizational success. Aspiring to achieve top positions where my expertise drives both personal and company growth.
            </p>
            
            <div className="home-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <a
                href="https://github.com/MuraliMohan0415/MyResources/raw/master/Resume/MY%20RESUME.pdf"
                className="btn btn-secondary"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/MuraliMohan0415" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/murali-mohan-647536314/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="home-image">
            <div className="profile-image-container">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Murali Mohan Darapureddy" 
                className="profile-image"
              />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Home; 