import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import AddCoffe from "../Pages/AddCoffe";
import Login from "../Components/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
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