import React from "react";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <section className="bg-[#0b043a] min-h-screen px-7 md:px-14 text-white">
      <div>
        <h1 className="text-4xl font-semibold lg:text-6xl lg:font-bold pb-10 mb-10">
          Featured Work
        </h1>
        <div className="grid lg:grid-cols-3 border-white border-2 border-opacity-50 shadow-lg">
          <div className="lg:col-span-2 w-full ">
            <img
              className="w-full"
              src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/work-01.jpg"
              alt="img"
            />
          </div>
          <div className=" bg-[#1b1448] p-7 lg:p-12">
            <div className="lg:py-24 ">
              <h2 className="text-2xl uppercase mb-5 lg:mb-10 opacity-75">
                Full-Stack
              </h2>
              <h1 className="font-bold text-2xl lg:text-5xl mb-5 lg:mb-10 ">
                Nientex Website Redesign
              </h1>
              <p className="leading-relaxed text-xl md:text-2xl opacity-75 mb-10 lg:mb-20 ">
                Revamp your online presence with a modern and user-friendly
                Nientex website redesign that showcases your hotel's luxury
                amenities and increases bookings.
              </p>
              <p className="font-bold text-xl mb-10 cursor-pointer hover:text-purple-500 duration-500 flex items-center gap-2 whitespace-nowrap">
                Project Details
                <FaSquareArrowUpRight
                  size={25}
                  className="font-extrabold text-blue-300"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
