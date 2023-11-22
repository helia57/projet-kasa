import React from 'react';

export default function CountSlider({ currentSlide, totalSlides }) {
  return (
    <div className="count-slider">
      <p>{`${currentSlide + 1} / ${totalSlides}`}</p>
    </div>
  );
}
