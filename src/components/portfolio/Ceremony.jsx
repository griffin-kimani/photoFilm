import React from 'react';
import './ceremony.css';
import image1 from '../../assets/Ceremony/IMAGE (48).jpg';
import image2 from '../../assets/Ceremony/IMAGE (489).jpg';
import image3 from '../../assets/Ceremony/IMAGE (565).jpg';
import image4 from '../../assets/Ceremony/image-14.jpg';
import image5 from '../../assets/Ceremony/image-19.jpg';
import image6 from '../../assets/Ceremony/image-16.jpg';
import image7 from '../../assets/Ceremony/IMAGE (497).jpg';
import image8 from '../../assets/Ceremony/IMAGE (564).jpg';
import image9 from '../../assets/Ceremony/image-12.jpg';
import image10 from '../../assets/Ceremony/IMAGE (606).jpg';
import image11 from '../../assets/Ceremony/IMAGE (521).jpg';
import image12 from '../../assets/Ceremony/IMAGE (558).jpg';

const Ceremony = () => {
  return (
    <div className="ceremony-gallery">
      <h2>Ceremonies' Gallery</h2>
      <div className="gallery">
      <div className="gallery-item"><img src={image1} alt="Bride 1" /></div>
      <div className="gallery-item"><img src={image2} alt="Bride 2" /></div>
      <div className="gallery-item"><img src={image3} alt="Bride 3" /></div>
      <div className="gallery-item"><img src={image4} alt="Bride 4" /></div>
      <div className="gallery-item"><img src={image5} alt="Bride 5" /></div>
      <div className="gallery-item"><img src={image6} alt="Bride 6" /></div>
      <div className="gallery-item"><img src={image7} alt="Groom 1" /></div>
      <div className="gallery-item"><img src={image8} alt="Groom 2" /></div>
      <div className="gallery-item"><img src={image9} alt="Groom 3" /></div>
      <div className="gallery-item"><img src={image10} alt="Groom 4" /></div>
      <div className="gallery-item"><img src={image11} alt="Groom 5" /></div>
      <div className="gallery-item"><img src={image12} alt="Groom 6" /></div>
      </div>
    </div>
  );
}

export default Ceremony;
