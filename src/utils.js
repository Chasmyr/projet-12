import axios from "axios"
import { USER_ACTIVITY, USER_DATA, USER_PERFORMANCE, USER_SESSIONS } from "./mock/data"

// get and set data from api
export const fetchApi = (id, setUserActivity, setUserPerformance, setUserSessions, setUserData, setIsLoading) => {
    const userActivity = "http://localhost:3000/user/" + id + "/activity"
    const userPerformance = "http://localhost:3000/user/" + id + "/performance"
    const userSessions = "http://localhost:3000/user/" + id + "/average-sessions"
    const user = "http://localhost:3000/user/" + id

    const getUserActivity = axios.get(userActivity)
    const getUserPerformance = axios.get(userPerformance)
    const getUserSessions = axios.get(userSessions)
    const getUser = axios.get(user)

    axios.all([getUserActivity, getUserPerformance, getUserSessions, getUser]).then(axios.spread((res1, res2, res3, res4) => {
        if(res1.status === 200) {
            setUserActivity(res1.data.data.sessions)
        }
        if(res2.status === 200) {
            setUserPerformance(res2.data.data.data)
        }
        if(res3.status === 200) {
            setUserSessions(res3.data.data.sessions)
        }
        if(res4.status === 200) {
            setUserData(res4.data.data)
        }
        setIsLoading(false)
    }))
}

// get and set data from mocked data
export const fetchMockedData = (id, setUserActivity, setUserPerformance, setUserSessions, setUserData, setIsLoading) => {
    
    const getUser = USER_DATA.find(obj => obj.id.toString() === id)
    const getUserActivity = USER_ACTIVITY.find(item => item.userId.toString() === id)
    const getUserSessions = USER_SESSIONS.find(item => item.userId.toString() === id)
    const getUserPerformance = USER_PERFORMANCE.find(item => item.userId.toString() === id)

    if(getUser !== undefined) {
        setUserData(getUser)
        setUserActivity(getUserActivity.sessions)
        setUserSessions(getUserSessions.sessions)
        setUserPerformance(getUserPerformance.data)
        setIsLoading(false)
    }
    
}