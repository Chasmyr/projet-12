import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/activityChart";
import CustomCards from "../../components/card";
import Header from "../../components/header";
import IntensityChart from "../../components/intensityChart";
import ScoreChart from "../../components/scoreChart";
import SessionChart from "../../components/sessionChart";
import SideNav from "../../components/sideNav";
import { getData } from "../../service/formatingData";
import "./dashboard.css"

/**
 * A component which is used to create the main page
 * @returns {JSX.Element}
 */
const Dashboard = () => {
    const [userData, setUserData] = useState({})

    // get the user id
    const userParams = useParams()
    const userId = userParams.id

    // call api to get all info related to user
    useEffect(() => {
        const fetchData = async () => {
            // to get data form the mock change true to false
            const result = await getData(userId, true)
            setUserData(result)
        }
        fetchData()
    }, [userId])

    return (
        <>
            <Header />
            <main className="dasboard-main">
                <SideNav />
                <div className="content-wrapper">
                    {Object.keys(userData).length > 0 ?
                        <>
                            <div className="content-title-wrapper">
                                <h3 className="content-title">Bonjour <span className="content-title-username">{ userData.firstName }</span></h3>
                                <h4 className="content-title-desc">Félicitation ! Vous avez explosé vos objectifs hier 👏</h4>
                            </div>
                            <div className="graph-wrapper">
                                <div className="left-col">
                                    <div className="activity-graph">
                                        <ActivityChart activity={userData.activity}/>
                                    </div>
                                    <div className="small-graph">
                                        <SessionChart session={userData.sessions} />
                                        <IntensityChart performance={userData.performance} />
                                        <ScoreChart userData={userData.todayScore} />
                                    </div>
                                </div>
                                <div className="right-col">
                                    <CustomCards cardData={userData.keyData} />
                                </div>
                            </div>
                        </>
                    :
                        <div className="content-title-wrapper">
                                <h3 className="content-title">Les données n'ont pas été <span className="content-title-username">chargées.</span></h3>
                                <h4 className="content-title-desc">Veuillez actualisez la page ou appuyer sur ce bouton 👇</h4>
                                <div className="buton-container">
                                    <button className="reload-btn" onClick={() => window.location.reload()}>
                                        Rafraichir
                                    </button>
                                </div>
                        </div>
                    }

                </div>
            </main>
        </>
    )
}

export default Dashboard