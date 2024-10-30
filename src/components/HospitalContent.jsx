// HospitalContent.jsx
import React from 'react';
import HospitalCards from './HospitalCards';
import HospitalsList from './HospitalsList'; // Make sure the path is correct

import '../styles/HospitalContent.css';

function HospitalContent() {
  return (
    <div className="hospital-container-wrapper">
      <section>
        <h2>Recommended Healthcare Centres</h2>
        <div className="hospital-grid-container">
          {HospitalsList.recommended.map((hospital) => (
            <HospitalCards key={hospital.name} hospital={hospital} />
          ))}
        </div>
      </section>

      <section>
        <h2>Other Healthcare Centres</h2>
        <div className="hospital-grid-container">
          {HospitalsList.other.map((hospital) => (
            <HospitalCards key={hospital.name} hospital={hospital} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HospitalContent;
