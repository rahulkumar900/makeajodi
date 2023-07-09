import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
