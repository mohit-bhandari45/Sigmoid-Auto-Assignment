import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import FoodOrder from './pages/FoodOrder.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<FoodOrder/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
