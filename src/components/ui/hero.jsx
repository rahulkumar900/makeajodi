import React from "react";
import Container from "../container-block/container-section";
const profileFor = [
  "MySelf",
  "Brother",
  "Sister",
  "Daoghter",
  "Son",
  "Relative",
  "Friend",
];
export default function Hero() {
  return (
    <Container className="relative flex px-0 pt-0   w-full h-[calc(100vh_-_4rem)] lg:h-[calc(100vh_+_7rem)] bg-gradient-to-r from-red-500 to-orange-500 ">
      <section className="px-2  py-8 max-w-7xl flex-shrink-0 flex-1  mx-auto flex justify-between items-start   ">
        <div className="hidden md:block h-full  w-1/2 flex-1 items-center  md:pr-10">
          <img src="./wireframe1.png" alt="das" className=" h-auto" />
        </div>
        <div className=" w-full md:w-1/2  h-full flex justify-end    ">
          <div className="w-full space-y-4 p-10  shadow-sm h-min  max-w-lg  rounded-lg  bg-white  bg-opacity-10 ">
            <div className="w-full   md:mb-0 ">
              <label
                className="block tracking-wide  text-base mb-2  text-gray-200 text-md font-semibold"
                htmlFor="selectFor"
              >
                Create Profile For
              </label>
              <select
                id="selectFor"
                className="w-full block border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              >
                {profileFor
                  ? profileFor.map((ele, i) => {
                      return (
                        <>
                          <option key={i} className="py-3 px-4 " value={ele}>
                            {ele}
                          </option>
                        </>
                      );
                    })
                  : "Null"}
                <option className="py-3 px-4" value="">
                  Brother
                </option>
                <option className="py-3 px-4" value="">
                  Self
                </option>
                <option className="py-3 px-4" value="">
                  Self
                </option>
                <option className="py-3 px-4" value="">
                  Self
                </option>
                <option className="py-3 px-4" value="">
                  Self
                </option>
                <option className="py-3 px-4" value="">
                  Self
                </option>
              </select>
            </div>
            <div className="w-full  md:mb-0 ">
              <label
                className="block tracking-wide  text-base  mb-2 text-gray-200 text-md font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full   border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                id="name"
                type="text"
              />
              <p className="hidden text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full  md:mb-0">
              <label
                className="block tracking-wide text-base mb-2 text-gray-200 text-md font-semibold"
                htmlFor="mobile"
              >
                Mobile Number
              </label>
              <input
                className="appearance-none block w-full  border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="mobile"
                type="tele"
              />
              <p className="hidden text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full   md:mb-0">
              <label
                className="block tracking-wide  text-base  mb-2 text-gray-200 text-md font-semibold"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full   border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                id="email"
                type="email"
              />
              <p className=" hidden text-xs italic">
                Please fill out this field.
              </p>
            </div>
            {
              // <div className="w-full   px-3 mb-6 md:mb-0">
            }
            <button className="py-3 px-3 text-lg font-bold mt-4 rounded-md  text-white border border-white bg-gradient-to-r from-red-500 to-orange-500 w-full   hover:bg-rose-500 ">
              Register Free
            </button>
            {
              //  </div>
            }
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 170 "
        className="absolute inset-x-0 bottom-0 w-full"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <div className="absolute left-0 right-0 bottom-0  w-full h-16 z-30">
        <div className="relative w-full h-full ">
          <svg
            className="  fill-orange-500 hidden md:block  border  w-10 h-10  animate-bounce absolute left-1/2 transform -translate-x-1/2 rounded-full shadow-md  "
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <g className="bg-gradient-to-r from-red-500 to-orange-500">
              <path
                d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58
       c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022
       c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"
              />
            </g>
          </svg>
        </div>
      </div>
    </Container>
  );
}
