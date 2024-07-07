import { useEffect } from "react";


const Products = () => {

    useEffect(()=>{
        fetch('http://localhost:5000/getCoffee')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            this is product section
        </div>
    );
};

export default Products;