import { Link } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer"


function Error() {
    return (
        <>
        <Header />
            <main>
                <p className="textError">404</p>
                <h2 className="error-Title">Oups! La page que vous demandez n'existe pas.</h2>
                <Link className="textRetourAccueil" to="/">Retourner sur la page d'accueil</Link>
            </main>
        <Footer />
        </>
        
    )
}
 
export default Error