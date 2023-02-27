import Header from "../../components/header"
import SideNav from "../../components/sideNav"

/**
 * A component which is used to create the error 404 page
 * @returns {JSX.Element}
 */
const Error = () => {

    return (
        <>
            <Header />
            <main className="dasboard-main">
                <SideNav />
                <div className="content-wrapper">
                <div className="content-title-wrapper">
                        <h3 className="content-title">Erreur <span className="content-title-username">404</span></h3>
                        <h4 className="content-title-desc">Cette page n'exsite pas.</h4>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Error