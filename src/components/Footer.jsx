import React from "react";
import "../App.css";
import { FaXTwitter } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithubAlt } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="max-h-screen">
      <div className="text-center lg:text-start h-fit flex flex-col justify-center  gap-6 px-14 py-20 border-b-2 border-white border-opacity-50">
        <h1 className="spacegrotesk-text text-4xl lg:text-6xl  font-bold max-w-4xl  ">
          Let's connect and create something amazing together!
        </h1>
        <a href="" className="underline font-semibold text-4xl lg:text-5xl">
          info@olamipo.dev
        </a>
        <div className="flex pt-10 w-full   gap-16 text-3xl items-center justify-center lg:justify-end ">
          <FaXTwitter className="cursor-pointer hover:-translate-y-1 duration-300" />{" "}
          <FaFacebook className="cursor-pointer hover:-translate-y-1 duration-300" />{" "}
          <IoLogoYoutube className="cursor-pointer hover:-translate-y-1 duration-300" />{" "}
          <FaGithubAlt className="cursor-pointer hover:-translate-y-1 duration-300" />
        </div>
      </div>
      <div className=" text-center py-12 text-xl">
        &copy; 2025 Web developer
      </div>
    </footer>
  );
};

export default Footer;
