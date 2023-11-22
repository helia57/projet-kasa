import React from 'react';

const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    return stars;
  };

  return <div className="rating-container">{renderStars()}</div>;
};

export default Rating;