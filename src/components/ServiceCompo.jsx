import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const ServiceCompo = ({
  num,
  course,
  description,
  list,
  list2,
  list3,
  image,
}) => {
  return (
    <div className="flex flex-col gap-20 lg:gap-5 lg:flex-row border-b-2 border-white border-opacity-50 py-16 lg:py-24">
      <div className="flex-1 w-full flex flex-col gap-7 ">
        <p className="text-purple-500 text-2xl  ">{num}</p>
        <h2 className="text-3xl font-semibold lg:text-5xl lg:font-bold">
          {course}{" "}
        </h2>
        <p className="text-2xl w-full lg:w-[90%] leading-relaxed opacity-75">
          {description}
        </p>
        <ul className="flex flex-col gap-3 opacity-75 text-2xl">
          <li className="flex items-center gap-3">
            <IoMdArrowDropright size={35} />
            {list}
          </li>
          <li className="flex items-center gap-3">
            <IoMdArrowDropright size={35} />

            {list2}
          </li>
          <li className="flex items-center gap-3">
            <IoMdArrowDropright size={35} /> {list3}
          </li>
        </ul>
      </div>
      <div className="flex-1 w-full">
        <img className="w-full" src={image} alt="Image" />
      </div>
    </div>
  );
};

export default ServiceCompo;
