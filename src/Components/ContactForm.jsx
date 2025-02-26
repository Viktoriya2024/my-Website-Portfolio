import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("http://127.0.0.1:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      setStatus("Message Sent Successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. ❌");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Let's work together</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
      <div className="social-links">
        <a
          href="https://github.com/Viktoriya2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <a href="mailto:viktoriabron@gmail.com">
          <FaEnvelope className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/viktoriya-dubynchuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
