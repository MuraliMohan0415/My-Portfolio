import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faTrophy, faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "June 2023",
      description: "Advanced course focusing on data structures implementation and algorithms in Python.",
      category: "Programming",
      icon: faCertificate,
      certLink: "https://github.com/MuraliMohan0415/MyResources/raw/master/certificates/Python%20Data%20Structures%20certificate.pdf"
    },
    {
      id: 2,
      title: "Datastructures using Java",
      issuer: "Infosys Springboard",
      date: "june 2025",
      description: "Course completion certificate for mastering data structures using Java.",
      category: "Programming",
      icon: faCertificate,
      certLink: "https://github.com/MuraliMohan0415/MyResources/raw/master/certificates/Data%20Structures%20and%20Algorithms%20using%20Java.pdf"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Certificate of Achievement on Java Foundation Certification",
      description: "Secured 91% in the Java Foundation Certification exam by Infosys Springboard.",
      date: "June 2025",
      category: "Certification",
      icon: faTrophy,
      certLink: "https://github.com/MuraliMohan0415/MyResources/raw/master/certificates/Java%20Foundation%20Certification%20of%20Achievement.pdf"
    },
    {
      id: 2,
      title: "Second Position in Web Development Contest",
      description: "Secured second position in a time-bound web development contest by designing and deploying a functional website within 2 hours.",
      date: "Feb 2024",
      category: "Competition",
      icon: faTrophy,
      certLink: "https://github.com/MuraliMohan0415/MyResources/raw/master/certificates/Webthon%20certificate%20.pdf"
    }
  ];

  return (
    <div className="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h1 className="certifications-title">Certifications & Achievements</h1>
          <p className="certifications-subtitle">
            Professional certifications and notable achievements that showcase my expertise and dedication to continuous learning
          </p>
        </div>

        <div className="certifications-content">
          <div className="certifications-section">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCertificate} className="section-icon" />
              Professional Certifications
            </h2>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="certification-header">
                    <div className="certification-icon">
                      <FontAwesomeIcon icon={cert.icon} />
                    </div>
                    <div className="certification-meta">
                      <span className="certification-category">{cert.category}</span>
                      <div className="certification-date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-description">{cert.description}</p>
                  
                  <div className="certification-actions">
                    <a
                      href={cert.certLink}
                      className="view-cert-btn"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faTrophy} className="section-icon" />
              Notable Achievements
            </h2>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-card">
                  <div className="achievement-header">
                    <div className="achievement-icon">
                      <FontAwesomeIcon icon={achievement.icon} />
                    </div>
                    <div className="achievement-meta">
                      <span className="achievement-category">{achievement.category}</span>
                      <div className="achievement-date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="certification-actions">
                    <a
                      href={achievement.certLink}
                      className="view-cert-btn"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 