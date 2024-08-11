import React from 'react';
import './couple.css';
import image1 from '../../assets/Couples/_LIC3145.jpg';
import image2 from '../../assets/Couples/DSC02734.jpg';
import image3 from '../../assets/Couples/DSC02818.jpg';
import image4 from '../../assets/Couples/IMAGE (703).jpg';
import image5 from '../../assets/Couples/IMAGE (783).jpg';
import image6 from '../../assets/Couples/G&C-104.jpg';
import image7 from '../../assets/Couples/_LIC3111.jpg';
import image8 from '../../assets/Couples/DSC02794.jpg';
import image9 from '../../assets/Couples/Image-42 (1).jpg';
import image10 from '../../assets/Couples/G&C-93.jpg';
import image11 from '../../assets/Couples/G&C-67.jpg';
import image12 from '../../assets/Couples/IMAGE (719).jpg';

const Couples = () => {
  return (
    <div className="couple-gallery">
      <h2>Couples Gallery</h2>
      <div className="gallery">
      <div className="gallery-item"><img src={image1} alt="Bride 1" /></div>
      <div className="gallery-item"><img src={image2} alt="Bride 2" /></div>
      <div className="gallery-item"><img src={image3} alt="Bride 3" /></div>
      <div className="gallery-item"><img src={image4} alt="Bride 4" /></div>
      <div className="gallery-item"><img src={image5} alt="Bride 5" /></div>
      <div className="gallery-item"><img src={image6} alt="Bride & Groom 1" /></div>
      <div className="gallery-item"><img src={image7} alt="Bride 1" /></div>
      <div className="gallery-item"><img src={image8} alt="Bride 2" /></div>
      <div className="gallery-item"><img src={image9} alt="Bride 3" /></div>
      <div className="gallery-item"><img src={image10} alt="Bride & Groom 2" /></div>
      <div className="gallery-item"><img src={image11} alt="Bride & Groom 3" /></div>
      <div className="gallery-item"><img src={image12} alt="Bride & Groom 4" /></div>
      </div>
    </div>
  );
}

export default Couples;
