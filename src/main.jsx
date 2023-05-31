import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Component/Home/Home.jsx';
import Book from './Component/Book/Book.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Shop from './Component/Shop/Shop.jsx';
import Statistic from './Component/Statistic/Statistic.jsx';
import Details from './Component/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book",
        element: <Book></Book>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>
      },
      {
        path:"/details",
        element:<Details></Details>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
