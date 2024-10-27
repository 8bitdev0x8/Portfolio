// Contact.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can reach me at email@example.com.</p>
       { <div className="actions">
          
          <button className="contact-button">
            Contact Me <span className="dot">•</span>
          </button>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div> }
    </div>

    
  );
};

export default Contact;
