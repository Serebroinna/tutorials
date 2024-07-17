import logo from './groovy.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';




function Header(){   
    return(
        <header className={styles.header}>
            <Link to="/"><img src={logo} alt="notfound" className={styles.logo}/></Link>
            <nav className={styles.navLinks}>
            <Link  to="/"><button className={styles.btnHeader}>Home</button></Link>
            <Link to="/add"><button className={styles.btnHeader}>Nuevo video</button></Link>
            </nav>
        </header>
    );
};

export default Header;