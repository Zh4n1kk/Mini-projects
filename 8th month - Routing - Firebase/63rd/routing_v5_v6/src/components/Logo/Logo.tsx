import './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = () => (
 <div className="Logo">
   <img src={burgerLogo} alt="MyBurger" />
 </div>
);
export default Logo;