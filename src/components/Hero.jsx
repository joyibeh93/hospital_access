// Hero.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FemaleDoctor from '../assets/FemaleDoctor.png';
import MaleDoctor from '../assets/MaleDoctor.png';
import LocationLink from './LocationLinks';
import Form from './Form.jsx';


import '../styles/hero.css';

const Hero = () => {
  const [coordinates, setCoordinates] = useState(null); // Store location coordinates
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    console.log('Submitted Data:', formData);
    navigate('/result');
  };


  return (
    <>
      <section className="hero-container">
        <div className="hero-text">
          <h1>Welcome to <br /> Healthcare Access.</h1>
          <p>
            Scared of the venue and directions. New or Familiar way.
            Discover personalized healthcare access points nearby.
            Know your way around through our guide.
          </p>
          <button onClick={() => document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' })} className="hero-button hero-button2">
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src={FemaleDoctor} alt="Doctor" className="hero-img" />
        </div>
      </section>

      <div className="hero-container" id="hero-form">
        <div className="hero-form">
          <LocationLink setCoordinates={setCoordinates} />
          <Form handleFormSubmit={handleFormSubmit} />
        </div>
        <div className="hero-image">
          <img src={MaleDoctor} alt="Doctor" className="hero-img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
