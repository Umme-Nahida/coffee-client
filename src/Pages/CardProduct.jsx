import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


const CardProduct = ({ coffee }) => {
  console.log(coffee);
  const { name, chef, supplier, taste, category, details, price, photo } =
    coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="ml-5">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>chef:{chef}.</p>
          <p>Price:{price}</p>
        </div>
        <div className="card-actions justify-end mr-5 my-2">
          <div className=" join join-vertical space-y-2">
            <button className="btn btn-sm btn-primary">
                <FaEye></FaEye>
            </button>
            <button className="btn btn-sm btn-primary">
                <FaPen></FaPen>
            </button>
            <button className="btn btn-sm btn-primary">
               <MdDelete></MdDelete>
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
