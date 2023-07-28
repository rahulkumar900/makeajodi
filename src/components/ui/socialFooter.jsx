import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

export default function socialFooter() {
  return (
    <div className="p-4 border-t-4 border-orange-400 text-white flex justify-center gap-6 bg-rose-600">
      <p>
        Copyright &copy; {new Date().getUTCFullYear()} MakeAJodi® . All right
        reserved
      </p>
    </div>
  );
}
