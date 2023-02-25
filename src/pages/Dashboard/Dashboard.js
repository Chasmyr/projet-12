import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/activityChart";
import CustomCards from "../../components/card";
import Header from "../../components/header";
import IntensityChart from "../../components/intensityChart";
import ScoreChart from "../../components/scoreChart";
import SessionChart from "../../components/sessionChart";
import SideNav from "../../components/sideNav";
import Api from "../../model/api";
import "./dashboard.css"

const Dashboard = () => {
    const [userData, setUserData] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userSessions, setUserSessions] = useState(null)

    // get the user id
    const userParams = useParams()
    const userId = userParams.id

    // creating all func to fetch data
    async function settingAllRequiredData(id) {

        const apiToCall = new Api()

        // to change between mocked data and api call uncomment the next line
        // apiToCall.setIsCallingBackEnd(false)

        const res1 = await apiToCall.getUser(id)
        if(res1.status !== undefined && res1.status === 200) {
            setUserData(res1.data.data) 
        } else {
            setUserData(res1)
        }

        const res2 = await apiToCall.getUserActivity(id)
        if(res2.status !== undefined && res2.status === 200) {
            setUserActivity(res2.data.data.sessions)
        } else {
            setUserActivity(res2.sessions)
        }

        const res3 = await apiToCall.getUserPerformance(id)
        if(res3.status !== undefined && res3.status === 200) {
            setUserPerformance(res3.data.data.data)
        } else {
            setUserPerformance(res3.data)
        }

        const res4 = await apiToCall.getUserSessions(id)
        if(res4.status !== undefined && res4.status === 200) {
            setUserSessions(res4.data.data.sessions)
        } else {
            setUserSessions(res4.sessions)
        }
    }

    // call api to get all info related to user
    useEffect(() => {
        settingAllRequiredData(userId)
    }, [userId])

    return (
        <>
            <Header />
            <main className="dasboard-main">
                <SideNav />
                <div className="content-wrapper">
                    {userData !== null && userActivity !== null && userPerformance !== null && userSessions !== null ?
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