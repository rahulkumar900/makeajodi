import { memo } from "react";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
import Container from "../container-block/container-section";
import { Link } from "react-router-dom";
function footer() {
  return (
    <Container className="bg-gradient-to-r relative from-red-500 to-orange-500 text-white pb-16">
     <div></div>
      <div className=" mt-10 md:mt-28 flex-wrap gap-8 flex max-w-7xl mx-auto py-2 px-2 md:px-8 ">
        <div className="space-y-2 flex-auto">
          <h3 className=" text-white font-bold">Explore</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Subscription Plan</li>
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>Success Stories</li>
          </ul>
        </div>
        <div className="space-y-2 flex-auto">
          <h3 className="font-bold">Contact</h3>
          <ul>
            <li>9599018647/46</li>
            <li>info@makeajodi.com</li>
            <li>Karol Bagh,New Delhi-110005</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="space-y-2 flex-auto">
          <h3 className="font-bold"> Follow us</h3>
          <ul className="flex gap-4 py-2">
            <li>
              <a
                href="https://www.facebook.com/makeajodi"
                rel="noreferrer"
                target="_blank"
              >
                <SlSocialFacebook size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/makeajodi/"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialInstagram size={20} />
              </a>
            </li>
            <SlSocialTwitter size={20} />
            <SlSocialYoutube size={20} />
          </ul>
        </div>
        {/* <div className="space-y-2 flex-auto">
          <h3 className="font-bold"> Information</h3>
          <ul>
            <li>24x7 Live help</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>FAQ</li>
          </ul>
        </div> */}
      </div>
      <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </Container>
  );
}

const Footer = memo(footer);

export default Footer;
