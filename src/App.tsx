import { useState } from 'react'
import Home from './Home'
import './App.css'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import About from './About';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
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
