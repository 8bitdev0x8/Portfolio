import React from 'react';
import './MainSection.css';

const MainSection: React.FC = () => {
  // Define VR devices with images
  const vrDevices = [
    {
      name: "Oculus Quest 2",
      image: "https://image.cnbcfm.com/api/v1/image/106705009-1600267276692oculus-quest-2-4-png?v=1600267399&w=1858&h=1045&vtcrop=yhttps://media.cnn.com/api/v1/images/stellar/prod/oculus-quest-2-comparison-card.jpg?c=16x9&q=h_720,w_1280,c_fill", // Image URL for Oculus Quest 2
    },
    {
      name: "HTC Vive",
      image: "https://develop3d.com/wp-content/uploads/2019/11/HTC_Vive_business_edition_FW.png", // Image URL for HTC Vive
    },
    {
      name: "PlayStation VR",
      image: "https://gmedia.playstation.com/is/image/SIEPDC/PSVR2-thumbnail-01-en-22feb22?$facebook$", // Image URL for PlayStation VR
    },
    {
      name: "Samsung Odyssey",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Samsung_Galaxy_Odyssey.jpg/800px-Samsung_Galaxy_Odyssey.jpg", // Image URL for Samsung Odyssey
    },
    {
      name: "Pimax 8K",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Pimax_8K.png/800px-Pimax_8K.png", // Image URL for Pimax 8K
    },
  ];

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
