import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

export default function socialFooter() {
  return (
    <div className="p-4 border-t border-dotted border-red-200   text-white flex justify-center gap-6 bg-gradient-to-r from-red-600 to-orange-600">
      <p>
        Copyright &copy; 2020 - {new Date().getUTCFullYear()} MakeAJodi® . All
        right reserved
      </p>
    </div>
  );
}
