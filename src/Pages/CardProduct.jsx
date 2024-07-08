import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CardProduct = ({ coffee,deleteCoffee }) => {
  console.log(coffee);
  const { name, chef, supplier, taste, category, details, price, photo, _id } =
    coffee;

  const handleDeleteCoffee = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              deleteCoffee(_id)
              Swal.fire({
                title: "Deleted!",
                text: "coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            <button
              className="btn btn-sm bg-[#E3B577] hover:bg-[#ecb452] text-white lg:tooltip lg:tooltip-left tooltip-info"
              data-tip="Details"
            >
              <FaEye></FaEye>
            </button>
            <button
              className="btn btn-sm bg-black hover:bg-black text-white lg:tooltip lg:tooltip-left tooltip-info"
              data-tip="Edit"
            >
              <FaPen></FaPen>
            </button>
            <button
              onClick={() => handleDeleteCoffee(_id)}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white lg:tooltip lg:tooltip-left tooltip-info"
              data-tip="Delete"
            >
              <MdDelete></MdDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
