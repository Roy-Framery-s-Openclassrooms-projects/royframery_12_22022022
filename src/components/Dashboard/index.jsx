import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// API
import {
    getUserById,
    getUserActivityById,
    getAverageSessionsById,
    getPerformanceById,
} from '../../services/api'
// Class
import User from '../../class/User'
// components
import DashboardHeader from '../DashboardHeader'
import Activity from '../Activity'
import KeyData from '../KeyData'
import AverageSessions from '../AverageSessions'
import Performances from '../Performance'
// CSS
import './Dashboard.scss'

const Dashboard = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [userActivity, setUserActivities] = useState([])
    const [averageSessions, setAverageSessions] = useState([])
    const [performance, setPerformance] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            const user = await getUserById(id)
            setUser(user)

            const useActivities = await getUserActivityById(id)
            setUserActivities(useActivities)

            const averageSessions = await getAverageSessionsById(id)
            setAverageSessions(averageSessions)

            const performance = await getPerformanceById(id)
            setPerformance(performance)

            setIsLoading(false)
        }
        fetch()
    }, [id])

    const userClass = !isLoading
        ? new User(
              user.userInfos.firstName,
              user.userInfos.lastName,
              user.userInfos.age,
              user.score ? user.score : user.todayScore,
              user.keyData.calorieCount,
              user.keyData.proteinCount,
              user.keyData.carbohydrateCount,
              user.keyData.lipidCount
          )
        : ''

    return (
        <div className="dashboard">
            {isLoading ? (
                <p>chargement...</p>
            ) : (
                <>
                    <DashboardHeader firstname={userClass.firstName} />
                    <div className="dashboard__charts">
                        <div className="dashboard__charts-left">
                            <Activity userActivity={userActivity} />
                            <AverageSessions
                                averageSessionsData={averageSessions}
                            />
                            <Performances performanceData={performance} />
                        </div>
                        <div className="dashboard__charts-right">
                            <KeyData
                                image="/energy.svg"
                                value={userClass.calorie}
                                title="Calories"
                                unity="kCal"
                                color="red"
                            />
                            <KeyData
                                image="/chicken.svg"
                                value={userClass.protein}
                                title="Proteines"
                                unity="g"
                                color="blue"
                            />
                            <KeyData
                                image="/apple.svg"
                                value={userClass.carbohydrate}
                                title="Glucides"
                                unity="g"
                                color="yellow"
                            />
                            <KeyData
                                image="/cheeseburger.svg"
                                value={userClass.lipid}
                                title="Lipides"
                                unity="g"
                                color="pink"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Dashboard
