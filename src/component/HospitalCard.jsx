import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Hospital = ({hospital}) => {
  // const location = useLocation();
  // const { hospitalName } = useParams(); // Extract hospitalName from the route parameters

  // // Get the hospital data from the state
  // const hospital = location.state?.hospitalN;

  // Handle the case where hospital data is missing

  console.log(hospital)
  if (!hospital) {
    return <div>Hospital information not found</div>;
  }

  return (
    <div className="card-container">
      <div className="content-section">
        <div className="hospital-header">
          <h2>{hospital.name}</h2>
          <div className="rating">
            <span className="rating-number">{hospital.rating}.0</span>
            <div className="stars">
              {Array.from({ length: 5 }, (v, i) => (
                <span
                  key={i}
                  className={`star ${i < hospital.rating ? 'star-filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="info-section">
          <a className="address">
            {hospital.address}
          </a>

          <div className="phone">
            <p>Phone: {hospital.phone}</p>
          </div>

          <div className="meta-info">
            <p>Distance: {hospital.distance}</p>
            <p>Time: {hospital.time}</p>
          </div>

          <div className="services">
            <h3>Additional Information:</h3>
            <div className="info-grid">
              <p>Distance from your location: {hospital.distance}</p>
              <p>Estimated travel time: {hospital.time}</p>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="view-directions">Get Directions</button>
          <button className="book-appointment">Book Appointment</button>
        </div>
      </div>

      <div className="map-section">
        <img
          src="path/to/hospital-image.png"
          alt={`${hospital.name} location`}
        />
      </div>
    </div>
  );
};

export default Hospital;


