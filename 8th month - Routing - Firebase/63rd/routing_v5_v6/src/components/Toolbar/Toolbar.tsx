import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Toolbar.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Toolbar = () => (
	<header className="Toolbar">
		<Link to="/" className="Toolbar-logo">
			<Logo />
		</Link>
    <nav>
      <NavigationMenu />
    </nav>
	</header>
);

export default Toolbar;
