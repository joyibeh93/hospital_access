// Hospital.jsx
import React from "react";
import { useLocation } from "react-router-dom";

import "../styles/HospitalCard.css";
const Hospital = () => {
  const location = useLocation();
  const hospital = location.state?.hospital;

  if (!hospital) {
    return <div>Hospital information not found</div>;
  }

  return (
    <div className="hospital-details-container">
      <div className="hospital-info">
        <h2 className="hospital-name">{hospital.name}</h2>
        <div className="rating">
          <span className="rating-number">{hospital.rating}</span>
          <div className="stars">
            {Array.from({ length: 5 }, (v, i) => (
              <span
                key={i}
                className={`star ${i < hospital.rating ? "star-filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <p className="address">{hospital.address}</p>
        <p className="phone">Phone: {hospital.phone}</p>

        <div className="services">
          <h3>Services:</h3>
          <p>
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum...
          </p>
        </div>

        <div className="actions">
          <a href="https://www.google.com/maps/@6.5139274,3.3288365,13z/data=!3m1!4b1!4m2!7m1!2e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-directions">
            View Directions
          </a>
          <button className="book-appointment">Book Appointment</button>
        </div>
      </div>

      <div className="hospital-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63424.980577974275!2d3.3288365!3d6.5139274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1730336649852!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }} // Corrected to use an object
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Hospital;
