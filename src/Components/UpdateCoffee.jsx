import toast from "react-hot-toast";
import bgImg from "../images/more/11.png";
import BackHome from "../Components/BackHome";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffeeData = useLoaderData();
    const { name, chef, supplier, taste, category, details, price, photo, _id } = coffeeData;
    

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target || "not found";
        const name = form.name.value || "not found";
        const chef = form.chef.value || "not found";
        const supplier = form.supplier.value || "not found";
        const taste = form.taste.value || "not found";
        const category = form.category.value || "not found";
        const details = form.details.value || "not found";
        const price = form.price.value || "not found";
        const photo = form.photo.value || "not found";
        const coffeeUpdateData = {
          name,
          chef,
          supplier,
          taste,
          category,
          details,
          price,
          photo,
        };
        console.log(coffeeUpdateData);
        fetch(`http://localhost:5000/updateCoffee/${_id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(coffeeUpdateData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("Coffee Successfully updated!");
            }
            e.target.reset();
          });
      };

  return (
    <div className="py-20" style={{ backgroundImage: `url(${bgImg})` }}>
      <BackHome></BackHome>
      <div className="mx-auto max-w-[800px] bg-[#F4F3F0] p-16">
        <form onSubmit={handleForm}>
          {/* row-1 */}
          <div className="md:flex md:gap-x-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter your chef name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row-2 */}
          <div className="md:flex md:gap-x-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter your chef name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row-3*/}
          <div className="md:flex md:gap-x-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter your chef name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row-4*/}
          <div className="md:flex md:gap-x-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="tel"
                name="price"
                defaultValue={price}
                placeholder="Enter your price"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-[#6F4E37] hover:bg-[#81593d] text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
