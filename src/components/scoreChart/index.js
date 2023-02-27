import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import './index.css'
import PropTypes from "prop-types"

/**
 * A component that shows how well today's goal is being achieved in a radial bar graph
 * @component
 * @returns {JSX.Element}
 */
const ScoreChart = ({userData}) => {

        const data = [
            {
                value: userData * 100
            }
        ]

        return (
            <div className='radialBarChart-wrapper'>
                <h2 className="radialBarchart-title">Score</h2>
                <ResponsiveContainer width="100%" height="100%">
                   <RadialBarChart 
                    startAngle={90}
                    endAngle={450}
                    innerRadius="70%"
                    barSize={10}
                    data={data}
                    > 
                        <PolarAngleAxis 
                            type='number'
                            domain={[0,100]}
                            tick={false}
                        />
                        <RadialBar 
                            cornerRadius="10"
                            dataKey="value"
                            fill='#E60000'
                        />
                        
                        <text
                            fontWeight="700"
                            fontSize={28}
                            fill="#282D30"
                            x="50%"
                            y="48%"
                            textAnchor="middle"
                        >
                            {userData * 100}%
                        </text>
                        <text
                            fontSize="16"
                            fontWeight="500"
                            fill="#74798C"
                            x="50%"
                            y="58%"
                            textAnchor="middle"
                        >
                            de votre
                        </text>
                        <text
                            fontSize="16"
                            fontWeight="500"
                            fill="#74798C"
                            x="50%"
                            y="68%"
                            textAnchor="middle"
                        >
                            objectif
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        )
}

ScoreChart.propTypes = {
    userData: PropTypes.number.isRequired
}

export default ScoreChart

