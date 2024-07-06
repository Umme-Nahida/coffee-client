import bgImg from "../images/more/11.png";

const AddCoffe = () => {
  return (
    <div className="py-20" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="mx-auto max-w-[800px] bg-[#F4F3F0] p-16">
            <form>
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
                    name="quantity"
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
                    name="Supplier"
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
                    name="Taste"
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
                    name="Details"
                    placeholder="Enter your chef name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="photo"
                  placeholder="enter your photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
  );
};

export default AddCoffe;
