import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
// CSS
import './Score.scss'

/**
 * @description function to custom the legend of the chart
 * @param {object} props - the props of the chart
 * @returns { HTMLElement }
 */
const renderLegend = (props) => {
    const { payload } = props

    return (
        <ul>
            {payload.map((payload, index) => {
                if (payload.value === 'score') {
                    return (
                        <li key={`item-${index}`} className="score__legend">
                            Score
                        </li>
                    )
                }
                return null
            })}
        </ul>
    )
}

/**
 *
 * @description component that show the text about the user's score
 * @param { Object } data - the score of the user
 * @returns { HTMLElement }
 */
const CustomLabel = ({ data }) => {
    const score = data.value

    return (
        <div className="score__label">
            <p className="score__number">{score}%</p>
            <p className="score__text">de votre objectif</p>
        </div>
    )
}

/**
 * @description Component that show a pie chart of the user's goal score
 * @component
 * @param {number} score - the score of the user
 * @example
 * const score = 0.12
 * @returns { HTMLElement }
 */

const Score = ({ score }) => {
    const percentageScore = score * 100

    const data = [
        { name: 'score', value: percentageScore },
        { name: 'total', value: 100 - percentageScore },
    ]

    return (
        <div className="score">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={210}
                        endAngle={-210}
                        innerRadius="70%"
                        outerRadius="80%"
                        cornerRadius="50%"
                    >
                        <Cell fill="#FF0000" stroke="#e60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>

                    <Pie
                        data={[{ name: 'circle', value: 100 }]}
                        dataKey="value"
                        startAngle={210}
                        endAngle={-210}
                        outerRadius="70%"
                        fill="white"
                    />
                    <Legend
                        verticalAlign="top"
                        content={renderLegend}
                        wrapperStyle={{ top: '10%', left: '12%' }}
                    />
                </PieChart>
            </ResponsiveContainer>
            <CustomLabel data={data[0]} />
        </div>
    )
}

Score.prototypes = {
    score: PropTypes.number.isRequired,
}

CustomLabel.prototypes = {
    data: PropTypes.object.isRequired,
}

export default Score
