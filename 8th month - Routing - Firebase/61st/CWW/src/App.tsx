import { BrowserRouter, Route, Routes } from "react-router"
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element=''/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
