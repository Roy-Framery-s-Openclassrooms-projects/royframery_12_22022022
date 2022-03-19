import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
// CSS
import './Score.scss'

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

const CustomLabel = ({ data }) => {
    const score = data[0].value

    return (
        <div className="score__label">
            <p className="score__number">{score}%</p>
            <p className="score__text">de votre objectif</p>
        </div>
    )
}

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
                        innerRadius={'70%'}
                        outerRadius={'80%'}
                        cornerRadius={'50%'}
                    >
                        <Cell fill="#FF0000" stroke="#e60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>

                    <Pie
                        data={[{ name: 'circle', value: 100 }]}
                        dataKey="value"
                        startAngle={210}
                        endAngle={-210}
                        outerRadius={'70%'}
                        fill="white"
                    />
                    <Legend
                        verticalAlign="top"
                        content={renderLegend}
                        wrapperStyle={{ top: '10%', left: '12%' }}
                    />
                </PieChart>
            </ResponsiveContainer>
            <CustomLabel data={data} />
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
