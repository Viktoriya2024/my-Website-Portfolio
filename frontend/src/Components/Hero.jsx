import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/images/workPlace.avif";
import "./styles/Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Viktoriya...";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1)); // Add characters without cursor
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setText(fullText); // Final text without cursor
      }
    };

    typeWriter(); // Start typing effect
  }, []);
  return (
    <section className="hero-section" id="home">
      {/* Blue Line at the Top */}
      <div className="hero-content">
        <h1
          id="typing-text"
          style={{ fontFamily: "'Atkinson Hyperlegible Mono', monospace" }}
        >
          {text}
          <span className="cursor">|</span>{" "}
        </h1>
        <p className="description atkinson-hyperlegible-mono">
          <span className="line" style={{ animationDelay: "2.5s" }}>
            Full-Stack Web Developer based in Düsseldorf, Germany.
          </span>
          <span className="line" style={{ animationDelay: "3s" }}>
            I build modern, scalable web applications using Next.js, React,
            Node.js, NestJS, and PostgreSQL.
          </span>
          <span className="line" style={{ animationDelay: "4s" }}>
            From e-commerce platforms to full marketplace systems,
          </span>
          <span className="line" style={{ animationDelay: "5s" }}>
            I enjoy turning ideas into clean, responsive, and user-friendly
            digital products.
          </span>
        </p>
      </div>

      {/* Background Image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/*  <svg className="bottom-wave" viewBox="0 0 1440 320">
        <path fill="#002147" d="M0,192Q360,320 720,192T1440,192V320H0Z"></path>
      </svg> */}
    </section>
  );
};

export default Hero;
