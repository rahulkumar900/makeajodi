import "./home.css";
import Container from "../components/container-block/container-section";
import SwiperCard from "../components/ui/swiperCard";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";
const profileFor = [
  "MySelf",
  "Brother",
  "Sister",
  "Daoghter",
  "Son",
  "Relative",
  "Friend",
];
export default function home() {
  return (
    <>
      <div className="home-container bg-gray-100  ">
        <div className="flex gap-8 items-center max-w-7xl mx-auto px-2 md:px-8  py-2">
          <div className="hidden md:block h-f w-1/2 flex-auto"></div>
          <div className=" w-full md:w-1/2 h-f    flex justify-end items-center ">
            <form className="w-full space-y-4 px-6 py-10  shadow-sm h-min  max-w-lg border rounded-lg  bg-white ">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="selectFor"
                >
                  Create Profile For
                </label>
                <select
                  id="selectFor"
                  className="w-full block   text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                >
                  {profileFor
                    ? profileFor.map((ele, i) => {
                        return (
                          <option key={i} className="py-3 px-4" value={ele}>
                           {ele}
                          </option>
                        );
                      })
                    : "Null"}

                  {/* <option className="py-3 px-4" value="">
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
                  </option> */}
                </select>
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                />
                <p className="hidden text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="mobile"
                  type="tele"
                  placeholder="+918525000000"
                />
                <p className="hidden text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="Jane@gmail.com"
                />
                <p className=" hidden text-xs italic">
                  Please fill out this field.
                </p>
              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <button className="py-3 px-4 rounded-md font-semibold text-gray-100 bg-rose-700 w-full  bg-green ">
                  Register Free
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Container>
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
          Find Your Special One
        </h2>
        <div className="grid gap-4 grid-cols-12 w-full mt-12 max-w-7xl px-2 md:px-8  py-2   mx-auto">
          <div className="col-span-full md:col-span-4 text-center  border shadow p-10 space-y-2">
            <div className="bg-green-500 w-min border rounded-full p-6 mx-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 "
                  viewBox="0 0 40 40"
                >
                  <path d="M37.1 5.22h-2v-2c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2h-2c-.5 0-.9.4-.9.9s.4.9.9.9h2v2c0 .5.4.9.9.9s.9-.4.9-.9V7h2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9v.02zM28.76 20a6.714 6.714 0 0 0 1.16-9.42A6.688 6.688 0 0 0 24.76 8c-1.64 0-3.22.62-4.42 1.74-2.12-3.94-7.02-5.41-10.96-3.29S3.97 13.47 6.09 17.4c.65 1.2 1.59 2.23 2.74 2.97C4.87 21.53 2 24.85 2 28.77v8c0 .5.4.9.9.9h20.88c.5 0 .9-.4.9-.9v-1.62h8.54c.5 0 .9-.4.9-.9V27.3a7.79 7.79 0 0 0-5.36-7.3zm-4-10.25a4.903 4.903 0 0 1 5 4.8 4.903 4.903 0 0 1-4.8 5c-1.79.04-3.46-.91-4.35-2.46l.05-.14c.08-.17.15-.34.22-.51s.13-.4.19-.6.05-.16.07-.25c.17-.64.26-1.29.26-1.95 0-.43 0-.84-.06-1.26a6.57 6.57 0 0 0-.16-.77v-.11c.89-1.1 2.22-1.74 3.63-1.75h-.05zM19.41 21c-.52-.24-1.05-.44-1.6-.59a7.8 7.8 0 0 0 1.8-1.64c.39.51.86.95 1.39 1.32-.54.24-1.04.56-1.49.93l-.1-.02zM7 13.64c-.01-3.47 2.81-6.29 6.28-6.3 2.69 0 5.09 1.7 5.96 4.25.24.66.36 1.35.36 2.05-.01.68-.12 1.36-.34 2-.79 2.34-3.06 4.28-5.62 4.28h-.74A6.3 6.3 0 0 1 7 13.64zm15.88 22.27H3.8v-7.14c0-1.46.54-2.88 1.46-4.01.97-1.19 2.31-2.05 3.77-2.53.89-.29 1.83-.41 2.76-.45.96-.04 1.95-.1 2.91-.02.5.04 1 .14 1.49.24.52.11 1.03.24 1.53.39.25.07.49.16.74.24.72.25 1.36.62 1.97 1.08.38.29.66.63.99.96.27.27.48.67.64 1.01.26.53.38 1.11.51 1.68.22.99.32 1.99.32 3.01v5.58l-.01-.04zm9.44-2.56h-7.64V28.4c-.1-1.57-.61-3.09-1.47-4.4-.05-.07-.11-.14-.16-.22a9.66 9.66 0 0 0-.57-.7l-.05-.06c-.35-.38-.75-.73-1.18-1.02a4.6 4.6 0 0 1 2.61-.65h2.22a6.118 6.118 0 0 1 6.24 5.95v6.05z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center">SignUp</h3>
            <p>Register for free & Put your Matrimony Profile</p>
          </div>
          <div className="col-span-full md:col-span-4 text-center   border shadow p-10 space-y-2">
            <div className="bg-green-500 w-min border rounded-full p-6 mx-auto">
              <div>
                <svg className="w-16 h-16" viewBox="0 0 100.4 100.4">
                  <path d="M76.9 34v-2.7c3.4-2 5.6-5.7 5.6-9.7v-4.8c0-6.2-5-11.2-11.2-11.2S60 10.6 60 16.8v4.8c0 3.9 2 7.5 5.4 9.5V34c-1.5.4-2.9 1-4.3 1.8-2.2-5.1-7.3-8.7-13.2-8.7-5.8 0-10.7 3.4-13 8.4-1.3-.6-2.6-1.2-3.9-1.5v-2.7c3.4-2 5.6-5.7 5.6-9.7v-4.8c0-6.2-5-11.2-11.2-11.2s-11.2 5-11.2 11.2v4.8c0 3.9 2 7.5 5.4 9.5V34c-9 2.6-15.1 10.7-15.1 20.1 0 .8.7 1.5 1.5 1.5H35.9c1.2 1.9 2.9 3.5 4.9 4.7v4.5c-11.9 3.2-20 13.9-20 26.3 0 .8.7 1.5 1.5 1.5h51.5c.8 0 1.5-.7 1.5-1.5 0-12.3-8.5-23.2-20.3-26.3v-4.3c2.1-1.2 3.8-2.8 5.1-4.8h30.7c.8 0 1.5-.7 1.5-1.5-.1-9.4-6.5-17.7-15.4-20.2zM7.5 52.7c.6-7.8 6.2-14.2 13.9-16 .7-.2 1.2-.8 1.2-1.5v-5c0-.6-.3-1.1-.8-1.3-2.8-1.4-4.6-4.2-4.6-7.3v-4.8c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2v4.8c0 3.1-1.9 6-4.7 7.4-.5.2-.9.8-.9 1.4v4.8c0 .7.5 1.3 1.2 1.5 1.7.4 3.3 1 4.8 1.8-.2 1-.3 2-.3 3.1V48c0 1.6.3 3.2.8 4.7h-27zm45.3 5.5c-.5.2-.9.8-.9 1.4V66c0 .7.5 1.3 1.2 1.5C63.7 69.8 71.5 79 72.2 89.7H23.8C24.4 79 32 70 42.6 67.6c.7-.2 1.2-.8 1.2-1.5v-6.6c0-.6-.3-1.1-.8-1.3-3.9-1.9-6.3-5.8-6.3-10.1v-6.4c0-6.3 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3V48c0 4.3-2.5 8.3-6.5 10.2zm8.7-5.5c.5-1.5.8-3.1.8-4.7v-6.4c0-.9-.1-1.9-.3-2.7 1.6-1 3.4-1.7 5.2-2.1.7-.2 1.2-.8 1.2-1.5v-5c0-.6-.3-1.1-.8-1.3-2.8-1.4-4.6-4.2-4.6-7.3v-4.8c0-4.5 3.7-8.2 8.2-8.2 4.5 0 8.2 3.7 8.2 8.2v4.8c0 3.1-1.9 6-4.7 7.4-.5.2-.9.8-.9 1.4v4.8c0 .7.5 1.3 1.2 1.5 7.7 1.7 13.4 8.3 14.1 16l-27.6-.1z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center">Connect</h3>
            <p>Select and Connect with Your Compatible matches</p>
          </div>
          <div className="col-span-full md:col-span-4 text-center border shadow p-10 space-y-2">
            <div className="bg-green-500 w-min border rounded-full p-6 mx-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  className="w-16 h-16"
                  viewBox="0 0 128 128"
                >
                  <path d="M91.94 58.65a8.79 8.79 0 0 0-7.6 4.54 8.79 8.79 0 0 0-7.6-4.54 9.15 9.15 0 0 0-8.87 9.4s0 .51 0 .75v.29c.7 7.66 15.26 16.76 15.88 17.14a1 1 0 0 0 .53.15 1 1 0 0 0 .53-.15c.62-.38 15.18-9.48 15.87-17.12v-1.08a9.13 9.13 0 0 0-8.74-9.38Zm6.85 9.81v.45c-.48 5.31-10.1 12.53-14.41 15.29-4.31-2.76-13.93-10-14.42-15.31v-.86a7.15 7.15 0 0 1 6.87-7.38 7 7 0 0 1 6.63 5.45 1 1 0 0 0 1.94 0 7 7 0 0 1 6.63-5.45A7.13 7.13 0 0 1 98.8 68c0 .07-.01.33-.01.46ZM32.31 46.59A2.74 2.74 0 1 0 35 49.33a2.74 2.74 0 0 0-2.69-2.74Zm0 3.47a.74.74 0 0 1 0-1.47.74.74 0 0 1 0 1.47ZM43.66 46.59a2.74 2.74 0 1 0 2.74 2.74 2.74 2.74 0 0 0-2.74-2.74Zm0 3.47a.74.74 0 1 1 .74-.73.73.73 0 0 1-.74.73ZM55 52.06a2.74 2.74 0 1 0-2.73-2.73A2.74 2.74 0 0 0 55 52.06Zm0-3.47a.74.74 0 1 1-.73.74.74.74 0 0 1 .73-.74ZM92.55 47.86a1 1 0 1 0-.45 2 29.56 29.56 0 0 1 13.24 6.69 1 1 0 0 0 1.41-.07 1 1 0 0 0-.07-1.41 31.47 31.47 0 0 0-14.13-7.21ZM109.43 61.36a22.61 22.61 0 0 1 1.28 2.43 1 1 0 0 0 .91.6 1 1 0 0 0 .41-.08 1 1 0 0 0 .51-1.32 22.12 22.12 0 0 0-1.41-2.68 1 1 0 1 0-1.7 1Z" />
                  <path d="M84.34 42a42.38 42.38 0 0 0-6.33.47c-3.53-12.9-17.79-22.19-34.35-22.19-19.4 0-35.18 12.72-35.18 28.34 0 7.64 3.7 14.77 10.42 20.13V85a1 1 0 0 0 .52.88 1 1 0 0 0 .48.12 1 1 0 0 0 .54-.16l14.85-9.64a44.2 44.2 0 0 0 14.7.33c3.48 12.7 17.56 22.23 34.35 22.23a44 44 0 0 0 8.37-.8l14.85 9.64a1 1 0 0 0 .54.16 1 1 0 0 0 .48-.12 1 1 0 0 0 .52-.88V90.51c6.72-5.36 10.42-12.49 10.42-20.13 0-15.63-15.78-28.38-35.18-28.38ZM35.29 74.12a1 1 0 0 0-.74.14L20.9 83.12V68.27a1 1 0 0 0-.39-.79c-6.47-5-10-11.71-10-18.86 0-14.52 14.88-26.34 33.18-26.34 15.59 0 29 8.59 32.37 20.56-15.4 3-26.87 14.22-26.87 27.54a23 23 0 0 0 .38 4.16 42 42 0 0 1-14.28-.42Zm72.2 15.11a1 1 0 0 0-.39.79v14.86L93.45 96a1 1 0 0 0-.54-.16.65.65 0 0 0-.2 0 41.62 41.62 0 0 1-8.37.84C66 96.72 51.16 84.9 51.16 70.38S66 44 84.34 44s33.18 11.81 33.18 26.34c0 7.19-3.52 13.89-10.03 18.89Z" />
                  <path d="M22.88 32.62a23.7 23.7 0 0 0-7.15 9.32 1 1 0 0 0 .55 1.3 1 1 0 0 0 .38.08 1 1 0 0 0 .93-.62 21.62 21.62 0 0 1 6.54-8.53 1 1 0 1 0-1.25-1.55ZM37.21 26.27a33.69 33.69 0 0 0-4.27 1.05 1 1 0 0 0 .3 1.95.79.79 0 0 0 .3-.05 33.67 33.67 0 0 1 4-1 1 1 0 0 0-.35-2Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center">Interact</h3>
            <p>Become a Premium member & Start a conversation</p>
          </div>
        </div>
      </Container>
      <Container>
        <div className=" max-w-7xl mx-auto px-2 md:px-8  py-2 ">
          <h2 className="font-bold text-3xl  md:text-4xl">
             Success Stories of MakeaJodi
          </h2>
          <div className=" w-full mt-12 ">
            <SwiperCard />
          </div>
        </div>
      </Container>
      <Container className=" bg-[url(/rose.jpg)] bg-no-repeat bg-cover  story  text-white relative ">
        <div className=" mx-auto  max-w-7xl px-2 md:px-8  py-8 text-center space-y-6  ">
          <h4 className="text-3xl md:text-4xl font-serif font-semibold">
            Your Story is waiting to happen
          </h4>
          <button
            type="button"
            className=" font-serif bg-rose-500 border-2 rounded-lg px-6 py-2"
          >
            Get Started
          </button>
        </div>
      </Container>

      <Container>
        <div className=" mx-auto max-w-7xl px-2 md:px-8  py-2 ">
          <div className="mx-auto md:max-w-4xl  text-left md:text-center">
            <p className=" sm:hidden leading-tright text-sm text-gray-600 font-semibold  ">
              UPGRADE YOUR MEMBERSHIP PLAN
            </p>
            <h4 className=" -mt-1 mb-3  md:mt-0 text-left md:text-center leading-snug text-3xl  md:text-4xl font-bold tracking-tight">
              Membership Plans
            </h4>
            <p>
              Upgrade your plan as per your customized requirements. With a paid
              membership, you can seamlessly connect with your prospects and get
              more responses. Here are some key benefits:
            </p>
          </div>
          <div className="mt-12">
            <div className="flex gap-8 md:gap-0 flex-col md:flex-row w-full justify-center items-center ">
              <div className="w-full membership-card-free border h-min p-6 space-y-6 max-w-none md:max-w-sm">
                <div className="space-y-2">
                  <div className="w-10 h-1 bg-green-500"></div>
                  <div className="text-3xl  font-bold">Free</div>
                </div>
                <ul className="flex flex-col gap-6">
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-green-600" />
                    <p className="text-md font-normal">Browse Profiles</p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-green-600" />
                    <p className="text-md font-normal">
                      Shortlist & Send Interest
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-green-600" />
                    <p className="text-md font-normal">
                      Message and chat with unlimited users
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCrossCircled size={25} className="text-gray-500" />
                    <p className="text-md text-gray-500 font-normal">
                      Get up to 3x more matches daily
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCrossCircled size={25} className="text-gray-500" />
                    <p className="text-md text-gray-500 font-normal">
                      Unlock access to advanced search
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCrossCircled size={25} className="text-gray-500" />
                    <p className="text-md text-gray-500  font-normal">
                      View contact details
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCrossCircled size={25} className="text-gray-500" />
                    <p className="text-md text-gray-500   font-normal">
                      Make unlimited voice and video calls
                    </p>
                  </li>
                </ul>
                <button className="p-2 text-gray-100 bg-green-700 w-full">
                  Register Free
                </button>
              </div>
              <div className="w-full membership-card-premium h-min bg-rose-500 border p-6 space-y-6 max-w-none md:max-w-sm">
                <div className="space-y-2">
                  <div className="w-10 h-1 bg-gray-200"></div>
                  <div className="text-3xl text-gray-100 font-bold">Basic</div>
                </div>

                <ul className="flex flex-col gap-6">
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100 font-normal">
                      Browse Profiles
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md font-normal text-gray-100">
                      Shortlist & Send Interest
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md font-normal text-gray-100">
                      Message and chat with unlimited users
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100 font-normal">
                      Get up to 3x more matches daily
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100 font-normal">
                      Unlock access to advanced search
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100  font-normal">
                      View contact details
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100   font-normal">
                      Make unlimited voice and video calls
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100   font-normal">
                      Make unlimited voice and video calls
                    </p>
                  </li>
                </ul>
                <button className="p-2 text-rose-500 font-medium bg-gray-100 w-full">
                  Register Free
                </button>
              </div>
              <div className="w-full membership-card-Premium h-min bg-orange-600 border p-6 space-y-6 max-w-none md:max-w-sm">
                <div className="space-y-2">
                  <div className="w-10 h-1 bg-gray-200"></div>
                  <div className="text-3xl text-gray-100 font-bold">
                    Premium
                  </div>
                </div>

                <ul className="flex flex-col gap-6">
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100 font-normal">
                      Browse Profiles
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md font-normal text-gray-100">
                      Shortlist & Send Interest
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md font-normal text-gray-100">
                      Message and chat with unlimited users
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100 font-normal">
                      Get up to 3x more matches daily
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100 font-normal">
                      Unlock access to advanced search
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100  font-normal">
                      View contact details
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100   font-normal">
                      Make unlimited voice and video calls
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100   font-normal">
                      Make unlimited voice and video calls
                    </p>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <RxCheckCircled size={25} className="text-gray-100" />
                    <p className="text-md text-gray-100   font-normal">
                      Make unlimited voice and video calls
                    </p>
                  </li>
                </ul>
                <button className="p-2 text-rose-500 font-medium bg-gray-100 w-full">
                  Register Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
