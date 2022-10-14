import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ProductPages from './ProductPages'
import Users from "./Users"

export const myRouter = createBrowserRouter(
    [
      {element: <App></App>,
      path:'/'
    },
  
    {
      element:<ProductPages/>,
      path:'/products'
    },
    {
        element: <Users/>,
        path: '/users'
    }
    ]
)