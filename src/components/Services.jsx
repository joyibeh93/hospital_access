import React from 'react'
import Nurses from "../assets/unth-nurses.jpg"

import '../styles/service.css'

function Services() {
    const cards = [
        { title: 'Borem ipsum' },
        { title: 'Porem ipsum' },
        { title: 'Vorem ipsum' },
        { title: 'Borem ipsum' },
        { title: 'Porem ipsum' },
        { title: 'Vorem ipsum' },
      ];

  return (
    <>
    <h2 className="about-h2">Services</h2>
    <div className="grid-container" id='services'>

        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="image-placeholder"></div>
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </>

      );
    };

export default Services
