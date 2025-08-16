// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder.tsx'
import { Checkout } from './components/Checkout/Checkout.tsx'
import { ContactData } from './components/ContactData/ContactData.tsx'
import Layout from './components/layouts/Layout/Layout.tsx'
import { fetchOrders } from './components/Orders/Orders.tsx'
import { lazy, Suspense } from 'react'
import Spinner from './components/UI/Spinner/Spinner.tsx'
import { Provider } from 'react-redux'
import store from './stores/newStore/store.ts'
const Orders = lazy(() => import('./components/Orders/Orders.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
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
        path: '/orders',
        element: (
          <Suspense fallback={<Spinner />}>
            <Orders />
          </Suspense>
        ),
        loader: fetchOrders
      }
    ]
  },
  {
    path: '*',
    element: <h1>Not Found</h1>
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <RouterProvider router={router} />,
  </Provider>
)




// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
