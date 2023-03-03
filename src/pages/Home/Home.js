import Header from "../../components/header"
import SideNav from "../../components/sideNav"

/**
 * A component which is used to create the home page
 * @returns {JSX.Element}
 */
const Home = () => {

    return (
        <>
            <Header />
            <main className="dasboard-main">
                <SideNav />
                <div className="content-wrapper">
                <div className="content-title-wrapper">
                        <h3 className="content-title">Cette page est en <span className="content-title-username">construction</span></h3>
                        <h4 className="content-title-desc">Référez vous au read me pour accédez aux tableau de bord</h4>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home