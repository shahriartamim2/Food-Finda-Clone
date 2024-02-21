
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Banner from './components/Banner/Banner'
import Home from './components/Home/Home'
import Services from './components/Services/Services'

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <><Banner /> <Home/> <Services /></>,
    },
    {
      path: "/services",
      element: <><Banner /> <Services /></>,
    },
  ]);

  return (
    <>
     
     <RouterProvider router={router} />

    </>
  )
}

export default App
