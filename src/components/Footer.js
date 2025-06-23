import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigateToSection = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      // If already on the page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Murali Mohan Darapureddy</h3>
            <p className="footer-description">
              A skilled software developer with strengths in programming, software development, and problem-solving, 
              aiming to contribute to organizational success.
            </p>
            <div className="footer-social">
              <a 
                href="https://github.com/MuraliMohan0415" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://www.linkedin.com/in/murali-mohan-647536314/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateToSection('/')} className="footer-link-btn">Home</button></li>
              <li><button onClick={() => navigateToSection('/about')} className="footer-link-btn">About</button></li>
              <li><button onClick={() => navigateToSection('/projects')} className="footer-link-btn">Projects</button></li>
              <li><button onClick={() => navigateToSection('/skills')} className="footer-link-btn">Skills</button></li>
              <li><button onClick={() => navigateToSection('/certifications')} className="footer-link-btn">Certifications</button></li>
              <li><button onClick={() => navigateToSection('/contact')} className="footer-link-btn">Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:darapureddymuralimohan@gmail.com?subject=Portfolio Inquiry">darapureddymuralimohan@gmail.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href="tel:+919392748107">+91 9392748107</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Skills & Expertise</h4>
            <div className="footer-skills">
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">MERN Stack</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Murali Mohan Darapureddy. All rights reserved.
            </p>
            <p className="footer-note">
              Built with React & ❤️
            </p>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </footer>
  );
};

export default Footer; 