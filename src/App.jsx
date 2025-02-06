import React from "react";
import "./App.css";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import ContactDetails from "./Components/ContactDetails";

// Layout Component to keep Navbar and Footer on all pages
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Hash Router Configuration
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/About", element: <About /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/Skills", element: <Skills /> },
      { path: "/ContactDetails", element: <ContactDetails /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
