import { memo } from "react";
import { Link } from "react-router-dom";
// import DropList from "../molecules/menu";

function navbar() {
  return (
    <div className=" bg-gradient-to-r from-red-500 to-orange-500  sticky top-0 z-50">
      <header className=" px-2 md:px-8 py-4 max-w-7xl mx-auto flex justify-between items-center ">
        <Link to={"/"}>
          <img
            src={"../../../makeajodi1.png"}
            width="350"
            height="auto"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-4 items-center text-gray-100 font-medium">
            <li className="px-3 py-2">Home</li>
            <li className="px-3 py-2">About</li>
            <li className="px-3 py-2">
              <a href="#plans">Plans</a>
            </li>
            <li className="px-3 py-2">Contact Us</li>
            {/* <li className="px-3 py-2">
              <DropList />
            </li> */}
          </ul>
          <div className="flex items-center  gap-4 ">
            <div className="px-3 py-2 text-gray-100 font-medium">
              <Link> Login</Link>
            </div>
            <div className="px-4 py-2  rounded-lg bg-white border-2 border-rose-300 ">
              <Link className=" font-medium bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const Navbar = memo(navbar);

export default Navbar;
