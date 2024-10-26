import React from "react";
import { useNavigate } from 'react-router-dom';
import FemaleDoctor from "../assets/FemaleDoctor.png"
import MaleDoctor from "../assets/MaleDoctor.png"

import '../styles/hero.css'

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevents form submission from reloading the page
    navigate('/result');
  };

  return (
    <>
    <section className="hero-container">
      <div className="hero-text">
        <h1>Welcome to <br /> Healthcare Access.</h1>
        <p>
          Discover personalised healthcare access points nearby. Know your way
          around through our guide.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img
          src={FemaleDoctor}
          alt="Doctor"
          className="hero-img"
        />
      </div>
      
    </section>
    <div className="hero-container">
      <div className="hero-form">
        <p>Please turn on your location to get personalised recommendations.</p>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>State</label>
              <input type="text" placeholder="Lagos" />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" placeholder="Ikorodu" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Area</label>
              <input type="text" placeholder="Ebute" />
            </div>
            <div className="form-group">
              <label>Healthcare Type</label>
              <input type="text" placeholder="Hospital" />
            </div>
          </div>
          <button onClick={handleButtonClick} type="submit" className="hero-button hero-button1">
            Search
          </button>
        </form>
      </div>
      <div className="hero-image">
        <img
          src={MaleDoctor}
          alt="Doctor"
          className="hero-img"
        />
      </div>
    </div>
    </>
  );
};

export default Hero;
