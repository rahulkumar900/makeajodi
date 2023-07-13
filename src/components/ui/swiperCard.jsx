
import Card from "../molecules/card";

import { Swiper, SwiperSlide } from "swiper/react";

const successStories = [
  {
    firstName: "Gyanendra",
    lastName: "Arabian",
    img: "/banner1.jpeg",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Kumar",
    img: "/banner2.jpeg",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Arabian",
    img: "banner3.jpeg",
    story:
      "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Arabian",
    img: "banner4.jpeg",
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
    <>
      <Swiper
    
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },

          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        centeredSlidesBounds = {true}
        centeredSlides = {true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >

{
  successStories ? successStories.map((story,i)=>{
    return (
      <SwiperSlide className="rounded-lg  shadow-md" key={i}>
        <Card  {...story} />
        </SwiperSlide>
    )
  }): "No Story"
}

      
      </Swiper>
    </>
  );
}
