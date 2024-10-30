// Form.js
import React from 'react';

const Form = ({ handleFormSubmit }) => (
  <form onSubmit={handleFormSubmit}>
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
    <button type="submit" className="hero-button hero-button1">Search</button>
  </form>
);

export default Form;
