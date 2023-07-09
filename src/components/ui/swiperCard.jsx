import Card from "../molecules/card";

import { Swiper, SwiperSlide } from "swiper/react";

const successStories = [
  {
    firstName: "Gyanendra",
    lastName: "Kumar",
    img: "https://media.istockphoto.com/id/638009326/photo/indian-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=8B2kp5r7FXbi6vwbZDsuWJEkLIovbvaUynsI1n3s4GY=",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Kumar",
    img: "https://media.istockphoto.com/id/1447871821/photo/portrait-of-happy-south-indian-couple-wearing-traditional-white-dress-isolated-on-beige.jpg?s=612x612&w=0&k=20&c=UyV12Qwqcr-KWMBjUcelQvD2_AJOoRAUBcGzheGL5ZU=",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Kumar",
    img: "https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Kumar",
    img: "https://media.istockphoto.com/id/1321754406/photo/attractive-happy-south-indian-couple-in-traditional-dress.jpg?s=612x612&w=0&k=20&c=0mTtNMpjrWyNVhEVkkm7OT6sYJE663wM1Dbn1T70Y1Y=",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Kumar",
    img: "https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function CardSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },

        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      centeredSlidesBounds={true}
      centeredSlides={true}
      spaceBetween={30}
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiper mx-auto"
    >
      {successStories
        ? successStories.map((story, i) => {
            return (
              <SwiperSlide className="rounded-lg  shadow-md" key={i}>
                <Card {...story} />
              </SwiperSlide>
            );
          })
        : "No Story"}
    </Swiper>
  );
}
