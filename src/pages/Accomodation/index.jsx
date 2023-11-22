import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Tags from '../../components/Tags';
import datas from '../../assets/Logements/Datas';
import Stars from '../../components/Stars';

const Accomodation = () => {
  const { id } = useParams();
  const currentLogement = datas.find((logement) => logement.id === id);

  if (!currentLogement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <main>
      <Carousel logementId={id} />
      <h2 className="title-appart">{currentLogement.title}</h2>
      <h3 className="sous-title-appart">{currentLogement.location}</h3>
      <Tags tags={currentLogement.tags} />
      <Stars></Stars>
      
    </main>
  );
};

export default Accomodation;