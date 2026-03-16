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
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>SCSS</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>NestJS</li>
              <li>Express.js</li>
              <li>REST API Development</li>
              <li>JWT Authentication</li>
              <li>Stripe Payment Integration</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Database Design</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>CI/CD</li>
              <li>Docker</li>
              <li>WordPress</li>
              <li>Shopify</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Development Practices</h3>
            <ul>
              <li>Component-Based Architecture</li>
              <li>API Integration</li>
              <li>Responsive & Mobile-First Development</li>
              <li>Agile / Scrum</li>
              <li>Figma (UI/UX basics)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
