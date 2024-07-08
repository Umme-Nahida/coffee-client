import { useLoaderData } from "react-router-dom";
import BackHome from "./BackHome";

const Details = () => {
  const DetailsData = useLoaderData();
  console.log(DetailsData);
  const { name, chef, supplier, taste, category, details, price, photo, _id } =
    DetailsData;
  return (
    <div className="py-10">
     <div className="-ml-10"><BackHome></BackHome></div>
      <div className="flex items-center justify-center">
        <div className="hero bg-base-200 h-[500px] w-[900px]">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={photo}
                className="max-w-sm rounded-lg shadow-2xl w-96 h-96"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-rancho text-[#6F4E37] font-bold mb-5">
                Niceties
              </h1>
              <p className="pb-3">
                <span className="font-bold">Name: </span>{name}
              </p>
              <p className="pb-3">
                <span className="font-bold">Chef: </span>{chef}
              </p>
              <p className="pb-3">
                <span className="font-bold">Supplier: </span>{supplier}
              </p>
              <p className="pb-3">
                <span className="font-bold">Taste: </span>{taste}
              </p>
              <p className="pb-3">
                <span className="font-bold">Category: </span>{category}
              </p>
              <p className="pb-3">
                <span className="font-bold">Details: </span>{details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
