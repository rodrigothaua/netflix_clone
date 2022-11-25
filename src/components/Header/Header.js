import { Link } from "react-router-dom"
import styles from './Header.module.css'

const Logo = "img/netflix_logo.png"

function Header() {
    return (
        <header>
            <div  className={styles.header}>
                <div className={styles.logo}>
                    <img src={Logo} />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Séries</Link></li>
                        <li><Link to="/filmes">Filmes</Link></li>
                        <li><Link to="/bombando">Bombando</Link></li>
                        <li><Link to="/minhalista">Minha lista</Link></li>
                        <li><Link to="/navegarporidiomas">Navegar por idiomas</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header