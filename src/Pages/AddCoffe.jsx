import toast from "react-hot-toast";
import bgImg from "../images/more/11.png";

const AddCoffe = () => {

  const handleForm=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const coffee={name,chef,supplier,taste,category,details,price,photo}
    console.log(coffee)
    fetch("http://localhost:5000/addcoffee",{
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffee)
    }
      
    )
    .then(res=> res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        toast.success('Coffee Successfully added!')
      }
      e.target.reset();
    })
  }
  return (
    <div className="py-20" style={{ backgroundImage: `url(${bgImg})` }}>
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
                    type="text"
                    name="price"
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
                    placeholder="Enter your photo url"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#6F4E37] hover:bg-[#81593d] text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
  );
};

export default AddCoffe;
