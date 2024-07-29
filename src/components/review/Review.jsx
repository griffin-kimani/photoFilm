import React, { useState } from 'react';
import './review.css';
import { TextField, Button } from '@mui/material';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleStarHover = (star) => {
    setHoveredRating(star);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    setRating(0);
    setComment('');
  };

  const renderStar = (star) => {
    const filled = star <= (hoveredRating || rating);
    const className = filled ? 'star filled' : 'star';

    return (
      <span
        key={star}
        className={className}
        onClick={() => handleStarClick(star)}
        onMouseEnter={() => handleStarHover(star)}
        onMouseLeave={() => setHoveredRating(0)}
      >
        ★
      </span>
    );
  };

  return (
      <div className="review">
        <div className="stars">
          {[1, 2, 3, 4, 5].map(renderStar)}
        </div>
        <div className="counter">
          <p>Rating out of 5: {rating}</p>
        </div>
        <div className="comment-section">
          <TextField
            id="standard-multiline-flexible"
            label="Leave a comment"
            multiline
            maxRows={4}
            variant="standard"
            style={{ width: '100%' }}
            color="warning"
            focused
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <div className="submit-button">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
  );
};

export default Review;
