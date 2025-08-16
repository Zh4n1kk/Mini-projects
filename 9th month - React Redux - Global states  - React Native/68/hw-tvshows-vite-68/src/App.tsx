import { Route, Routes } from 'react-router'
import './App.css'
import MoviePage from './pages/MoviePage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/shows/:id' element={<MoviePage />}/>
    </Routes>
  )
}

export default App
