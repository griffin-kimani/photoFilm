import React from 'react';
import './blog.css';
import couple1 from '../../components/gallery/couple1/DSC00953.jpg';
import couple2 from '../../components/gallery/couple2/G&C-81.jpg';
import couple3 from '../../components/gallery/couple3/IMAGE (565).jpg';
import couple4 from '../../components/gallery/couple4/image-17.jpg';
import couple5 from '../../components/gallery/couple5/_LIC3071.jpg';

const Blog = () => {
  const couples = [
    { image: couple1, name: "John & Jane", place: "Nairobi", link: "/gallery/couple1" },
    { image: couple2, name: "Mike & Anna", place: "Mombasa", link: "/gallery/couple2" },
    { image: couple3, name: "Paul & Kate", place: "Nakuru", link: "/gallery/couple3" },
    { image: couple4, name: "Chris & Eva", place: "Eldoret", link: "/gallery/couple4" },
    { image: couple5, name: "Tom & Sarah", place: "Kisumu", link: "/gallery/couple5" },
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
