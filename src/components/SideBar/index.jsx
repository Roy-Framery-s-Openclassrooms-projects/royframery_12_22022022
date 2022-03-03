// component
import IconSideBar from '../IconSideBar'
// CSS
import './SideBar.scss'

const currentYear = new Date().getFullYear()

const SideBar = () => {
    return (
        <div className="sideBar">
            <nav className="sideBar__nav">
                <ul className="sideBar__icons">
                    <IconSideBar image="/yoga.svg" />
                    <IconSideBar image="/swimmer.svg" />
                    <IconSideBar image="/biker.svg" />
                    <IconSideBar image="/dumbbell.svg" />
                </ul>
            </nav>
            <p className="sideBar__text">
                {'Copiryght, SportSee ' + currentYear}
            </p>
        </div>
    )
}

export default SideBar
