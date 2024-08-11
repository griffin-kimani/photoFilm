import React from 'react';
import './reception.css';
import image1 from '../../assets/Reception/DSC09978.jpg';
import image2 from '../../assets/Reception/DSC00811.jpg';
import image3 from '../../assets/Reception/DSC00830.jpg';
import image4 from '../../assets/Reception/DSC00961.jpg';
import image5 from '../../assets/Reception/IMAGE (854).jpg';
import image6 from '../../assets/Reception/IMAGE (859).jpg';
import image7 from '../../assets/Reception/Image-48 (1).jpg';
import image8 from '../../assets/Reception/Image-49 (1).jpg';
import image9 from '../../assets/Reception/DSC02843.jpg';
import image10 from '../../assets/Reception/DSC02875.jpg';
import image11 from '../../assets/Reception/DSC09948.jpg';
import image12 from '../../assets/Reception/DSC02850.jpg';

const Reception = () => {
  return (
    <div className="reception-gallery">
      <h2>Reception Gallery</h2>
      <div className="gallery">
      <div className="gallery-item"><img src={image1} alt="Bride 1" /></div>
      <div className="gallery-item"><img src={image2} alt="Bride 2" /></div>
      <div className="gallery-item"><img src={image3} alt="Bride 3" /></div>
      <div className="gallery-item"><img src={image4} alt="Bride 4" /></div>
      <div className="gallery-item"><img src={image5} alt="Groom 1" /></div>
      <div className="gallery-item"><img src={image6} alt="Groom 2" /></div>
      <div className="gallery-item"><img src={image7} alt="Groom 3" /></div>
      <div className="gallery-item"><img src={image8} alt="Groom 4" /></div>
      <div className="gallery-item"><img src={image9} alt="Bride 5" /></div>
      <div className="gallery-item"><img src={image10} alt="Groom 5" /></div>
      <div className="gallery-item"><img src={image11} alt="Bride 6" /></div>
      <div className="gallery-item"><img src={image12} alt="Groom 6" /></div>
      </div>
    </div>
  );
}

export default Reception;
