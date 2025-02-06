import React from "react";
import "./App.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar  from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import ContactDetails from "./Components/ContactDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage/>
          <Footer/>
         
        </>
      ),
    },

    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About/>
          <Footer/>
         
        </>
      ),
    },

    {
      path: "/Portfolio",
      element: (
        <>
          <Navbar />
          <Portfolio/>
          <Footer/>
         
        </>
      ),
    },

    {
      path: "/Skills",
      element: (
        <>
          <Navbar />
          <Skills/>
          <Footer/>
         
        </>
      ),
    },

    {
      path: "/ContactDetails",
      element: (
        <>
          <Navbar />
          <ContactDetails/>
          <Footer/>
         
        </>
      ),
    },

    

   
  ]);

  return <RouterProvider router={router} />;

}

export default App;