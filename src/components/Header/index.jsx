import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
//import  '../styles/header.css'
 
function Header() {
    return (
        <navContainer className="navContainer">
            <div className="boiteLogo">
                <img src={Logo} alt="logo kasa" height={68} width={210} />
            </div>
            <nav className="navBar">
                <Link className="textNavBar" to="/">Accueil</Link>
                <Link className="textNavBar" to="/Apropos">A propos</Link>
            </nav>
        </navContainer>
    )
}

export default Header