import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const isNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div>
      <nav className="hidden relative md:flex  justify-between z-10 items-center md:px-14 px-10">
        <div>
          <img
            src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/06/logo.svg "
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex gap-10 items-center ">
            <Link to="about" smooth={true} duration={500}>
              <li className="text-xl font-semibold cursor-pointer opacity-70 hover:opacity-100 duration-[0.5s]">
                About
              </li>
            </Link>
            <Link to="portfolio" smooth={true} duration={500}>
              <li className="text-xl font-semibold cursor-pointer opacity-70 hover:opacity-100 duration-[0.5s]">
                Portfolio
              </li>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <li className="text-xl font-semibold cursor-pointer opacity-70 hover:opacity-100 duration-[0.5s]">
                Services
              </li>
            </Link>

            <Link to="testimonial" smooth={true} duration={500}>
              <li className="text-xl font-semibold cursor-pointer opacity-70 hover:opacity-100 duration-[0.5s]">
                Testimonial
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="font-semibold text-xl py-4 px-8 ring-1 ring-white hover:bg-white hover:text-purple-600 duration-500 ">
            Let's Connect
          </button>
        </div>
      </nav>

      <nav className="relative flex text-white justify-between z-10 items-center md:hidden  px-8 ">
        <div>
          <img
            src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/06/logo.svg"
            alt="Logo"
          />
        </div>
        <div
          onClick={isNavbar}
          className="border-2 border-blue-700 text-blue-700 p-2 rounded-md cursor-pointer text-4xl"
        >
          {!navbar ? <FiMenu /> : <AiOutlineClose />}
        </div>
      </nav>

      <div
        className={
          navbar
            ? "absolute z-20 top-20  w-full py-6  ease-in-out duration-1000"
            : "fixed right-[-100%]"
        }
      >
        <ul className="flex flex-col gap-5  bg-blue-950 text-white ">
          <Link to="about" smooth={true} duration={500}>
            <li className="text-xl px-3 py-6  cursor-pointer  border-b-2 border-opacity-75 border-white hover:text-blue-500  duration-[0.5s]">
              About
            </li>
          </Link>
          <li className="text-xl px-3 py-6  cursor-pointer border-b-2 border-opacity-75 border-white hover:text-blue-500  duration-[0.5s]">
            Portfolio
          </li>
          <Link to="services" smooth={true} duration={500}>
            <li className="text-xl px-3 py-6  cursor-pointer border-b-2 border-opacity-75 border-white hover:text-blue-500  duration-[0.5s]">
              Services
            </li>
          </Link>

          <li className="text-xl px-3  py-6 cursor-pointer  hover:text-blue-500  duration-[0.5s]">
            Testimonial
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
