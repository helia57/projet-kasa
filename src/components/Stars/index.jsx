import React from 'react';
import starsRed from '../../assets/stars-red.svg';
import starsGray from '../../assets/stars-gray.svg';

const Stars = ({ rating }) => {
  const filledStars = Math.floor(rating); // Partie entière du rating
  const remainder = 5 - filledStars; // Étoiles restantes

  const renderStars = (count, filled) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <img
          key={i}
          src={filled ? starsRed : starsGray}
          alt={`star ${filled ? 'filled' : 'empty'}`}
          className="star"
        />
      );
    }
    return stars;
  };

  return (
    <div className="stars-container">
      {renderStars(filledStars, true)}
      {renderStars(remainder, false)}
    </div>
  );
};

export default Stars;