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
          text="The truth is that the pain itself is important, it will be followed by the education of the student. But it happens at such a time that there is a great deal of work and pain."
          reverse={false}
        />
        <Testimony
          image={testimonyImage2}
          name="Jane Smith"
          text="For I will come to the smallest detail, who does not engage in any kind of exercise unless he gains some benefit from it."
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Testimonies;
