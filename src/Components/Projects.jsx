import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/Projects.css";

// Import images
import design1 from "../assets/images/design1.png";
import design2 from "../assets/images/design2.png";
import tattoo1 from "../assets/images/tatoo1.png";
import tattoo2 from "../assets/images/tattoo2.png";
import tattoo3 from "../assets/images/tatto3.png";
import tattoo4 from "../assets/images/tatto4.png";
import tattoo5 from "../assets/images/tatto5.png";
import tattoo6 from "../assets/images/tatto6.png";
import ferien1 from "../assets/images/Ferien1.png";
import ferien2 from "../assets/images/Ferein2.png";
import fuji1 from "../assets/images/fuji1.png";
import fuji2 from "../assets/images/fuji2.png";
import fuji3 from "../assets/images/fuji3.png";
import fuji4 from "../assets/images/fuji4.png";

const projects = [
  {
    title: "Design Studio (E-Commerce)",
    images: [design1, design2],
    description: "A modern e-commerce platform for a design studio.",
    demoLink: "https://viktoriya2024.github.io/Design-shop/",
  },
  {
    title: "Tattoo Platform",
    images: [tattoo1, tattoo2, tattoo3, tattoo4, tattoo5, tattoo6],
    description: "A platform connecting tattoo artists with clients.",
    demoLink: "https://tattify-1.onrender.com/",
    githubLink: "https://github.com/WebDevFinalProject/tattify",
  },
  {
    title: "Ukrainian Ferien (WordPress)",
    images: [ferien1, ferien2],
    description: "A  website built with WordPress.",
    demoLink: "https://www.de-perspektive.de/",
  },
  {
    title: "Fuji Force (Shopify E-Commerce)",
    images: [fuji1, fuji2],
    description: "A Shopify-based online store for Fuji Force.",
    demoLink: "https://scgwi1-pk.myshopify.com/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              slidesPerView={1}
              className="project-slider"
            >
              {project.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={image}
                    alt={`${project.title} ${i + 1}`}
                    className="project-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  className="btn btn-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎭 See It in Action
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
