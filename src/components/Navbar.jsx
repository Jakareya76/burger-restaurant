import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileBar, setMobileBar] = useState(false);

  const NavLinks = ["Home", "Product", "Promo", "About", "Contact"];

  const handleMobileMenu = () => {
    setMobileBar(!mobileBar);
  };

  return (
    <nav className="bg-transparent w-full h-20 flex justify-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="p-6">
          <img src={Logo} alt="LOGO" width="50px" />
        </div>
        <div className="">
          <ul
            className={`flex items-center justify-center flex-col md:flex-row md:h-20 h-full absolute md:relative w-full md:left-[0] top-20 md:top-0  md:space-x-5 bg-[#221b1bf1] md:bg-transparent text-white font-semibold duration-500 ${
              mobileBar ? "left-[0]" : "left-[-300%]"
            }`}
          >
            {NavLinks.map((curElem) => {
              return <li className="cursor-pointer md:py-0 py-5">{curElem}</li>;
            })}
          </ul>
        </div>
        <div className="block md:hidden p-6" onClick={handleMobileMenu}>
          <FaBars fill="#fff" className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
