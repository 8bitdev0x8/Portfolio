import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file for styling

const images = [
  {
    src: 'https://treeview.studio/blog/content/images/2023/08/Microsoft-Hololens-2-1.png',
    alt: 'Microsoft Hololens 2',
    description: 'This image showcases the Microsoft Hololens 2, highlighting its sleek design and advanced technology. The Hololens 2 features a modern, lightweight construction that ensures comfort during extended use, making it ideal for professionals across various fields. Equipped with advanced holographic technology, the device allows users to immerse themselves in a mixed reality experience, blending the digital and physical worlds seamlessly. Its high-resolution display provides stunning visuals, with vibrant colors and remarkable clarity, perfect for applications in education, healthcare, architecture, and gaming. One of the standout features of the Hololens 2 is its hand tracking capabilities. Users can interact with holograms and control applications using natural hand gestures, eliminating the need for traditional input devices. This intuitive interaction enhances the overall user experience, making it accessible to a broader audience. Additionally, the headset incorporates eye-tracking technology, which enables users to navigate interfaces with just their gaze. This feature not only improves usability but also adds a layer of efficiency in tasks that require precision and focus.',
  },
  {
    src: 'https://www.iotworlds.com/wp-content/uploads/2023/01/iotworlds-hololens-2.jpg',
    alt: 'Hololens 2 in Use',
    description: 'The image depicts a user interacting with the Hololens 2, demonstrating its augmented reality capabilities in a work environment. This image showcases the Microsoft Hololens 2, highlighting its sleek design and advanced technology. The Hololens 2 features a modern, lightweight construction that ensures comfort during extended use, making it ideal for professionals across various fields. Equipped with advanced holographic technology, the device allows users to immerse themselves in a mixed reality experience, blending the digital and physical worlds seamlessly. Its high-resolution display provides stunning visuals, with vibrant colors and remarkable clarity, perfect for applications in education, healthcare, architecture, and gaming. One of the standout features of the Hololens 2 is its hand tracking capabilities. Users can interact with holograms and control applications using natural hand gestures, eliminating the need for traditional input devices. This intuitive interaction enhances the overall user experience, making it accessible to a broader audience. Additionally, the headset incorporates eye-tracking technology, which enables users to navigate interfaces with just their gaze. This feature not only improves usability but also adds a layer of efficiency in tasks that require precision and focus.',
  },
  {
    src: 'https://mixed-news.com/en/wp-content/uploads/2023/07/Quest-Pro-Multimodal-Hand-Tracking-scaled-1.jpg',
    alt: 'Quest Pro Hand Tracking',
    description: 'This image features the Quest Pro, showcasing its multimodal hand tracking technology in action. This image showcases the Microsoft Hololens 2, highlighting its sleek design and advanced technology. The Hololens 2 features a modern, lightweight construction that ensures comfort during extended use, making it ideal for professionals across various fields. Equipped with advanced holographic technology, the device allows users to immerse themselves in a mixed reality experience, blending the digital and physical worlds seamlessly. Its high-resolution display provides stunning visuals, with vibrant colors and remarkable clarity, perfect for applications in education, healthcare, architecture, and gaming. One of the standout features of the Hololens 2 is its hand tracking capabilities. Users can interact with holograms and control applications using natural hand gestures, eliminating the need for traditional input devices. This intuitive interaction enhances the overall user experience, making it accessible to a broader audience. Additionally, the headset incorporates eye-tracking technology, which enables users to navigate interfaces with just their gaze. This feature not only improves usability but also adds a layer of efficiency in tasks that require precision and focus.',
  },
  // Add more images as needed
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-display">
        <img className="gallery-image" src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="gallery-description">
          <h2>{images[currentIndex].alt}</h2>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
      <div className="gallery-controls">
        <button onClick={prevImage} className="gallery-button">Previous</button>
        <button onClick={nextImage} className="gallery-button">Next</button>
      </div>
    </div>
  );
};

export default Gallery;
