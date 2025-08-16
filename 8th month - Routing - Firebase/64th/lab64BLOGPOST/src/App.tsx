import {Navigate, NavLink, Route, Routes} from "react-router";
import Home from "./pages/Home/Home.tsx";
import './App.css'
import AddPosts from "./pages/AddPosts/AddPosts.tsx";
import About from "./pages/About/About.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import PostView from "./pages/PostView/PostView.tsx";
import PostEdit from "./pages/PostEdit/PostEdit.tsx";

function App() {
  return (
    <div className={'container'}>
      <header className={'header'}>
          <p>My blog</p>
          <div className={'header_links'}>
              <NavLink to={'/posts'}>Home</NavLink>
              <NavLink to={'/posts/add'}>Add</NavLink>
              <NavLink to={'/about'}>About</NavLink>
              <NavLink to={'/contacts'}>Contacts</NavLink>
          </div>
      </header>
      <Routes>
          <Route path="/" element={<Navigate to={'/posts'} />}/>
          <Route path="/posts"  element={<Home />}/>
          <Route path='/posts/:id' element={<PostView/>}/>
          <Route path='/posts/:id/edit' element={<PostEdit/>}/>
          <Route path='/posts/add' element={<AddPosts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default App
