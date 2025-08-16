// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder.tsx'
import { Checkout } from './components/Checkout/Checkout.tsx'
import { ContactData } from './components/ContactData/ContactData.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BurgerBuilder />
  },
  {
    path: '/checkout',
    element: <Checkout />,
    children: [
      {
        path: 'contact-data',
        element: <ContactData />
      }
    ]
  },
  {
    path: '*',
    element: <h1>Not Found</h1>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)




// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
