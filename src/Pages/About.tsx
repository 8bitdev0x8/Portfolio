import React from 'react';
import '../MainSection.css'; // Import the corresponding CSS file
import profileImage from '/JOJY.jpg'; // Adjust the path based on your directory structure

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-intro roboto-thin-italic">
        <h1>About Me</h1>
        <p>
          I am Jojy Saju Joseph, an Ireland-based AR/VR developer with a passion for
          creating next-generation interactive applications. I thrive on
          exploring new technologies and leveraging them to build immersive
          experiences.
        </p>
        <div className="profile-image">
          <img
            src={profileImage} // Using imported image
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
