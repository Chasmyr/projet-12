import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import './index.css'

const IntensityChart = ({performance}) => {

    if(performance !== null) {

        console.log(performance.data)
        const data = performance.data.data

        // change the tick
        const categories = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
        const formatXAxis = (tickItem) => {
            return categories[tickItem - 1]
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
    
}

export default IntensityChart