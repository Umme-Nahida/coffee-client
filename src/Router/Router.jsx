import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import AddCoffe from "../Pages/AddCoffe";
import Login from "../Components/Login";
import Home from "../Pages/Home";
import Details from "../Components/Details";


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
          path: "details/:id",
          element: <Details></Details>,
          loader: ({params})=> fetch(`http://localhost:5000/getCoffee/${params.id}`)
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ]
    },
    
  ]);

export default router;