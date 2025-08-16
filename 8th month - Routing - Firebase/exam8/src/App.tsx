import {NavLink, Route, Routes} from "react-router";
import Home from "./pages/Home/Home.tsx";
import './App.css'
import AddQuote from "./pages/AddQuote/AddQuote.tsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.tsx";
import EditQuote from "./pages/EditQuote/EditQuote.tsx";

function App() {
  return (
    <div className={'container'}>
      <header className={'header'}>
          <p>Quotes Central</p>
          <div className={'header_links'}>
              <NavLink to={'/'}>Quotes</NavLink>
              <NavLink to={'/add-quote'}>Submit new quote</NavLink>
          </div>
      </header>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/quotes/:categoryId"  element={<CategoryPage />}/>
          <Route path='/quotes/:id/edit' element={<EditQuote/>}/>
          <Route path='/add-quote' element={<AddQuote/>}/>
      </Routes>
    </div>
  )
}

export default App
