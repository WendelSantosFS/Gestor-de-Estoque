import { Link } from "react-router-dom";
import styles from './styles.module.css'

export default function Header () {
    return <header className={styles.styleHeader}>
            <h3>REACT STOCK</h3>
            <nav>
                <Link to={'/'}>Início</Link>
                <Link to={'/estoque'}>Itens</Link>
            </nav>
        </header>
}