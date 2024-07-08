import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import productBg from "../images/more/1.png";
import { Link } from "react-router-dom";

const Products = () => {
  const [cofees, setCoffee] = useState([]);
  console.log(cofees);
  useEffect(() => {
    fetch("http://localhost:5000/getCoffee")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
      });
  }, []);

  const deleteCoffee = (idToDelete) => {
    console.log(`deleted id ${idToDelete}`);
    const reamening = cofees.filter((item) => item._id !== idToDelete);
    setCoffee(reamening);
  };
  return (
    <div
      className="p-10 px-40 bg-cover "
      style={{ backgroundImage: `url(${productBg})` }}
    >
      <div className="text-center space-y-3 mb-10">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-2xl text-[#6F4E37] font-rancho pb-2">
          Our Popular Products
        </h1>
        <Link to="/addCoffee">
          <button className="btn btn-sm md:btn-md bg-[#E3B577] text-white hover:bg-[#E3B577] border border-[#331A15]">
            Add Coffee
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10">
        {cofees?.map((coffee) => (
          <CardProduct
            key={coffee._id}
            coffee={coffee}
            deleteCoffee={deleteCoffee}
          ></CardProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
