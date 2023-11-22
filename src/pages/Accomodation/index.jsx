import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';

function Accomodation() {
  const { id } = useParams();

  return (
    <main>
      <Carousel logementId={id} />
    </main>
  );
}

export default Accomodation;