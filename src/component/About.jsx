import React from "react";
import Nurses from "../assets/unth-nurses.jpg"

import "../styles/about.css";

const AboutUs = () => {
  return (
    <div className="about-us" id='about-us'>
      <h2 className="about-h2">About Us</h2>
      <div className="about-container">
        <div className="about-content">
         We are dedicated to providing compassionate, high-quality healthcare services to within your community, driven by our values of compassion, excellence, integrity, innovation, and collaboration. We offer a wide range of services, including emergency care, surgical services, maternity care, and more. Embracing new technologies for better care.
        </div>
        <div className="about-side-card">
          <img src={Nurses} alt="img" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
