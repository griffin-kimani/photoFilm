import React from 'react'
import './couple3.css';
import image1 from '../../gallery/couple3/IMAGE (354).jpg';
import image2 from '../../gallery/couple3/IMAGE (414).jpg';
import image3 from '../../gallery/couple3/IMAGE (451).jpg';
import image4 from '../../gallery/couple3/image-10.jpg';
import image5 from '../../gallery/couple3/Image-41 (1).jpg';
import image6 from '../../gallery/couple3/IMAGE (605).jpg';
import image7 from '../../gallery/couple3/IMAGE (719).jpg';
import image8 from '../../gallery/couple3/Image-8.jpg';
import image9 from '../../gallery/couple3/Image-34 (1).jpg';
import image10 from '../../gallery/couple3/IMAGE (757).jpg';

const Couple3 = () => {
    return (
      <div className="portfolio-section">
        <h2>Couple 3</h2>
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
export default Couple3;