import PropTypes from 'prop-types'
// Recharts
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Dot,
} from 'recharts'
// Class
import AverageSessionsClass from '../../class/AverageSessions'
// CSS
import './AverageSessions.scss'

/**
 *
 * @description Component to custom the tooltip of the chart
 * @param { Boolean } active - true if line hovered over, false if not
 * @param { Object } payload - the data data of overflown line
 * @returns { HTMLElement }
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="average-sessions__tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        )
    }

    return null
}

/**
 *
 * @description Component that show a custom dot when the dot is active on the chart
 * @param { object } props - The properties of the active dot
 * @returns { HTMLElement }
 */
const CustomActiveDot = (props) => {
    const { cy, cx } = props

    return (
        <>
            <Dot r={4} cy={cy} cx={cx + 12} fill="#FFF" />
            <Dot r={8} cy={cy} cx={cx + 12} fill="rgba(255, 255, 255, 0.3)" />
        </>
    )
}

/**
 *
 * @description function to custom the background color of the chart according to the point flown over
 * @param { Object } e - Properties of the event
 */
const handleColorBackground = (e) => {
    if (e.isTooltipActive === true) {
        let div = document.querySelector('.average-sessions')
        let windowWidth = div.clientWidth
        let mouseXpercentage = Math.round(
            ((e.activeCoordinate.x + 12) / windowWidth) * 100
        )
        div.style.background = `linear-gradient(90deg, rgba(255,0,0) ${mouseXpercentage}%, rgba(230,0,0) ${mouseXpercentage}%, rgba(230,0,0) 100%)`
    }
}

/**
 *
 * @description Function to custom the Legend of the chart
 * @param { Object } props - the properties of the chart's legend
 * @returns { HTMLElement }
 */
const renderLegend = (props) => {
    const { payload } = props

    return (
        <ul>
            {payload.map((index) => (
                <li key={`item-${index}`} className="average-sessions__legend">
                    Durée moyenne des sessions
                </li>
            ))}
        </ul>
    )
}

/**
 * @description Component of a line chart that show average duration in minutes of user's sessions
 * @param { Object } averageSessionsData
 * @param { Array.<Objects> } averageSessionsData.sessions - the sessions of the user
 * @param { Number } averageSessionsData.userId - the Id of the user
 * @returns { HTMLElement }
 */
const AverageSessions = ({ averageSessionsData }) => {
    let sessions = new AverageSessionsClass(averageSessionsData.sessions)

    return (
        <div className="average-sessions">
            <ResponsiveContainer>
                <LineChart
                    width={730}
                    height={263}
                    data={sessions.sessions}
                    margin={{ top: 10, right: 25, left: 20, bottom: 5 }}
                    onMouseMove={(e) => {
                        handleColorBackground(e)
                    }}
                >
                    <CartesianGrid
                        vertical={false}
                        horizontal={false}
                        axisLine={false}
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: '#FFF',
                            fontSize: '12px',
                            opacity: 0.5,
                        }}
                        allowDataOverflow={true}
                    />
                    <YAxis hide={true} domain={[0, 'dataMax + 20']} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Legend
                        verticalAlign="top"
                        wrapperStyle={{ left: '14%', top: '11%' }}
                        content={renderLegend}
                    />
                    <defs>
                        <linearGradient
                            id="colorSessionLength"
                            x1="1"
                            y1="0"
                            x2="0"
                            y2="0"
                        >
                            <stop
                                offset="10%"
                                stopColor="#FFF"
                                stopOpacity={1}
                            />
                            <stop
                                offset="90%"
                                stopColor="#FFF"
                                stopOpacity={0.5}
                            />
                        </linearGradient>
                    </defs>
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorSessionLength)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={<CustomActiveDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

AverageSessions.propTypes = {
    averageSessionsData: PropTypes.object.isRequired,
}

export default AverageSessions
