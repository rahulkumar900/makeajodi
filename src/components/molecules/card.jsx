/* eslint-disable react/prop-types */

import { CiHeart } from "react-icons/ci";
export default function Card({ firstName, lastName, img, story }) {
  return (
    <div className="relative m-0 p-0 border-b-8  border-4 border-black rounded-3xl overflow-hidden">
      <div className="max-w-md mx-auto md:max-w-2xl  break-words bg-white w-full  ">
        <div className=" ">
          <img
            alt="satu"
            width={500}
            height={500}
            className="  w-full h-72 object-cover object-center "
            src={img}
          />
          <div className=" p-4">
            <div className="text-lg   font-semibold ">
              {firstName} <CiHeart className="inline text-rose-600" size={24} />{" "}
              {lastName}
            </div>
            <p className="text-gray-600 font-normal line-clamp-3">{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
