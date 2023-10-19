import { memo } from "react";
import { Link } from "react-router-dom";
// import DropList from "../molecules/menu";

function navbar() {
  return (
    <div className="border-b bg-rose-900 sticky top-0 z-50">
      <header className=" px-2 md:px-8 py-4 max-w-7xl mx-auto flex justify-between items-center ">
        <Link to={"/"}>
          <img
            // src={"../../../makeajodisvg.svg"}
            src={"../../../makeajodi1.png"}
            width="350"
            height="auto"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-2 items-center">
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
          <div className="flex items-center  gap-4">
            <div className="px-3 py-2">
              <Link> Login</Link>
            </div>
            <div className="px-3 py-2 border rounded-lg">
              <Link> Register</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const Navbar = memo(navbar);

export default Navbar;
