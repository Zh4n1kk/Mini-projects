import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import Careers from './pages/Careers/Careers.tsx'
import Services from './pages/Services/Services.tsx'
import Contacts from './pages/Contacts/Contacts.tsx'
import Faq from './pages/Faq/Faq.tsx'
import Admin from './pages/Admin/Admin.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <header className='header'>
  <NavLink to={'/home'}>Home</NavLink>
  <NavLink to={'/aboutus'}>About us</NavLink>
  <NavLink to={'/services'}>Services</NavLink>
  <NavLink to={'/contacts'}>Contacts</NavLink>
  <NavLink to={'/careers'}>Careers</NavLink>
  <NavLink to={'/faq'}>FAQ</NavLink>
  <NavLink to={'/admin'} style={{color: 'red'}}>Admin</NavLink>
  </header>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
  </BrowserRouter>
  </StrictMode>
)
