import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Viktoriya Dubynchuk &copy; {new Date().getFullYear()}</p>
          <p>
            Email:{" "}
            <a href="mailto:viktoriabron@gmail.com">viktoriabron@gmail.com</a>
          </p>
          <p>Phone: 015140416749</p>
          <p>Location: Düsseldorf, Germany</p>
        </div>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/viktoriya-dubynchuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Viktoriya2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
