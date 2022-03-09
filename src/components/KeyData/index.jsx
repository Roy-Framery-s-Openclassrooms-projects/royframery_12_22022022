import PropTypes from 'prop-types'
import './KeyData.scss'

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
