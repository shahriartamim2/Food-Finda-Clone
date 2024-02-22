
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Banner from './components/Banner/Banner'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Blog from "./components/Blog/Blog";

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <><Banner /> <Home/> <Services /> <Blog/></>,
    },
    {
      path: "/services",
      element: <><Banner /> <Services /></>,
    },
    {
      path: "/blog",
      element: <><Banner /> <Blog /></>,
    },

  ]);

  return (
    <>
     
     <RouterProvider router={router} />

    </>
  )
}

export default App
