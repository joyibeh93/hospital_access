// LocationLink.js
import React from 'react';
import { useNavigate } from 'react-router-dom';



const LocationLink = ({ setCoordinates }) => {
  const navigate = useNavigate();
  const getLocation = (event) => {
    event.preventDefault(); // Prevents link navigation behavior
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
          console.log("User's Location:", latitude, longitude); // Optional: Remove this in production
          navigate('/result')
        },
        (error) => {
          console.error("Error retrieving location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <a href="#" onClick={getLocation} className='location-link'>
      Please turn on your location to get personalized recommendations.
    </a>
  );
};

export default LocationLink;
