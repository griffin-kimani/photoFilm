import React from 'react';
import './blog.css';
import couple1 from '../../assets/wed1.jpg';
import couple2 from '../../assets/wed2.jpg';
import couple3 from '../../assets/wed3.jpg';
import couple4 from '../../assets/wed4.jpg';
import couple5 from '../../assets/wed5.jpg';

const Blog = () => {
  const couples = [
    { image: couple1, name: "John & Jane", place: "Nairobi", link: "/gallery/john-jane" },
    { image: couple2, name: "Mike & Anna", place: "Mombasa", link: "/gallery/mike-anna" },
    { image: couple3, name: "Paul & Kate", place: "Nakuru", link: "/gallery/paul-kate" },
    { image: couple4, name: "Chris & Eva", place: "Eldoret", link: "/gallery/chris-eva" },
    { image: couple5, name: "Tom & Sarah", place: "Kisumu", link: "/gallery/tom-sarah" },
  ];

  return (
    <div className="blog-section">
      <h2>Our Beautiful Couples</h2>
      <div className="couples">
        {couples.map((couple, index) => (
          <div key={index} className="couple">
            <a href={couple.link}>
              <img src={couple.image} alt={`${couple.name} Wedding`} className="couple-image" />
              <div className="couple-info">
                <h3>{couple.name}</h3>
                <p>{couple.place}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
