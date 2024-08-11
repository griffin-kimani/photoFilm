import React from 'react';
import './bridesgroom.css';
import image1 from '../../assets/Brides/IMAGE (354).jpg';
import image2 from '../../assets/Brides/IMAGE (800).jpg';
import image3 from '../../assets/Brides/image.jpg';
import image4 from '../../assets/Brides/image-9.jpg';
import image5 from '../../assets/Groom/G&C-5.jpg';
import image6 from '../../assets/Groom/IMAGE (14).jpg';
import image7 from '../../assets/Groom/G&C-211.jpg';
import image8 from '../../assets/Groom/IMAGE (77).jpg';
import image9 from '../../assets/Brides/true-10.jpg';
import image10 from '../../assets/Brides/IMAGE (800).jpg';
import image11 from '../../assets/Brides/Image-8.jpg';

const Bridesgroom = () => {
  return (
    <div className="brides-grooms-gallery">
      <h2>Brides & Grooms Gallery</h2>
      <div className="gallery">
        <div className="gallery-item"><img src={image1} alt="Bride 1" /></div>
        <div className="gallery-item"><img src={image2} alt="Bride 2" /></div>
        <div className="gallery-item"><img src={image3} alt="Bride 3" /></div>
        <div className="gallery-item"><img src={image4} alt="Bride 4" /></div>
        <div className="gallery-item"><img src={image5} alt="Groom 1" /></div>
        <div className="gallery-item"><img src={image6} alt="Groom 2" /></div>
        <div className="gallery-item"><img src={image7} alt="Groom 3" /></div>
        <div className="gallery-item"><img src={image8} alt="Groom 4" /></div>
        <div className="gallery-item"><img src={image9} alt="True Bride 1" /></div>
        <div className="gallery-item"><img src={image10} alt="True Bride 2" /></div>
        <div className="gallery-item"><img src={image11} alt="True Bride 3" /></div>
      </div>
    </div>
  );
}

export default Bridesgroom;
