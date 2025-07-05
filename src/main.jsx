import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Naviga from './components/Naviga.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lectures from './components/Lectures.jsx'
import Courses from './components/Courses.jsx'
import Login from './components/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Naviga/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "lectures",
    element: <Lectures/>
  },
   
   {
    path: "courses",
    element: <Courses/>,
  },
  {
    path: "login",
    element: <Login/>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
