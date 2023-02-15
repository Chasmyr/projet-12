import "./index.css"

const Header = () => {

    return (
        <header>
            <img src={require('../../assets/images/logo.png')} alt="logo"/>
            <h2>Accueil</h2>
            <h2>Profil</h2>
            <h2>Réglage</h2>
            <h2>Communauté</h2>
        </header>
    )
}

export default Header