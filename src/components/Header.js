import { Link } from "react-router-dom"
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div  className={styles.header}>
                <div className="pt1">

                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </nav>
                </div>

                <button> + Submit</button>
            </div>
        </header>
    )
}

export default Header