import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./index.css"
import PropTypes from "prop-types"

/**
 * A component which shows the session time over the week in a line chart
 * @component 
 * @returns (
 *  <SessionChart session={data} />
 * )
 */
const SessionChart = ({session}) => {

        const data = session

        // return only session length
        let sessionCollection = []
        data.map((e) => {
            return sessionCollection.push(e.sessionLength)
        })

        // find the max value of data
        let YAxisMax = 0
        if(YAxisMax === 0) {
            YAxisMax = Math.max(...sessionCollection) + 5
        }

        // create a custom tooltip
        const CustomToolTip = ({active, payload}) => {
            if(active && payload && payload.length) {
                return (
                    <div className="custom-linechart-tooltip">
                        <p className="custom-linechart-tooltip-label">{`${payload[0].value}`} min</p>
                    </div>
                )
            }
        }

        // change the Xaxis tick
        const dayOfTheWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        const formatXAxis = (tickItem) => {
            return dayOfTheWeek[tickItem - 1]
        }

        return (
            <div className="linechart-wrapper">
                <h2 className="linechart-title">Durée moyenne des sessions</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                    >   
                        <YAxis 
                            hide={true} 
                            domain={[-2, YAxisMax]}
                            padding={{top: 60}}
                        />
                        <XAxis 
                            dataKey="day"
                            tickLine={false}
                            tickFormatter={formatXAxis}
                            opacity={0.7}
                            tick={{ fill: '#FFFFFF' }}
                            axisLine={false}
                            padding={{left: 8, right: 8}}
                        />
                        <Tooltip content={<CustomToolTip />} />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="#FFFFFF"
                            strokeWidth={3}
                            dot={false}
                            opacity={0.7}
                            activeDot={{
                                strokeOpacity: 1,
                                strokeWidth: 5
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
}

SessionChart.propTypes = {
    session: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
    }))
}

export default SessionChart