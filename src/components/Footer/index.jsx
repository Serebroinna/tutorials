import styles from './Footer.module.css';
import logo from '../Header/groovy.png';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className={styles.footer}>
            <Link to="/"><img src={logo} alt="" className={styles.logo}/> </Link>
        </footer>
    );
};

export default Footer;