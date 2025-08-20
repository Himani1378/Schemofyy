import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import './index.css'
import {createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'


const routers=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'Signup',
        element:<Signup/>
      },
      {
        path:'Login',
        element:<Login/>
      },

    ]
  }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>
)
