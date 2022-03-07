import { GetUserById } from '../../services/api'
// Class
import User from '../../class/User'
// components
import DashboardHeader from '../DashboardHeader'
import Activity from '../Activity'
// CSS
import './Dashboard.scss'

const Dashboard = () => {
    const { isLoading, user } = GetUserById(12)

    const userInfos = !isLoading ? new User(user.userInfos) : ''

    return (
        <div className="dashboard">
            {isLoading ? (
                <p>chargement...</p>
            ) : (
                <>
                    <DashboardHeader firstname={userInfos.firstName} />
                    <div className="dashboard__charts">
                        <div className="dashboard__charts-left">
                            <Activity />
                        </div>
                        <div className="dashboard__charts-right"></div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Dashboard
