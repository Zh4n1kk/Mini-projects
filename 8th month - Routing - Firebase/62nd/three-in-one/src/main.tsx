import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router'
import MovieList from './pages/MovieList/MoviesList.tsx'
import ToDoList from './pages/ToDoList/ToDoList.tsx'
import PersonalNotes from './pages/PersonalNotes/PersonalNotes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <header className='header'>
  <NavLink to={'/movies'}>Movieist</NavLink>
  <NavLink to={'/todolist'}>Todoist</NavLink>
  <NavLink to={'/notes'}>Personal Notes</NavLink>
  </header>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/movies' element={<MovieList/>}/>
        <Route path='/todolist' element={<ToDoList/>}/>
        <Route path='/notes' element={<PersonalNotes/>}/>
      </Routes>
  </BrowserRouter>
  </StrictMode>
)
