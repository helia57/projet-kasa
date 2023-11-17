import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-header-mobile.svg'
//import  '../styles/header.css'
 
function Header() {
    return (
        <div className="navContainer">
            <div className="boiteLogo">
                <img src={Logo} alt="logo kasa"  />
            </div>
            <nav className="navBar">
                <Link className="textNavBar" to="/">Accueil</Link>
                <Link className="textNavBar" to="/Apropos">A propos</Link>
            </nav>
        </div>
    )
}

export default Header