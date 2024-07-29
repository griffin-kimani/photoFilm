import React from 'react';
import './home.css';
import capture from '../../assets/wed3.jpg'; 
import film from '../../assets/wed4.jpg'; 

const Home = () => {
  return (
    <div className="introduction">
      <h2>Matrimonial Photography and Videography</h2>  
      <p>Experience Genuine Moments and Unadulterated Recollections.</p>
      <p>Let us weave your love story into timeless memories with our expertise in capturing authentic and unstaged moments while experiencing the Magic of Love in Kenya.</p>
      <p>From the laughter to the tears,</p>
      <p>we're dedicated to preserving every precious detail of your special day.</p>
      
      <div className="image-container">
        <div className="image-box">
          <a href="/photography">
            <img src={capture} alt="Photography" />
            <div className="hover-text">Photography &rarr;</div>
            <div className="label">Photography</div>
          </a>
        </div>
        <div className="image-box">
          <a href="/film">
            <img src={film} alt="Film" />
            <div className="hover-text">Film &rarr;</div>
            <div className="label">Film</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
