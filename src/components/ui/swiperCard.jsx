import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                 
                  src="https://media.weddingz.in/images/28367cf0f01fe4365fd1bfda7bc2058b/Marriage-Dates-in-January-2021.jpg"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                  src="https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                  src="https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                  src="https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                  src="https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                  src="https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="">
                <img
                  alt="satu"
                  width={500}
                  height={100}
                  className="w-full h-52 object-center object-cover"
                  src="https://www.herofincorp.com/public/admin_assets/upload/blog/62df9bf716d78_Main-Banner.webp"
                />
                <div className=" p-4">
                  <div className="text-lg leading-normal font-semibold ">
                    Gyannendra Kumar
                  </div>
                  <p className="text-gray-600 font-normal">
                    Include popular icons in your React projects easily with
                    react-icons, which utilizes ES6 imports that allows you to
                    include only the icons that your project is using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
