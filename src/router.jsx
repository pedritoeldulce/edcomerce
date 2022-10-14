const myRouter = createBrowserRouter(
    [
      {element: <App></App>,
      path:'/'
    },
  
    {
      element:<ProductPage/>,
      path:'/products'
    }
    ]
)