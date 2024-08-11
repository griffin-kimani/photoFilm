import React from 'react'
import './couple4.css';
import image1 from '../../gallery/couple4/image-12.jpg';
import image2 from '../../gallery/couple4/image-13.jpg';
import image3 from '../../gallery/couple4/image-14.jpg';
import image4 from '../../gallery/couple4/image-15.jpg';
import image5 from '../../gallery/couple4/image-16.jpg';
import image6 from '../../gallery/couple4/image-17.jpg';
import image7 from '../../gallery/couple4/image-18.jpg';
import image8 from '../../gallery/couple4/image-19.jpg';

const Couple4 = () => {
    return (
      <div className="portfolio-section">
        <h2>Couple 4</h2>
        <div className="portfolio-gallery">
          <img src={image1} alt="Couples" className="portfolio-image" />
          <img src={image2} alt="Brides" className="portfolio-image" />
          <img src={image3} alt="Ceremony" className="portfolio-image" />
          <img src={image4} alt="Groom" className="portfolio-image" />
          <img src={image5} alt="Reception" className="portfolio-image" />
          <img src={image6} alt="Reception" className="portfolio-image" />
          <img src={image7} alt="Reception" className="portfolio-image" />
          <img src={image8} alt="Reception" className="portfolio-image" />
          </div>
    </div>
  );
}
export default Couple4;