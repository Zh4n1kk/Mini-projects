import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.tsx'
import Hobbies from './pages/Hobbies/Hobbies.tsx'
import AboutMe from './pages/AboutMe/AboutMe.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <header className='header'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/Hobbies'>My Hobbies</NavLink>
    <NavLink to='/Aboutme'>About me</NavLink>
    </header> 
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Hobbies' element={<Hobbies />}/>
      <Route path='/Aboutme' element={<AboutMe />}/>
      <Route path='*' element={<div>You found a way to lose yourself in a 3 buttons...</div>}/>
    </Routes>
  </BrowserRouter>,
)
