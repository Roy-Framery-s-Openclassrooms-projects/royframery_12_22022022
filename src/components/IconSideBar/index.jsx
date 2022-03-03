// CSs
import './IconSideBar.scss'

const IconSideBar = ({ image }) => {
    return (
        <li className="icon">
            <img src={image} alt="" className="icon__img" />
        </li>
    )
}

export default IconSideBar
