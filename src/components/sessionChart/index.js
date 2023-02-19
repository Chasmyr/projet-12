import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./index.css"

const SessionChart = ({session}) => {

    if(session !== null) {

        const data = session.data.sessions

        console.log(data)

        return (
            <>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart>
                        <CartesianGrid />
                        <XAxis />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line />
                    </LineChart>
                </ResponsiveContainer>
            </>
        )
    }
}

export default SessionChart