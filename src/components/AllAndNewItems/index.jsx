import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function AllAndNewItems ( {styleOut} ) {
    return (
        <div className={styles.btnsFunctions}>
            <Link className={styleOut} to={'/estoque'}>
                <p>
                    Todos os itens
                </p>
            </Link>
            <Link to={'/estoque/newItem'}>
                <p>
                    Novo item
                </p>
            </Link>
        </div>
    )
}