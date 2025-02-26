import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../Logo"; // Import Logo component
import BurgerMenu from "../BurgerMenu"; // Import BurgerMenu component
import MenuItems from "../MenuItems"; // Import MenuItems component

const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar shadow-lg bg-dark navbar-dark py-3"
    >
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <MenuItems /> {/* MenuItems component */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
