import { Link } from "react-router-dom";
import logo from "../images/more/logo1.png";

const Header = () => {
  return (
    <div className="bg-[#6F4E37] py-5 flex items-center ">
        {/* menu */}
      <div className="flex justify-start w-2/5">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/addCoffee'>AddCoffee</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-start gap-x-2 w-3/5">
        <img className="w-10 h-10" src={logo} alt="" />
        <h1 className="text-white font-rancho text-2xl">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
