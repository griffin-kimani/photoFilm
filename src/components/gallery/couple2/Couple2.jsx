import React from 'react'
import './couple2.css';
import image1 from '../../gallery/couple2/G&C-67.jpg';
import image2 from '../../gallery/couple2/G&C-88.jpg';
import image3 from '../../gallery/couple2/G&C-93.jpg';
import image4 from '../../gallery/couple2/G&C-104.jpg';
import image5 from '../../gallery/couple2/G&C-133.jpg';
import image6 from '../../gallery/couple2/G&C-135.jpg';
import image7 from '../../gallery/couple2/G&C-81.jpg';


const Couple2 = () => {
    return (
      <div className="portfolio-section">
        <h2>Couple 2</h2>
        <div className="portfolio-gallery">
          <img src={image1} alt="Couples" className="portfolio-image" />
          <img src={image2} alt="Brides" className="portfolio-image" />
          <img src={image3} alt="Ceremony" className="portfolio-image" />
          <img src={image4} alt="Groom" className="portfolio-image" />
          <img src={image5} alt="Reception" className="portfolio-image" />
          <img src={image6} alt="Reception" className="portfolio-image" />
          <img src={image7} alt="Reception" className="portfolio-image" />
          </div>
    </div>
  );
}
export default Couple2