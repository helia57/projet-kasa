import { Link } from 'react-router-dom'


function Error() {
    return (
        <main>
            <p className="textError">404</p>
            <h2 className="error-Title">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="textRetourAccueil" to="/">Retourner sur la page d'accueil</Link>
        </main>
        
    )
}
 
export default Error