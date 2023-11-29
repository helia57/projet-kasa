
import Gallery from "../../components/gallery"
import Cards from "../../components/Cards"
import Banner from "../../components/Banner"
import paysageMer from "../../assets/paysage_mer.png"



function Accueil() {
    return (
      <main>
        <Banner image={paysageMer}/>
        <Gallery>
          <Cards></Cards>
        </Gallery>
        
      </main>
    )
}
  

export default Accueil