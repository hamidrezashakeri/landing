import Links from './Links';
import { FaInstagram , FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="grid grid-cols-6 bg-gray-700 text-gray-200 px-20 py-8">
      <div className="info col-span-12 xl:col-span-2 flex flex-col gap-4 mb-4">
        <img src="/logo.png" alt="logo" className="h-8 w-fit" />
        <div className="hidden  xl:flex xl:flex-col xl:gap-8">
          <p className="w-96 mt-6">
            آدرس:تهران خیابان نلسون ماندلا، خیابان کاج آبادی پلاک 114، طبقه سوم
          </p>
          <p>تلفن: 021-96621100</p>
          <p>ایمیل: info@kardan.ir</p>
        </div>
      </div>
     <Links />
     <Links />
      <div className="social-media col-span-12 xl:col-span-2 flex flex-col items-center justify-center gap-16">
        <div className="links flex gap-8 text-yellow-400">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTelegram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-24 bg-gray-400 rounded-md"></div>
          <div className="w-20 h-24 bg-gray-400 rounded-md"></div>
          <div className="w-20 h-24 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
