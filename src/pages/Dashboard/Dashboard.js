import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../utils";

const Dashboard = () => {
    const [userName, setUserName] = useState('')
    const [actualData, setActualData] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userSessions, setUserSessions] = useState(null)
    console.log(actualData)
    console.log(userActivity)
    console.log(userPerformance)
    console.log(userSessions)

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
        <div>
            <p>{ userName }</p>
        </div>
    )
}

export default Dashboard