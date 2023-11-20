import CardPaysage from "../../components/CardPaysage"
import Gallery from "../../components/gallery"
import Cards from "../../components/Cards"



function Accueil() {
    return (
      <main>
        <CardPaysage></CardPaysage>
        <Gallery>
          <Cards></Cards>
        </Gallery>
        
      </main>
    )
}
  

export default Accueil;