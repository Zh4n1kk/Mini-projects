import { NavLink } from 'react-router'
import useStoreAdmin from '../../store/store'
import './Header.css'

const Header = () => {
  const { activeLink,setActiveLink } = useStoreAdmin()

  return (
    <div className="header z-10">
      <div className='w-[70%] m-auto flex justify-between'>
    <div>Turtle Pizza Admin</div>
      <div className="flex gap-3">
        <NavLink to={'/dishes'} className={`header_link ${activeLink === 'Dishes' ? 'header_active' : ''}`} onClick={() => setActiveLink('Dishes')}>Dishes</NavLink>
        <NavLink to={'/orders'} className={`header_link ${activeLink === 'Orders' ? 'header_active' : ''}`} onClick={() => setActiveLink('Orders')}>Orders</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Header