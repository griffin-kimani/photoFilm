import React from 'react'
import './couple5.css';
import image1 from '../../gallery/couple5/_LIC3068.jpg';
import image2 from '../../gallery/couple5/_LIC3071.jpg';
import image3 from '../../gallery/couple5/_LIC3111.jpg';
import image4 from '../../gallery/couple5/_LIC3145.jpg';

const Couple5 = () => {
    return (
      <div className="portfolio-section">
        <h2>Couple 5</h2>
        <div className="portfolio-gallery">
          <img src={image1} alt="Couples" className="portfolio-image" />
          <img src={image2} alt="Brides" className="portfolio-image" />
          <img src={image3} alt="Ceremony" className="portfolio-image" />
          <img src={image4} alt="Groom" className="portfolio-image" />
          </div>
    </div>
  );
}
export default Couple5;