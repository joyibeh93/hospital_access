import React from "react";
import { Link } from "react-router-dom";
import hospitalImage from "../assets/hospitalImage.png";


import "../styles/HospitalCards.css";

const HospitalCards = ({ hospital }) => {
  if (!hospital) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hospital-card">
      <div className="image-container">
        <img
          src={hospitalImage}
          alt={hospital.name}
          className="hospital-image"
        />
      </div>
      <div className="hospital-details">
        <a className="hospital-name">{hospital.name}</a>
        <Link to={`/hospital/${hospital.name}`} className="hospital-address">
          {hospital.address}
        </Link>

        <p className="hospital-phone">Phone: {hospital.phone}</p>
        <div className="hospital-meta">
          <span>Distance: {hospital.distance}</span>
          <span>Time: {hospital.time}</span>
        </div>
        <div className="hospital-rating">
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
    </div>
  );
};

export default HospitalCards;
