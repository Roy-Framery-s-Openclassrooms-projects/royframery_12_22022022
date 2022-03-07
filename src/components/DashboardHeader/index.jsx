import GetUserById from '../../services/api'
// Class
import User from '../../class/User'
// CSS
import './DashboardHeader.scss'

const DashboardHeader = () => {
    const { isLoading, user } = GetUserById(12)

    const userInfos = !isLoading ? new User(user.userInfos) : ''

    return (
        <div className="dashboardHeader">
            {isLoading ? (
                <p>chargement...</p>
            ) : (
                <h1 className="dashboardHeader__title">
                    Bonjour
                    <span className="dashboardHeader__name">
                        {' ' + userInfos.firstName}
                    </span>
                </h1>
            )}
            <p className="dashboardHeader__text">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    )
}

export default DashboardHeader
