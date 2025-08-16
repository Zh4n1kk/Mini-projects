import { NavLink } from "react-router"
import './SideNav.css'

const SideNav = () => {
    return (
    <div className="sidenav">
    <NavLink to={`/`}>All</NavLink>
    <NavLink to={`/quotes/star-wars`}>Star-Wars</NavLink>
    <NavLink to={`/quotes/famous`}>Famous people</NavLink>
    <NavLink to={`/quotes/saying`}>Saying</NavLink>
    <NavLink to={`/quotes/humour`}>Humour</NavLink>
    <NavLink to={`/quotes/motivational`}>Motivational</NavLink>
    </div>
    )
}

export default SideNav