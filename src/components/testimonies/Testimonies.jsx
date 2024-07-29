import React from 'react';
import './testimonies.css';
import './section1.css';
import testimonyImage1 from '../../assets/wed6.jpg';
import testimonyImage2 from '../../assets/wed5.jpg';

const Testimony = ({ image, name, text, reverse }) => {
  return (
    <div className={`testimony ${reverse ? 'reverse' : ''}`}>
      <img src={image} alt={name} className="testimony-image" />
      <div className="testimony-text">
        <p>"{text}"</p>
        <p>- {name}</p>
      </div>
    </div>
  );
};

const Testimonies = () => {
  return (
    <div className="section testimonies-section">
      <h2>Client Testimonials</h2>
      <div className="testimonies">
        <Testimony
          image={testimonyImage1}
          name="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          reverse={false}
        />
        <Testimony
          image={testimonyImage2}
          name="Jane Smith"
          text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Testimonies;
