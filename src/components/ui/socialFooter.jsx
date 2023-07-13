import {
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialTwitter,
    SlSocialYoutube,
  } from "react-icons/sl";

export default function socialFooter() {
  return (
    <div className="p-4 border-t-2 border-orange-500 text-white flex justify-center gap-4 bg-rose-600">
    <SlSocialInstagram />
    <SlSocialTwitter />
    <SlSocialYoutube />
    <SlSocialFacebook />
  </div>
  )
}
