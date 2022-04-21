import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-24 px-8 bg-[#222222]">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
        {/* Right */}
        <div className="md:w-1/3">
          <h1 className="text-white text-4xl my-2">Title Here</h1>
          <p className="text-[#bdb4b4] text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.
          </p>
          <div className="flex mt-4">
            <FaInstagram
              fill="#333"
              className="bg-white mr-4 rounded-full p-1"
              size="32px"
            />
            <FaFacebook
              fill="#333"
              className="bg-white mr-4 rounded-full p-1"
              size="32px"
            />
            <FaTwitter
              fill="#333"
              className="bg-white mr-4 rounded-full p-1"
              size="32px"
            />
            <FaWhatsapp
              fill="#333"
              className="bg-white mr-4 rounded-full p-1"
              size="32px"
            />
          </div>
        </div>
        {/* Left */}
        <div className="md:w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-items-center items-center mt-6">
          <div className="w-32 h-32 mt-4">
            <h1 className="text-2xl text-white mb-5">About</h1>
            <p className="text-sm text-[#b6b0b0]">History</p>
            <p className="text-sm text-[#b6b0b0]">Our Team</p>
            <p className="text-sm text-[#b6b0b0]">Brand Guidelines</p>
            <p className="text-sm text-[#b6b0b0]">Terms & Condition</p>
            <p className="text-sm text-[#b6b0b0]">Privacy Policy</p>
          </div>
          <div className="w-32 h-32">
            <h1 className="text-2xl text-white mb-5">Services</h1>
            <p className="text-sm text-[#b6b0b0]"> How to Order</p>
            <p className="text-sm text-[#b6b0b0]">Our Product</p>
            <p className="text-sm text-[#b6b0b0]">Order Status</p>
            <p className="text-sm text-[#b6b0b0]">Promo</p>
            <p className="text-sm text-[#b6b0b0]">Payment Method</p>
          </div>
          <div className="w-32 h-32 mt-8 lg:mt-0">
            <h1 className="text-2xl text-white mb-5">Other</h1>
            <p className="text-sm text-[#b6b0b0]"> Contact Us</p>
            <p className="text-sm text-[#b6b0b0]">Help</p>
            <p className="text-sm text-[#b6b0b0]">Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
