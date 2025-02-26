import React from "react";
import "./styles/Skills.css";
import skillsImage from "../assets/images/skills.webp";

const Skills = () => {
  return (
    <section
      className="skills-section"
      id="skills"
      style={{
        backgroundImage: `url(${skillsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3>Web Technologies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>SCSS</li>
              <li>TypeScript (currently learning)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Bootstrap</li>
              <li>Vue.js (basic knowledge, actively learning)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>CI/CD</li>
              <li>MongoDB</li>
              <li>REST API</li>
              <li>JWT Authentication</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Design & Other</h3>
            <ul>
              <li>Figma (basic UI/UX)</li>
              <li>DOM Manipulation</li>
              <li>React Router & Context API</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
