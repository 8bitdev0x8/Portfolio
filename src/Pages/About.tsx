// About.tsx
import React from "react";
import "./About.css"; 

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="roboto-regular">
      <h1>About Me</h1>

      <br></br>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>
              APJ Abdul Kalam Technological University, Saintgits College of
              Engineering
            </strong>
            <em>Bachelor Of Technology In Computer Science & Engineering</em>
          </li>
          <br></br>
          <li>
            <strong>
              International Indian School Dammam, Kingdom of Saudi Arabia
            </strong>
            <em>Higher Secondary Education</em>
          </li>

          <br></br>
          <li>
            <strong>
              International Indian School Dammam, Kingdom of Saudi Arabia
            </strong>
            <em>Secondary School Education</em>
          </li>
        </ul>
      </section>

      <br></br>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong> C#, C++
          </li>
          <li>
            <strong>Tools:</strong> Unity3D, Unreal Engine, Visual Studio, Git,
            Socket.IO, AR Foundation, Android Studio, Mixed Reality Toolkit
          </li>
          <li>
            <strong>Virtual Reality Devices:</strong> Oculus Quest 2, Meta Quest
            Pro, HTC Vive Focus, HTC Vive Pro, Apple Vision Pro
          </li>
          <li>
            <strong>Mixed Reality Devices:</strong> Microsoft Hololens 2, Magic
            Leap, Nreal [Xreal] Light
          </li>
        </ul>
      </section>

      <br></br>

      <section>
        <h2>Awards & Acknowledgements</h2>
        <ul>
          <li>
            Build a Modern Computer from First Principles: From Nand to Tetris
            Coursera. [2021]
          </li>
          <li>
            Won First prize in CODEAGON 1.0 Conducted by IEEE Saintgits Branch
            [2019]
          </li>
          <li>
            Completed Internship Program Conducted at KELTRON in Machine
            Automation and Analysis [2018]
          </li>
          <li>
            Best Project Award in National Level Technical Project Exhibition &
            Competition [2017]
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default About;
