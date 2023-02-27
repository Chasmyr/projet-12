import "./index.css"

/**
 * Header of the app
 * @component
 * @returns {JSX.Element}
 */
const Header = () => {

    return (
        <header>
            <img src={require('../../assets/images/logo.png')} alt="logo" className="header-img"/>
            <h2 className="header-h2">Accueil</h2>
            <h2 className="header-h2">Profil</h2>
            <h2 className="header-h2">Réglage</h2>
            <h2 className="header-h2">Communauté</h2>
        </header>
    )
}

export default Header