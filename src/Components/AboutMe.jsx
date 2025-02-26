import React from "react";
import "./styles/AboutMe.css";
import backgroundImageWall from "../assets/images/geometry.jpg";
import myPhoto from "../assets/images/Portfolio_Image.jpg";

const AboutMe = () => {
  return (
    <section
      className="about-section"
      id="about"
      style={{ backgroundImage: `url(${backgroundImageWall})` }}
    >
      <div className="about-container">
        <div className="about-content">
          {/* Left Side - Image */}
          <div className="about-image">
            <img src={myPhoto} alt="My Photo" />
          </div>

          {/* Right Side - Text */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I began my career in <strong>international law</strong>, but over
              time, I discovered a growing passion for{" "}
              <strong>problem-solving and technology</strong>.
            </p>
            <p>
              Working extensively with{" "}
              <strong>legal documents and structured data</strong> made me
              realize how much I enjoy{" "}
              <strong>logical thinking and process automation</strong>—a
              realization that led me to transition into{" "}
              <strong>software development</strong>.
            </p>
            <p>
              I trained as a <strong>Full-Stack Web Developer</strong> at{" "}
              <strong>DCI</strong>, specializing in{" "}
              <strong>JavaScript, React, and software security</strong>. Since
              then, I have worked on projects including my{" "}
              <strong>portfolio website</strong> and{" "}
              <strong>e-commerce applications</strong>.
            </p>
            <p>
              I am passionate about crafting{" "}
              <strong>
                user-friendly, responsive, and dynamic applications
              </strong>{" "}
              that provide seamless experiences. I look forward to tackling new
              challenges and creating{" "}
              <strong>intuitive and visually striking</strong> digital
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
