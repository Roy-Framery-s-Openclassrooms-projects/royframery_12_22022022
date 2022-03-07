import PropTypes from 'prop-types'
// CSS
import './DashboardHeader.scss'

const DashboardHeader = ({ firstname }) => {
    return (
        <div className="dashboardHeader">
            <h1 className="dashboardHeader__title">
                Bonjour
                <span className="dashboardHeader__name">{' ' + firstname}</span>
            </h1>
            <p className="dashboardHeader__text">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    )
}

DashboardHeader.propTypes = {
    firstname: PropTypes.string.isRequired,
}

export default DashboardHeader
