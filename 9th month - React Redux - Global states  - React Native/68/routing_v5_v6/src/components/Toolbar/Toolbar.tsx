import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Toolbar.module.css';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const Toolbar = () => {
    return (
        <header className={styles.Toolbar}>
            <Link to="/" className={styles.ToolbarLogo}>
                <Logo/>
            </Link>
            <nav>
                <NavigationMenu />
            </nav>
        </header>
    )
};

export default Toolbar;