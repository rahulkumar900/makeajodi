import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import SocialFooter from "../ui/socialFooter";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <div className="bg-rose-700 text-white">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
      <SocialFooter />
    </div>
  );
}
