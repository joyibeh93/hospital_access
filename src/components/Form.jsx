import { useState } from "react";

const Form = ({ handleFormSubmit }) => {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    area: "",
    healthcareType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleFormSubmit(formData); // Proceed if form is valid
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Lagos"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <p className="error-text">{errors.state}</p>}
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Ikorodu"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error-text">{errors.city}</p>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Area</label>
          <input
            type="text"
            name="area"
            placeholder="Ebute"
            value={formData.area}
            onChange={handleChange}
          />
          {errors.area && <p className="error-text">{errors.area}</p>}
        </div>
        <div className="form-group">
          <label>Healthcare Type</label>
          <input
            type="text"
            name="healthcareType"
            placeholder="Hospital"
            value={formData.healthcareType}
            onChange={handleChange}
          />
          {errors.healthcareType && (
            <p className="error-text">{errors.healthcareType}</p>
          )}
        </div>
      </div>
      <button type="submit" className="hero-button hero-button1">
        Search
      </button>
    </form>
  );
};

export default Form;
