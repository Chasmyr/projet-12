import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./index.css"
import PropTypes from "prop-types"

/**
 * Component which shows the user's activity in a graph
 * @component
 * @returns {JSX.Element}
 */
const ActivityChart = ({activity}) => {

        const data = activity

        let kiloCollection = []
        data.map((e) => {
            return kiloCollection.push(e.kilogram) 
        })

        // checking if the number is even or odd
        // the objective is to have the YAxis going two by two
        let YAxisMin = 0
        if(YAxisMin === 0 && Math.min(...kiloCollection) % 2 === 0) {
            YAxisMin = Math.min(...kiloCollection) - 2
        } else if (YAxisMin === 0) {
            YAxisMin = Math.min(...kiloCollection) - 1
        }

        let YAxisMax = 0
        if(YAxisMax === 0 && Math.max(...kiloCollection) % 2 === 0) {
            YAxisMax = Math.max(...kiloCollection) + 2
        } else if (YAxisMax === 0) {
            YAxisMax = Math.max(...kiloCollection) + 1
        }

        // create a custom tooltip
        const CustomToolTip = ({active, payload}) => {
            if(active && payload && payload.length) {
                return (
                    <div className="custom-barchart-tooltip">
                        <p className="custom-barchart-tooltip-label">{`${payload[0].value}`}kg</p>
                        <p className="custom-barchart-tooltip-label">{`${payload[1].value}`}Kcal</p>
                    </div>
                )
            }
        }

        return (
            <div className="barchart-wrapper">
                <h2 className="barchart-title">Activité quotidienne</h2>
                <ResponsiveContainer width="95%" height="95%">
                    <BarChart 
                        data={data}
                        width={500}
                        heigt={300}
                        barGap={8}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                        <XAxis 
                            tickLine={false} 
                            tick={{ fill: '#9B9EAC' }} 
                            tickMargin={15}
                        />
                        <YAxis 
                            type="number" 
                            domain={[YAxisMin, YAxisMax]}
                            dataKey="kilogram"
                            orientation="right"
                            yAxisId="kilogram"
                            tickMargin={25}
                            tickLine={false}
                            tick={{ fill: '#9B9EAC' }}
                        />
                        <YAxis 
                            yAxisId="calories"
                            dataKey="calories"
                            hide={true}
                        />
                        <Tooltip content={<CustomToolTip />}/>
                        <Legend 
                            iconSize={8}
                            iconType="circle"
                            verticalAlign="top"
                            align="right"
                            height={50}
                        />
                        <Bar  dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0 ]} barSize={7} name="Poids (kg)" yAxisId="kilogram"/>
                        <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0 ]} barSize={7} maxBarSize={90} name="Calories Brûlées (kCal)" yAxisId="calories"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        ) 
}

ActivityChart.propTypes = {
    activity: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    }))
}

export default ActivityChart