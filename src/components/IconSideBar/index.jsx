import PropTypes from 'prop-types'
// CSs
import './IconSideBar.scss'

/**
 *
 * @description Compoent that show the icons in the side bar
 * @param { String } image - image of the icon
 * @returns
 */
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
