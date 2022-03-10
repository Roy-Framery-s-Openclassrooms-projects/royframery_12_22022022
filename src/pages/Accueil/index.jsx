import { Link } from 'react-router-dom'
// CSS
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <ul className="home__links">
                <div className="home__links-api">
                    <div className="home__links-api-links">
                        <Link
                            to="/profil/12"
                            className="home__link home__link-api"
                        >
                            <li className="home__item">User with id = 12</li>
                        </Link>
                        <Link
                            to="/profil/18"
                            className="home__link home__link-api"
                        >
                            <li className="home__item">User with id = 18</li>
                        </Link>
                    </div>
                    <div className="home__links-api-infos">
                        <h2 className="home__links-api-infos-title">
                            Use these two left buttons with the Api :{' '}
                        </h2>
                        <p>
                            <code>cd back/</code>
                        </p>
                        <p>
                            <code>npm run dev</code>
                        </p>
                    </div>
                </div>
                <Link to="/profil/mock" className="home__link home__link-mock">
                    <li className="home__item">User with mocked data</li>
                </Link>
            </ul>
        </div>
    )
}

export default Home
