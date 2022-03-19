import PropTypes from 'prop-types'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Text,
} from 'recharts'
// Class
import Performance from '../../class/Performance'
// CSS
import './Performance.scss'

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 30}
            x={x + (x - cx) / 30}
            fontSize="clamp(8px, 0.8vw, 12px)"
            fill="#FFF"
        >
            {payload.value}
        </Text>
    )
}

const Performances = ({ performanceData }) => {
    const userPerformances = new Performance(
        performanceData.kind,
        performanceData.data
    )

    return (
        <div className="radar">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={userPerformances.performance}
                    innerRadius={10}
                    startAngle={30}
                    endAngle={-330}
                >
                    <PolarGrid radialLines={false} stroke="#FFF" />
                    <PolarAngleAxis
                        dataKey="kind"
                        tickLine={false}
                        tick={(props) => renderPolarAngleAxis(props)}
                    />
                    <PolarRadiusAxis axisLine={false} tick={false} />
                    <Radar
                        dataKey="value"
                        fill="rgba(255, 1, 1)"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

Performances.prototypes = {
    performanceData: PropTypes.object.isRequired,
}

export default Performances
