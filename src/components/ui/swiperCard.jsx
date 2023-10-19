import Card from "../molecules/card";

import { Swiper, SwiperSlide } from "swiper/react";

const successStories = [
  {
    firstName: " Bharat ",
    lastName: "Bhrakh",
    img: "/banner1.jpeg",
    story:
      "Hello Team MakeAJodi, First of all, I want to thank the entire MakeAJodi team for making me meet my soulmate. We (Gyanendra & Rabina) both liked each other’s profile on MakeAJodi and that’s how our conversation started. We both got happily married on 27/11/2022. Credit goes to you guyz.",
  },
  // {
  //   firstName: "Kritic Pyush",
  //   lastName: "Manisha",
  //   img: "/banner2.jpeg",
  //   story:
  //     "I met  at makeajodi.com. The key think for our match was 'Desired partner' profile, which I described in details. Recommend everyone to describe in detail who you are and your expectation in detail, because there is someone who will honor it..",
  // },
  {
    firstName: "Deepak",
    lastName: "Nisha",
    img: "banner3.jpeg",
    story:
      "I found my soul mate through makeajodi.com Recently we have celebrated our 1st anniversary. Both the families are also happy and share special bond with each other. Thanks makeajodi.com personalized team.",
  },
  {
    firstName: "Gyanendra",
    lastName: "Rabina",
    img: "banner4.jpeg",
    story:
      "Since I was searching for right match from last 8 month and I was lucky to find with the help of makeajodi.com, I like to thank makeajodi.com to give me this special day..",
  },
  {
    firstName: "Roushan Raj",
    lastName: "Monika",
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
        centeredSlidesBounds={true}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
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
    </>
  );
}
