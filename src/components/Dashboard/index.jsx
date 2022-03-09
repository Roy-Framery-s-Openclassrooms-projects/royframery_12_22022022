import { GetUserById } from '../../services/api'
// Class
import User from '../../class/User'
// components
import DashboardHeader from '../DashboardHeader'
import Activity from '../Activity'
import KeyData from '../KeyData'
// CSS
import './Dashboard.scss'

const Dashboard = () => {
    const { isLoading, user } = GetUserById(12)

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
                            <Activity />
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
