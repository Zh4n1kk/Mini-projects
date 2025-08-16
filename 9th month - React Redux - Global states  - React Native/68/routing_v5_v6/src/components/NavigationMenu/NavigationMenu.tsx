import { NavLink } from "react-router-dom";
import styles from './NavigationMenu.module.css';
import { CSSProperties } from "react";

const NavigationMenu = () => {

    const getActiveStyles = ({isActive}: {isActive: boolean}): CSSProperties | undefined => {
        if (isActive) {
            return {
                backgroundColor: '#8f5c2c',
                borderBottom: '4px solid #40a4c8',
                color: 'white'
            }
        }
    }
    return (
        <ul className={styles.NavigationMenu}>
            <li className={styles.NavigationMenuItem}>
                <NavLink style={getActiveStyles} to="/">Burger Builder</NavLink>
            </li>
            <li className={styles.NavigationMenuItem}>
                <NavLink style={getActiveStyles} to="/orders">Orders</NavLink>
            </li>
        </ul>
    )
};

export default NavigationMenu;