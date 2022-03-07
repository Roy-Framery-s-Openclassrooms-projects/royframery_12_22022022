import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import { GetUserActivityById } from '../../services/api'
// Class
import Activities from '../../class/Activities'
// CSS
import './Activity.scss'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip__calories">{payload[0].value + 'kg'}</p>
                <p className="tootip__kilogram">{payload[1].value + 'kcal'}</p>
            </div>
        )
    }

    return null
}

const Activity = () => {
    const { isLoading, userActivity } = GetUserActivityById(12)
    const Useractivities = !isLoading ? new Activities(userActivity) : []

    return (
        <div className="activity">
            {isLoading ? (
                <p>chargement...</p>
            ) : (
                <>
                    <div className="activity__title">Activité quotidienne</div>
                    <ResponsiveContainer>
                        <BarChart
                            width={500}
                            height={300}
                            data={Useractivities.formatedActivities}
                            barSize={7}
                            barGap={8}
                            margin={{
                                bottom: 60,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                tickMargin={15}
                            />
                            <YAxis
                                yAxisId="right"
                                dataKey="kilogram"
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                domain={['dataMin - 2', 'dataMax + 2']}
                                tickMargin={35}
                            />
                            <YAxis
                                yAxisId="left"
                                dataKey="calories"
                                orientation="left"
                                hide={true}
                            />

                            <Tooltip content={<CustomTooltip />} offset={50} />
                            <Legend
                                payload={[
                                    {
                                        value: 'Poids (kg)',
                                        type: 'circle',
                                        id: 'ID01',
                                    },
                                    {
                                        value: 'Calories brûlées (kCal)',
                                        type: 'circle',
                                        id: 'ID02',
                                        color: '#E60000',
                                    },
                                ]}
                                align="right"
                                verticalAlign="top"
                                iconSize={8}
                                wrapperStyle={{ top: '-50px', right: '-10px' }}
                            />
                            <Bar
                                yAxisId="right"
                                dataKey="kilogram"
                                fill="#282D30"
                                radius={[10, 10, 0, 0]}
                            />
                            <Bar
                                yAxisId="left"
                                dataKey="calories"
                                fill="#E60000"
                                radius={[10, 10, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    )
}

export default Activity
