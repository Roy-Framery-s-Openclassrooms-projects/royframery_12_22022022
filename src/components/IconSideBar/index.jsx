import PropTypes from 'prop-types'
// CSs
import './IconSideBar.scss'

const IconSideBar = ({ image }) => {
    return (
        <li className="icon">
            <img src={image} alt="" className="icon__img" />
        </li>
    )
}

IconSideBar.propTypes = {
    image: PropTypes.string.isRequired,
}

export default IconSideBar
