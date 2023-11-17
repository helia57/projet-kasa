import { Link } from 'react-router-dom'


function Error() {
    return (
        <div className="containerErrror">
            <p className="textError">404</p>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="textRetourAccueil" to="/">Retourner sur la page d'accueil</Link>
        </div>
        
    )
}
 
export default Error