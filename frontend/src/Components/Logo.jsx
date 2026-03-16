import React from "react";
import { Navbar } from "react-bootstrap";
import LogoNew from "../assets/images/BlueLogo.png"; // Adjust path accordingly

const Logo = () => {
  return (
    <Navbar.Brand href="#home">
      <img
        src={LogoNew}
        alt="Logo"
        className="navbar-logo"
        style={{ width: "80px", height: "80px" }}
      />
    </Navbar.Brand>
  );
};

export default Logo;
