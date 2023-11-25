import React, { useState } from 'react';
import BtnSlider from '../BtnSlider';
import CountSlider from '../CountSlider';




export default function Slider({pictures}) {
  const [slideIndex, setSlideIndex] = useState(0);
 

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % pictures.length); //Utilisation de l'opérateur modulo pour boucler les slides du carousel
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + pictures.length) % pictures.length);
  };

   
  return (
    <div className="container-Slider">
      {pictures.length > 1 && (
       <>
        <div className="slide">
          <img
            src={pictures[slideIndex]}
            alt={`appartement `}
            className="slide"
          />
        </div>

        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
        <CountSlider
          currentSlide={slideIndex}
          totalSlides={pictures.length}
        />
      </>
    )}
    {pictures.length === 1 && (
      <div className="slide">
        <img
          src={pictures[0]}
          alt={`appartement`}
          className="slide"
        />
      </div>
    )}  
    </div>
  );
}
