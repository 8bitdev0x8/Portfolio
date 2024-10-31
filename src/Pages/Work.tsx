import React from 'react';
import './Work.css'; // Ensure the correct CSS file is imported

const Work: React.FC = () => {
    const projects = [
        {
            title: "Spatial Computing",
            description: "Unlock the potential of immersive experiences by integrating the physical and digital worlds.",
            imageUrl: "https://treeview.studio/blog/content/images/2023/08/Microsoft-Hololens-2-1.png",
        },
        {
            title: "Mixed Reality",
            description: "Experience the blend of real and virtual worlds, enhancing user interaction with technology.",
            imageUrl: "https://www.iotworlds.com/wp-content/uploads/2023/01/iotworlds-hololens-2.jpg",
        },
        {
            title: "Natural User Interface",
            description: "Engage with digital content using natural gestures, voice commands, and eye tracking.",
            imageUrl: "https://mixed-news.com/en/wp-content/uploads/2023/07/Quest-Pro-Multimodal-Hand-Tracking-scaled-1.jpg",
        },
        {
            title: "3D Mapping",
            description: "Create accurate 3D maps of your environment for precise interaction and navigation.",
            imageUrl: "https://msadowski.github.io/images/3d_mapping/map.png",
        },
        {
            title: "User-Centric Design",
            description: "Focus on creating experiences that prioritize the user’s needs and preferences.",
            imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Collaborate_RE4U2Uf?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1000&qlt=100&fit=constrain",
        },
        {
            title: "Collaborative Experiences",
            description: "Foster teamwork by allowing multiple users to share and interact in the same augmented space.",
            imageUrl: "https://www.totalreality.nl/wp-content/uploads/2020/09/mixed-reality-bouw.jpeg",
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
