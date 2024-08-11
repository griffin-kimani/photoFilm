import React from 'react';
import { Link } from 'react-router-dom';
import './photography.css';
import bridesGroomsImage from '../../assets/Brides/IMAGE (354).jpg';
import couplesImage from '../../assets/Couples/G&C-81.jpg';
import ceremonyImage from '../../assets/Ceremony/image-13.jpg';
import receptionImage from '../../assets/Reception/DSC00922.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h2>Our Portfolio</h2>
      <div className="portfolio-gallery">
        <Link to="/portfolio/bridesgroom">
          <div className="portfolio-item">
            <img src={bridesGroomsImage} alt="Brides & Grooms" className="portfolio-image" />
            <div className="portfolio-caption">Brides & Grooms</div>
          </div>
        </Link>
        <Link to="/portfolio/couple">
          <div className="portfolio-item">
            <img src={couplesImage} alt="Couples" className="portfolio-image" />
            <div className="portfolio-caption">Couples</div>
          </div>
        </Link>
        <Link to="/portfolio/ceremony">
          <div className="portfolio-item">
            <img src={ceremonyImage} alt="Ceremony" className="portfolio-image" />
            <div className="portfolio-caption">Ceremony</div>
          </div>
        </Link>
        <Link to="/portfolio/reception">
          <div className="portfolio-item">
            <img src={receptionImage} alt="Reception" className="portfolio-image" />
            <div className="portfolio-caption">Reception</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
