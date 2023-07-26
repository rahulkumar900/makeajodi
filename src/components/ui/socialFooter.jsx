import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

export default function socialFooter() {
  return (
    <div className="p-4 border-t-4 border-orange-400 text-white flex justify-center gap-6 bg-rose-600">
      <a
        href="https://www.facebook.com/makeajodi"
        rel="noreferrer"
        target="_blank"
      >
        <SlSocialFacebook size={20} />
      </a>
      <a
        href="https://www.instagram.com/makeajodi/"
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialInstagram size={20} />
      </a>
      <SlSocialTwitter size={20} />
      <SlSocialYoutube size={20} />
    </div>
  );
}
