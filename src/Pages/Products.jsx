import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";


const Products = () => {
    const [cofees,setCoffee] =useState([])
    console.log(cofees)
    useEffect(()=>{
        fetch('http://localhost:5000/getCoffee')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCoffee(data)
        })
    },[])
    return (
        <div className="p-10 ">
            this is product section
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10">
           {
                cofees?.map(coffee=>
                  <CardProduct
                  key={coffee._id}
                  coffee={coffee}
                  ></CardProduct>
                )
            }
           </div>
        </div>
    );
};

export default Products;