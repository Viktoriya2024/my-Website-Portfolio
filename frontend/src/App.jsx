import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Navbar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Skills />
      <Footer />
    </div>
  );
}
