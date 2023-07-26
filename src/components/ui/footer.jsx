import { memo } from "react";

import Container from "../container-block/container-section";
function footer() {
  return (
    <Container className="bg-rose-500 text-white pb-16">
      <div className=" flex-wrap gap-8 flex max-w-7xl mx-auto py-2 px-2 md:px-8 ">
        <div className="space-y-2 flex-auto">
          <h3 className=" font-bold">Explore</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Subscription Plan</li>
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
          <ul>
            <li>
              <a
                href="https://www.facebook.com/makeajodi"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/makeajodi/"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>YouTube</li>
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
    </Container>
  );
}

const Footer = memo(footer);

export default Footer;
