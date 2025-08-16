import { useState } from "react"
import Blog from "./containers/Blog/Blog"

function App() {
  const [state, setState] = useState<boolean>(false)
  const toggle = () => {
    setState(!state)
  }

  return (
    <>
    <button onClick={toggle}>BLOG TOOGLE</button>
    {state ? <Blog /> : ''}
    </>
  )
}

export default App
