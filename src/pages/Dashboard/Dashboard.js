import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/activityChart";
import CustomCards from "../../components/card";
import Header from "../../components/header";
import IntensityChart from "../../components/intensityChart";
import ScoreChart from "../../components/scoreChart";
import SessionChart from "../../components/sessionChart";
import SideNav from "../../components/sideNav";
import { fetchApi, fetchMockedData} from "../../utils";
import "./dashboard.css"

const Dashboard = () => {
    const [userData, setUserData] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userSessions, setUserSessions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // get the user id
    const userParams = useParams()
    const userId = userParams.id

    // call api to get all info related to user
    useEffect(() => {

        // use this to get data from the api
        fetchApi(userId, setUserActivity, setUserPerformance, setUserSessions, setUserData, setIsLoading)

        // use this to get data from the mock
        // fetchMockedData(userId, setUserActivity, setUserPerformance, setUserSessions, setUserData, setIsLoading)
    }, [userId])

    return (
        <>
            <Header />
            <main className="dasboard-main">
                <SideNav />
                <div className="content-wrapper">
                    {!isLoading ? 
                        <>
                            <div className="content-title-wrapper">
                                <h3 className="content-title">Bonjour <span className="content-title-username">{ userData.userInfos.firstName }</span></h3>
                                <h4 className="content-title-desc">Félicitation ! Vous avez explosé vos objectifs hier 👏</h4>
                            </div>
                            <div className="graph-wrapper">
                                <div className="left-col">
                                    <div className="activity-graph">
                                        <ActivityChart activity={userActivity}/>
                                    </div>
                                    <div className="small-graph">
                                        <SessionChart session={userSessions} />
                                        <IntensityChart performance={userPerformance} />
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