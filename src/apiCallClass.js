import React from "react"
import axios from "axios"

export default class ApiCall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: null,
            userActivity: null,
            userPerformance: null,
            userSessions: null
        }
    }

    componentDidMount(){
        //api call
        const id = 12
        //this.props.match.params

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
                this.setState({ userActivity: res1.data.data.sessions })
            }
            if(res2.status === 200) {
                this.setState({ userPerformance: res2.data.data.data })
            }
            if(res3.status === 200) {
                this.setState({ userSessions: res3.data.data.sessions })
            }
            if(res4.status === 200) {
                this.setState({userData: res4.data.data})
            }
        }))
    }

    render() {
        console.log(this.state)
        return (
            <>

            </>
        )
    }
}