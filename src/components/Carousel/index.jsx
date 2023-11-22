import React, { useState, useEffect } from 'react';
import BtnSlider from '../BtnSlider';
import CountSlider from '../CountSlider';
import datas from '../../assets/Logements/Datas';
import { useParams } from 'react-router-dom';



export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { id } = useParams();

  // Utilisez un effet pour mettre à jour le slideIndex lorsque l'ID change
  useEffect(() => {
    const currentLogement = datas.find((logement) => logement.id === id);
    if (currentLogement) {
      setSlideIndex(0);
    }
  }, [id]);

  const currentLogement = datas.find((logement) => logement.id === id);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % currentLogement.pictures.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + currentLogement.pictures.length) % currentLogement.pictures.length);
  };

  console.log("Current Logement ID:", currentLogement?.id);
  console.log("Current Image Paths:", currentLogement?.pictures);

  if (!currentLogement) {
    return <div>Logement introuvable</div>; // Gérez le cas où le logement n'est pas trouvé
  }

  return (
    <div className="container-Slider">
      <CountSlider
        currentSlide={slideIndex}
        totalSlides={currentLogement.pictures.length}
      />
      <div className="slide">
        <img
          src={currentLogement.pictures[slideIndex]}
          alt={`appartement ${currentLogement.id} - ${slideIndex + 1}`}
          className="slide"
        />
      </div>
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
}
