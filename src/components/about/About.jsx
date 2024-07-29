import React from 'react';
import './about.css';
import './section.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="section about-us">
      <div className="intro">
        <h2>About Us</h2>
        <h3>Top Bride Photographies and Videographies</h3>
        <p>Discover a creative Wedding Photography and Videography hub nestled in Nairobi, Kenya. We are dedicated to crafting timeless wedding memories.</p>
        <Link to="/about" className="learn-more-button">Learn More &rarr;</Link>
      </div>
    </div>
  );
};

export default About;

