import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Slider from '../../components/Slider';
import Tags from '../../components/Tags';
import datas from '../../assets/Logements/Datas';
import Stars from '../../components/Stars';
import Host from '../../components/Host';
import Collapse from '../../components/Collapse';
import Header from "../../components/Header"
import Footer from "../../components/Footer"





const Accomodation = () => {
  const { id } = useParams();
  const currentLogement = datas.find((logement) => logement.id === id);

  if (!currentLogement) {
    return <Navigate to= {"/*"}  replace />;
  }
  

  return (
    <>
    <Header />
      <main>
        <Slider pictures={currentLogement.pictures} />
        <div className="description">
          <div className="wrapper-presentation">
            
            <h2 className="title-appart">{currentLogement.title}</h2>
            <h3 className="sous-title-appart">{currentLogement.location}</h3>
            <Tags tags={currentLogement.tags} />
          </div>
          <div className="wrapper-notation">
            <Host Host={currentLogement.host} />
            <Stars rating={currentLogement.rating}></Stars>
          </div>
        </div>
        <div className="wrapper-collapses">
          <Collapse  title="Description" content={currentLogement.description} />
          <Collapse  title="Équipements" content={currentLogement.equipments} />
        </div>
      </main>
    <Footer />
    </>
  );
};

export default Accomodation;