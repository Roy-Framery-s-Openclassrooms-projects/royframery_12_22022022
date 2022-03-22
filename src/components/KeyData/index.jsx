import PropTypes from 'prop-types'
import './KeyData.scss'

/**
 *
 * @description Component that show a user's key data
 * @param { String } image - Image's name of the key data
 * @param { Number } value - Value of the key data
 * @param { String } title - Title of the key data
 * @param { String } color - Color of the icon's background of the key data
 * @param { String } unity - Value's unity of the key data
 * @returns { HTMLElement }
 */
const KeyData = ({ image, value, title, color, unity }) => {
    return (
        <div className="keyData">
            <div className="keyData__icon">
                <div className={'keyData__img keyData__img--' + color}>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="keyData__text">
                <p className="keyData__value">{value + unity}</p>
                <p className="keyData__title">{title}</p>
            </div>
        </div>
    )
}

KeyData.propTypes = {
    image: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    unity: PropTypes.string,
}

export default KeyData
