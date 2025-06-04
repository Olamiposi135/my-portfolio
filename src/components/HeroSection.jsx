import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-[url('assets/background.jpg')] bg-cover py-10  ">
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

        <div>
          <Navbar />
        </div>

        <section className="mt-20 text-white flex flex-col items-center justify-center z-10 relative py-14 md:px-14 px-10">
          <div className="text-center w-full md:w-[60%] mx-auto ">
            <h1 className="text-5xl md:text-7xl font-bold leading-snug ">
              Freelance web developer based in Lagos
            </h1>
            <p className="text-2xl py-5">
              Expert development services by LAGOS-based freelancer for your
              website needs.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-5 items-center justify-center">
              <button className="font-semibold text-xl py-5 px-8 bg-blue-700 hover:bg-white hover:text-blue-900 duration-500 ">
                Let's connect
              </button>
              <button className="font-semibold text-xl py-5 px-8 ring-1 ring-blue-400 hover:bg-white  hover:text-blue-900 duration-500 ">
                Check my work
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
