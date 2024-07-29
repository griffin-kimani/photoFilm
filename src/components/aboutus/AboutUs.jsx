import React from 'react';
import './aboutUs.css';
import image1 from '../../assets/wed1.jpg';
import image2 from '../../assets/wed2.jpg';
import Review from '../review/Review';
import FAQ from '../faq/Faq';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="intro">
        <h2>Top Bride Photographers and Videographers</h2>
        <p>Discover a creative Wedding Photography and Videography hub nestled in Nairobi, Kenya.</p>
        <p>We are dedicated to crafting timeless wedding memories.</p>
        <p>Through the lens of documentary photography and film, we encapsulate the essence of your special day, narrating its narrative with emotive imagery and captivating storytelling.</p>
        <p>Welcome to an experience where every frame resonates with authenticity and artistry.</p>
      </div>

      <div className='services'>
        <h2><i>OUR SERVICES</i></h2>
        <h3>Wedding Photography</h3><hr />
        <div className="service">
          <div className='service-text'>
            <h4>Name</h4>
            <p>Testimony</p>
          </div>
          <div className='service-image'>
            <img src={image1} alt="Testimony 1" />
          </div>
        </div>

        <h3>Wedding Videography</h3><hr />
        <div className="service">
          <div className='service-image'>
            <img src={image2} alt="Testimony 2" />
          </div>
          <div className='service-text'>
            <h4>Name</h4>
            <p>Testimony</p>
          </div>
        </div>
      </div>

      <div className="how-we-work">
        <h3>How We Work</h3>
        <p>Top Bride Photography and filming works in a logical and experienced approach by securing contracts through client inquiries or outreach from most social media platforms or phone calls.</p>
        <p>Upon agreement, we schedule sessions, provide equipment, and offer creative direction.</p>
        <p>After the shoot, we edit and deliver final content, ensuring client satisfaction and maintaining professional standards.</p>
        <div className="button-container">
          <p>You can view some of our work down here</p>
          <a href="Wed1.jpg" className="button">View Photographs</a>
          <a href="wed2.jpg" className="button">View Films</a>
        </div>
      </div>
      
      <div>
        <Review />
      </div>
      
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default AboutUs;
