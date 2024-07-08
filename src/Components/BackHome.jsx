import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div>
      <Link to="/">
        <h3 className="flex items-center gap-x-2 pl-[270px] pb-5 ">
          <FaArrowLeftLong></FaArrowLeftLong>
          Back to Home
        </h3>
      </Link>
    </div>
  );
};

export default BackHome;
