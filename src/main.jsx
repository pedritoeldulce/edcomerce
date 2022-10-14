import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const myRouter = createBrowserRouter(
  [
    {element: <App></App>,
    path:'/'
  },
/* 
  {
    element:<ProductsPages/>,
    path:'/products'
  } */
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRouter}>

  </RouterProvider>
  )
