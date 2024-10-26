import React from "react";

import "../styles/about.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-h2">About Us</h2>
      <div className="about-container">
        <div className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut
          commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac,
          vestibulum eu nisl.
        </div>
        <div className="side-card">
          <div className="card">
            <div className="image-placeholder"></div>
            <p className="card-title">Borem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
