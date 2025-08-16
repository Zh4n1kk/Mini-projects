import { Outlet } from "react-router-dom";
import Toolbar from "../../Toolbar/Toolbar";
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <>
            <Toolbar />
            <main className={styles.LayoutContent}>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;