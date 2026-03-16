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
            <h2>ABOUT ME</h2>

            <p>
              I am a <strong>Full-Stack Web Developer</strong> with a background
              in international law and hands-on experience building modern web
              applications from concept to production.
            </p>

            <p>
              After transitioning into tech, I completed my training at
              <strong> DCI </strong> and focused on developing practical skills
              in
              <strong> JavaScript, React, Next.js, Node.js, NestJS,</strong> and
              <strong> PostgreSQL</strong>. Since then, I have worked on
              real-world projects including marketplace platforms, business
              websites, and e-commerce solutions.
            </p>

            <p>
              One of my strongest projects is a live service marketplace
              platform that I built from scratch, including{" "}
              <strong>frontend, backend, database architecture,</strong> and{" "}
              <strong>Stripe integration</strong>. I also created commercial
              websites for clients, combining clean design with practical
              functionality.
            </p>

            <p>
              I enjoy building{" "}
              <strong>user-friendly, responsive, and scalable</strong>
              applications that solve real problems and deliver a smooth user
              experience. I am especially motivated by projects where I can
              combine technical development, structure, and design thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
