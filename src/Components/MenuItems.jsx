import React from "react";
import { Nav } from "react-bootstrap";

const MenuItems = () => {
  return (
    <Nav className="ml-auto atkinson-hyperlegible-mono">
      <a href="#home" className="nav-link">
        Home
      </a>
      <a href="#about" className="nav-link">
        About me
      </a>
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
      <a href="#skills" className="nav-link">
        My skills
      </a>
    </Nav>
  );
};

export default MenuItems;
