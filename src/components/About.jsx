import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithubAlt } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pb-8  px-12 pt-[130px]    flex flex-col lg:flex-row  gap-10 lg:gap-0 "
    >
      <div className=" w-full lg:w-[40%]   ">
        <div className="w-full lg:w-[80%] bg-[#1b1448] ring-blue-600 ring-1 lg:pb-10 lg:pl-10 h-full px-20 py-10 lg:px-0 lg:py-0 ">
          <div className=" w-full relative h-full  ">
            <div className="lg:absolute right-[-60px] top-[-50px] w-full  ">
              <img
                src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/about.jpg "
                alt="Olamiposi Profile"
                className="w-full"
              />
            </div>

            <div className="flex pt-10 w-full lg:absolute bottom-3 gap-8 text-2xl items-center justify-center lg:justify-start ">
              <FaXTwitter className="cursor-pointer hover:-translate-y-1 duration-300" />{" "}
              <FaFacebook className="cursor-pointer hover:-translate-y-1 duration-300" />{" "}
              <IoLogoYoutube className="cursor-pointer hover:-translate-y-1 duration-300" />{" "}
              <FaGithubAlt className="cursor-pointer hover:-translate-y-1 duration-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-[60%] items-center justify-center flex-col gap-10 text-center lg:text-start">
        <p className="text-3xl lg:text-[45px] font-semibold lg:leading-tight">
          I’m John Smith. I’m passionate about crafting exceptional websites.
          With a blend of design skills and coding expertise, I create unique
          online experiences that captivate users.
        </p>
        <p className="text-xl leading-loose opacity-75">
          Looking for a top-notch web developer to revamp your hotel’s website?
          Look no further than John Smith. With years of experience and a keen
          eye for design, John can take your site to the next level, helping you
          attract more visitors and boost your bookings.
        </p>
      </div>
    </section>
  );
};

export default About;
