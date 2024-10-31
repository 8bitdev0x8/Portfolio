import React from 'react';
import './Work.css'; // Make sure to create this CSS file.

const Work: React.FC = () => {
  // Sample data for the projects/technologies
  const projects = [
    {
      title: "Spatial Computing",
      description: "Unlock the potential of immersive experiences by integrating the physical and digital worlds.",
      imageUrl: "https://via.placeholder.com/400?text=Spatial+Computing", // Placeholder image
    },
    {
      title: "Mixed Reality",
      description: "Experience the blend of real and virtual worlds, enhancing user interaction with technology.",
      imageUrl: "https://via.placeholder.com/400?text=Mixed+Reality", // Placeholder image
    },
    {
      title: "Natural User Interface",
      description: "Engage with digital content using natural gestures, voice commands, and eye tracking.",
      imageUrl: "https://via.placeholder.com/400?text=Natural+User+Interface", // Placeholder image
    },
    {
      title: "3D Mapping",
      description: "Create accurate 3D maps of your environment for precise interaction and navigation.",
      imageUrl: "https://via.placeholder.com/400?text=3D+Mapping", // Placeholder image
    },
    {
      title: "User-Centric Design",
      description: "Focus on creating experiences that prioritize the user’s needs and preferences.",
      imageUrl: "https://via.placeholder.com/400?text=User-Centric+Design", // Placeholder image
    },
    {
      title: "Collaborative Experiences",
      description: "Foster teamwork by allowing multiple users to share and interact in the same augmented space.",
      imageUrl: "https://via.placeholder.com/400?text=Collaborative+Experiences", // Placeholder image
    },
  ];

  return (
    <div className="work-page">
      <h1>My Work</h1>
      <p>Explore the technologies and projects I've worked on:</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
