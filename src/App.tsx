import { useState } from 'react'
import Home from './Home'
import './App.css'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import About from './About';
import Connexion from './Connexion';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ]);

  return (
    <>
      <div>
          <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
