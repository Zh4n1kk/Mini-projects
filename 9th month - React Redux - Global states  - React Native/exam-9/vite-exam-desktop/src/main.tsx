import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.tsx'
import AddNew from './pages/AddNew/AddNew.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/new-' element={<AddNew />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
