import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/components/App'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Body from './src/components/Body'
import RestaurantMenu from './src/components/RestaurantMenu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:restaurantId',
        element: <RestaurantMenu />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoute} />,
)
