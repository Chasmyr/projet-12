import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import './index.css'
import PropTypes from "prop-types"

/**
 * Component which shows the performance of the user in a Radar Chart
 * @component
 * @returns {JSX.Element}
 */
const IntensityChart = ({performance}) => {
    
        const data = performance.value

        // change the tick
        const formatXAxis = (tickItem) => {
            return performance.categories[tickItem - 1]
        }
    
        return (
            <div className='radarchart-wrapper'>
                <ResponsiveContainer 
                    width="100%"
                    height="100%"
                >
                    <RadarChart 
                        cx="50%" 
                        cy="50%" 
                        outerRadius="67%" 
                        data={data}
                    >
                        <PolarGrid radialLines={false} stroke="#FFFFFF" />
                        <PolarAngleAxis 
                            dataKey="kind"
                            tick={{ fill: "white", fontSize: 12}}
                            tickFormatter={formatXAxis}
                        />
                        <Radar 
                            name="mike"
                            dataKey="value"
                            stroke="#FF0101B2" 
                            fill="#FF0101B2" 
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    
}

IntensityChart.propTypes = {
    value: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired
    })),
    categories: PropTypes.arrayOf(PropTypes.string)
}

export default IntensityChart