import React from 'react';
import './MainSection.css';

const MainSection: React.FC = () => {

  return (
    <section className="main-section">
      <div className="intro roboto-thin-italic">
        <h1>"Building Immersive Worlds, One Experience at a Time"</h1>
        <h3>AR/VR Developer | Ireland-Based | Next-Generation Interactive Applications</h3>

        <div className="profile-image">
          <img
            src="./Jojy_MagicLeap.jpeg" // Ensure the path is correct
            alt="Profile"
          />
        </div>
        
        <p>
        "Hello! I'm JOJY SAJU JOSEPH, an AR/VR developer based in Ireland with a passion for crafting innovative, immersive experiences that connect users with cutting-edge technology. With a focus on creating visually rich, interactive applications, I bring stories to life, enhance user engagement, and push the boundaries of digital experiences. Whether it's augmented or virtual reality, I aim to transform ideas into captivating digital realities."
        </p>

        
      </div>

      
    </section>
  );
};

export default MainSection;
