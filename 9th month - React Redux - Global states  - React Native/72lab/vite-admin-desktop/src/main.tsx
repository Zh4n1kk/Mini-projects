import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Header from './components/Header/Header.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Dishes from './pages/Dishes/Dishes.tsx'
import Orders from './pages/Orders/Orders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/dishes'} />}/>
        <Route path='/dishes' element={<Dishes />} />
        <Route path='/orders' element={<Orders />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
