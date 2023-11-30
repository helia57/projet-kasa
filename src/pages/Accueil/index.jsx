
import Gallery from "../../components/gallery"
import Cards from "../../components/Cards"
import Banner from "../../components/Banner"
import paysageMer from "../../assets/paysage_mer.png"
import Header from "../../components/Header"
import Footer from "../../components/Footer"



function Accueil() {
    return (
      <>
        <Header />
        <main>
        
          <Banner image={paysageMer} text="Chez vous, partout et ailleurs"/>
          <Gallery>
            <Cards></Cards>
          </Gallery>
        </main>
        <Footer />  
      </>
    )
}
  

export default Accueil