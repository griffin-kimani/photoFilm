import React from 'react'
import './couple1.css';
import image1 from '../../gallery/couple1/DSC00811.jpg';
import image2 from '../../gallery/couple1/DSC00825.jpg';
import image3 from '../../gallery/couple1/DSC00826.jpg';
import image4 from '../../gallery/couple1/DSC09946.jpg';
import image5 from '../../gallery/couple1/DSC09978.jpg';
import image6 from '../../gallery/couple1/DSC00961.jpg';
import image7 from '../../gallery/couple1/DSC00922.jpg';
import image8 from '../../gallery/couple1/DSC00986.jpg';
import image9 from '../../gallery/couple1/DSC09944.jpg';
import image10 from '../../gallery/couple1/DSC00830.jpg';

const Couple1 = () => {
    return (
      <div className="portfolio-section">
        <h2>Our Portfolio</h2>
        <div className="portfolio-gallery">
          <img src={image1} alt="Couples" className="portfolio-image" />
          <img src={image2} alt="Brides" className="portfolio-image" />
          <img src={image3} alt="Ceremony" className="portfolio-image" />
          <img src={image4} alt="Groom" className="portfolio-image" />
          <img src={image5} alt="Reception" className="portfolio-image" />
          <img src={image6} alt="Reception" className="portfolio-image" />
          <img src={image7} alt="Reception" className="portfolio-image" />
          <img src={image8} alt="Reception" className="portfolio-image" />
          <img src={image9} alt="Groom" className="portfolio-image" />
          <img src={image10} alt="Ceremony" className="portfolio-image" />
          </div>
    </div>
  );
}
export default Couple1;