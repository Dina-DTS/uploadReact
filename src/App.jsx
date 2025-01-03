import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Porttofolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'

function App() {

  const router=  createBrowserRouter([
    {path:'',element:<Layout/> ,children:[
      {index:true,element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
      {path:"*", element:<Notfound/>},
    ]}
])



  return (
    <>
          <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
