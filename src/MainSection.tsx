import React from 'react';
import './MainSection.css';

const MainSection: React.FC = () => {
  return (
    <section className="main-section">
      <div className="intro roboto-thin-italic">
        <h1>Hi, I am Jojy Saju Joseph</h1>
        <p>
          An Ireland-based AR/VR developer passionate about building next generation
          interactive applications.
        </p>

        <div className="profile-image">
          <img
            src="./JOJY1.jpg" // Ensure the path is correct
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
