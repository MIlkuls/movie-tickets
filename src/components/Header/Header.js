import Link from "next/link";
import styles from './style.module.css'

export const Header = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                    <Link href={'/'}>Some Logo</Link>
                </li>
                <li className={styles.navitem}>
                    <Link href={'/movies'}>Movies</Link>
                </li>
                <li className={styles.navitem}>
                    <Link href={'/showtimes'}>Showtimes </Link>
                </li>
            </ul>
        </nav>
    )
}