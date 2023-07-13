import { memo } from "react";


import Container from "../container-block/container-section";
function footer() {
  return (
    <Container className="bg-rose-500 text-white pb-16">
      <div className=" flex-wrap gap-8 flex max-w-7xl mx-auto py-2 px-2 md:px-8 ">
        <div className="space-y-2 flex-auto">
          <h3 className=" font-bold">Regional Matrimony Services</h3>
          <ul>
            <li>SOme</li>
            <li>link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="space-y-2 flex-auto">
          <h3 className="font-bold"> Help & Support</h3>
          <ul>
            <li>24x7 Live help</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="space-y-2 flex-auto">
          <h3 className="font-bold"> Information</h3>
          <ul>
            <li>24x7 Live help</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="space-y-2 flex-auto">
          <h3 className="font-bold"> Information</h3>
          <ul>
            <li>24x7 Live help</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
     
    </Container>
    
  );
}

const Footer = memo(footer);

export default Footer;
