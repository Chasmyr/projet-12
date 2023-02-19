import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/activityChart";
import Header from "../../components/header";
import SessionChart from "../../components/sessionChart";
import SideNav from "../../components/sideNav";
import { apiGet } from "../../utils";
import "./dashboard.css"

const Dashboard = () => {
    const [userName, setUserName] = useState('')
    const [actualData, setActualData] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userSessions, setUserSessions] = useState(null)
    // console.log(actualData)
    // console.log(userPerformance)

    // get the user id
    let userParams = useParams()
    const userId = userParams.id

    // call api to get all info related to user
    useEffect(() => {
        apiGet(`user/${userId}`).then(data => {
            setActualData(data)
            setUserName(data.data.userInfos.firstName)
        })
        apiGet(`user/${userId}/activity`).then(data => {
            setUserActivity(data)
        })
        apiGet(`user/${userId}/performance`).then(data => {
            setUserPerformance(data)
        })
        apiGet(`user/${userId}/average-sessions`).then(data => {
            setUserSessions(data)
        })
    }, [userId])

    return (
        <>
            <Header />
            <main className="dasboard-main">
                <SideNav />
                <div className="content-wrapper">
                    <div className="content-title-wrapper">
                        <h3 className="content-title">Bonjour <span className="content-title-username">{ userName }</span></h3>
                        <h4 className="content-title-desc">Félicitation ! Vous avez explosé vos objectifs hier 👏</h4>
                    </div>
                    <div className="graph-wrapper">
                        <div className="left-col">
                            <div className="activity-graph">
                                <ActivityChart activity={userActivity}/>
                            </div>
                            <div className="small-graph">
                                <SessionChart session={userSessions} />
                            </div>
                        </div>
                        <div className="right-col">

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard