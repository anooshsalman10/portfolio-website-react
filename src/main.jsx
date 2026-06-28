import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter ([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
       {index:true,element:<Home/>},
       { path: "about", element: <About /> },
       {path:"contact", element:<Contact/>},
       {path:"experience", element:<Experience/>},
       {path:"projects",element:<Projects/>},
       {path:"skills",element:<Skills/>},
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
