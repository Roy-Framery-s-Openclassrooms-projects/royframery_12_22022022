import { Link } from 'react-router-dom'
// CSS
import './Header.scss'

/**
 *
 * @description Compoent that show the header of the site with the navigation
 * @returns { HTMLElement }
 */
const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__link-img-wrapper">
                    <img src="/logo.svg" alt="" className="header__img" />
                </Link>
                <ul className="header__links">
                    <Link to="/" className="header__link">
                        <li>Accueil</li>
                    </Link>
                    <Link to="/profil" className="header__link">
                        <li>Profil</li>
                    </Link>
                    <Link to="/setting" className="header__link">
                        <li>Réglage</li>
                    </Link>
                    <Link to="community" className="header__link">
                        <li>Communauté</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
