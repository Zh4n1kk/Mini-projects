import { NavLink } from "react-router-dom";
import styles from './NavigationMenu.module.css';

const NavigationMenu = () => {
    return (
        <ul className={styles.NavigationMenu}>
            <li className={styles.NavigationMenuItem}>
                <NavLink to="/">Burger Builder</NavLink>
            </li>
            <li className={styles.NavigationMenuItem}>
                <NavLink to="/orders">Orders</NavLink>
            </li>
        </ul>
    )
};

export default NavigationMenu;