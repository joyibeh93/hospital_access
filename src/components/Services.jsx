import React from 'react'
import Nurse from '../assets/Nurse.jpg'
import HealthMonitor from '../assets/HealthMonitor.jpg'
import WardUnit from '../assets/WardUnit.jpg'
import OperatingCenter from '../assets/OperatingCenter.jpg'
import MedicalCare from '../assets/MedicalCare.jpg'
import Lab from '../assets/Lab.jpg'

import '../styles/service.css'

function Services() {
    const cards = [
        { img:Nurse, title: 'Nurse'},
        { img: HealthMonitor, title: 'Health Monitor'},
        { img: WardUnit,title: 'Ward Unit' },
        { img: OperatingCenter, title: 'Operating Center' },
        { img: MedicalCare, title: 'Medical Care' },
        { img: Lab, title: 'Laboratory' },
      ];

  return (
    <>
    <h2 className="about-h2">Services</h2>
    <div className="grid-container" id='services'>

        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="image-placeholder"> <img src ={card.img} className='servimg' /></div>
            <div className="card-title">
             {card.title}</div>
          </div>
        ))}
      </div>
    </>

      );
    };

export default Services
