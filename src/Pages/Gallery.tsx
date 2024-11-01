import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file for styling
import Aesthetic_Shot from '../Images/Aesthetic_Shot.jpg';
import Passion_in_life from '../Images/Passion_in_life.jpg';
import Business_headshot from '../Images/Jojy_business_type_headshot.jpg';
const images = [
  {
    src: Aesthetic_Shot,
    alt: 'Aesthetic Shot',
    description: 'In this landscape photo, I focused on capturing the peaceful yet vibrant beauty of nature, enhanced by a radiant rainbow stretching across a sky filled with soft, scattered clouds. The shot was framed with a 28mm focal length to incorporate a wide view, bringing the expansive green fields into the foreground while showcasing the rainbow’s full arc above. The fields are lush and vivid, bordered naturally by dense, verdant trees and bushes that add depth and a sense of serenity to the composition. I selected an aperture of f/1.8 to emphasize the lushness of the foreground while creating a gentle fall-off in focus toward the distant trees and sky, achieving a subtle depth effect. The fast shutter speed of 1/3436 seconds froze the scene crisply, preserving every detail without motion blur from the breezy landscape. At ISO 25, the image remained ultra-clear and free of noise, allowing the colors—especially the vibrant spectrum of the rainbow—to stand out against the partially clouded sky with remarkable clarity and richness. This scene harmonizes natural light with the high-resolution settings, capturing the essence of the rainbow and landscape in sharp, vivid detail, highlighting the serene beauty and fleeting magic of a rainbow after the rain.',
  },
  {
    src: Passion_in_life,
    alt: 'Passion in life',
    description: 'In this sports scene, I focused on capturing the intensity of an evening game played under dramatic skies and artificial lighting. The field, with its crisp white and yellow markings, comes to life in the glow of bright flood lights that illuminate the action. The image was taken during dusk, with thick, dark clouds looming overhead, suggesting rain might have recently passed or could begin at any moment. This moody sky contrasts sharply with the well-lit field, creating a striking interplay between light and shadow. Using a focal length of 28mm, I included the full width of the field, capturing not only the players in action but also the goalposts and surrounding lines to add context. The wide aperture of f/1.8 allowed the main elements—the players, lines, and posts—to stand out crisply against the softer, darker sky. This choice also softened any distracting background elements, making the players’ movements and expressions the focus of the image. With a slower shutter speed of 1/15 seconds, I balanced light without overexposing, making the field glow against the stormy sky. ISO was kept low at 40 to reduce noise and enhance clarity, ensuring every detail is defined while preserving the natural drama of the scene. This image captures the dedication and resilience of players under challenging weather conditions, with the floodlights lending a cinematic quality that adds to the intensity of an outdoor sports event on the edge of nightfall.',
  },
  {
    src: Business_headshot,
    alt: 'Portrait',
    description: 'In this professional portrait, I focused on capturing a crisp, clean look by positioning myself against a subtle background, with just enough blur to maintain a soft, refined atmosphere. The shot was composed with a 48mm focal length, allowing for a flattering perspective and emphasizing facial features while still including a hint of the surroundings to add context. The natural light was carefully balanced, casting an even, soft illumination that highlights the face and attire without creating harsh shadows, enhancing the professional tone of the image. I chose an aperture of f/1.8 to make the subject stand out sharply against the softly blurred background, subtly separating the person from the background wall and lending the portrait a modern, polished look. The shutter speed of 1/121 seconds captured every detail with precision while preventing any motion blur, and keeping the ISO at 100 allowed for a noise-free, high-quality image with superb clarity and richness. This portrait uses natural lighting and a slight background blur to create an image that feels approachable yet professional, ideal for a business setting. The combination of technical settings and natural light captures a sharp, engaging portrait that communicates both professionalism and warmth.',
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
    <div className="roboto-regular">
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
    </div>
  );
};

export default Gallery;
