import React, { useState } from 'react';
import './contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    event: '',
    date: '',
    budget: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="contact-us-section">
      <h2>Reach Out</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}:</label>
            {key !== 'details' ? (
              <input
                type={key === 'date' ? 'date' : key === 'email' ? 'email' : key === 'phone' ? 'tel' : key === 'budget' ? 'number' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            ) : (
              <textarea
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;