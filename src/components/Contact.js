import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

const SERVICE_ID = 'service_nynq2ll';
const TEMPLATE_ID = 'template_imt1eqz';
const PUBLIC_KEY = 'U1WF0leTzqydHwqEg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      PUBLIC_KEY
    )
    .then(
      (result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      },
      (error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 4000);
      }
    );
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'darapureddymuralimohan@gmail.com',
      link: 'mailto:darapureddymuralimohan@gmail.com?subject=Portfolio Inquiry'
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91 9392748107',
      link: 'tel:+919392748107'
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      link: null
    }
  ];

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/MuraliMohan0415', color: '#333' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/murali-mohan-647536314/', color: '#0077b5' }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready to start a project or have a question? Let's connect and bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3 className="info-title">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                Let's Connect
              </h3>
              <p className="info-content">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                Contact Information
              </h3>
              <div>
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={info.icon} />
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">{info.label}</div>
                      <div className="contact-value">
                        {info.link ? (
                          <a href={info.link}>{info.value}</a>
                        ) : (
                          info.value
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                Follow Me
              </h3>
              <p className="info-content">
                Stay updated with my latest work and connect with me on social media platforms.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or question..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#d4edda',
                    color: '#155724',
                    border: '1px solid #c3e6cb',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: '500'
                  }}>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 