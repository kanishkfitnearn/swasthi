import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2c1c18] to-[#4a322d] text-white py-8">
      <div className=" w-[90%] max-w-7xl mx-auto flex flex-wrap justify-evenly space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <div className="flex items-center space-x-2">
            <img src="/Logo.png" alt="logo" className="w-8 h-8" />
            <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              <img
                src="/Swasthi.png"
                className="h-6 w-auto"
                alt="Swasthi Logo"
              />
            </h1>
          </div>
          <p className="mt-2 text-sm text-neutral-200">
            Swasthi is your all-in-one health app for personalized wellness
            insights, progress tracking, and daily motivation. Available on
            Android and iOS. Join our community today!
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:help-support@fitnearn.com">
              <img src="/email.png" alt="Email Icon" className="inline mr-2" />
              help-support@fitnearn.com
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://x.com/fitnearn"
              target="_blank"
              aria-label="Twitter"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/fitnearn"
              target="_blank"
              aria-label="Facebook"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fitearn"
              target="_blank"
              aria-label="Instagram"
              className="bg-gray-700 p-2 rounded-full"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/fit-n-earn/"
              aria-label="Linkedin"
              target="_blank"
              className="bg-gray-700 p-2 rounded-full"
            >
              <TiSocialLinkedin />
            </a>
          </div>
        </div>

        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4 text-center">
          <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-4 text-sm text-justify ml-20">
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4 text-center">
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-4 text-sm text-justify ml-16">
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 text-gray-200">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:flex-1 px-4 text-center">
          <h4 className="font-semibold text-lg mb-4">Download App</h4>
          <div className="flex flex-wrap gap-2 ml-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src="/apple.png" alt="App Store" className="w-6 h-6 " />
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  Download on the
                </span>
                <span className="block text-lg font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src="/playstore.png" alt="Google Play" className="w-6 h-6" />
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  Get it on
                </span>
                <span className="block text-lg font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t my-6 px-16" />
      <div className="flex flex-col md:flex-row justify-between text-center text-sm px-16 space-y-4 md:space-y-0">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p>Made with ❤️ in India</p>
        <p>Design and Developed by FitnEarn</p>
      </div>
    </footer>
  );
};

export default Footer;
