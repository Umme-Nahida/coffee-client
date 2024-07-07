import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import AddCoffe from "../Pages/AddCoffe";
import Login from "../Components/Login";
import Home from "../Pages/Home";


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
          path: "addCoffee",
          element: <AddCoffe></AddCoffe>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ]
    },
    
  ]);

export default router;