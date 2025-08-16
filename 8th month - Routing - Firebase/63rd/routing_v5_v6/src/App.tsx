import { BrowserRouter, Route, Routes } from 'react-router'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import { Checkout } from './components/Checkout/Checkout'
import { ContactData } from './components/ContactData/ContactData'
import Layout from './components/layouts/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/' element={<BurgerBuilder />} />
        <Route path='/checkout' element={<Checkout />}>
          <Route path='contact-data' element={<ContactData />} />
          <Route path='test' element={<h1>TESTING</h1>} />
        </Route>
        </Route>
        <Route path='*' element={<h1>Not found</h1>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
