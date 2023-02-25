import axios from "axios";
import { USER_ACTIVITY, USER_DATA, USER_PERFORMANCE, USER_SESSIONS } from "../mock/data"


export default class Api {
    constructor() {
        this.isCallingBackEnd = true
    }

    setIsCallingBackEnd(boolean) {
        this.isCallingBackEnd = boolean
    }

    async getUser (id) {
        
        if(this.isCallingBackEnd) {
            return await axios.get("http://localhost:3000/user/" + id)
            .catch((error) => console.log(error))
        } else {
            return USER_DATA.find(obj => obj.id.toString() === id)
        }
    }
    
    async getUserActivity (id) {

        if(this.isCallingBackEnd) {
            return await axios.get("http://localhost:3000/user/" + id + "/activity")
            .catch((error) => console.log(error))
        } else {
            return USER_ACTIVITY.find(item => item.userId.toString() === id)
        }
    }

    async getUserPerformance (id) {

        if(this.isCallingBackEnd) {
            return await axios.get("http://localhost:3000/user/" + id + "/performance")
            .catch((error) => console.log(error))
        } else {
            return USER_PERFORMANCE.find(item => item.userId.toString() === id)
        }
    }

    async getUserSessions (id) {

        if(this.isCallingBackEnd) {
            return await axios.get("http://localhost:3000/user/" + id + "/average-sessions")
            .catch((error) => console.log(error))
        } else {
            return USER_SESSIONS.find(item => item.userId.toString() === id)
        }
    }
}