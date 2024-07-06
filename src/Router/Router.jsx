import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import AddCoffe from "../Pages/AddCoffe";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "addCoffee",
          element: <AddCoffe></AddCoffe>,
        }
      ]
    },
    
  ]);

export default router;