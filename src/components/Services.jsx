import React from "react";

import ServiceCompo from "./ServiceCompo";

const Services = () => {
  return (
    <div id="services" className=" px-5 md:px-14 py-20 min-h-screen  ">
      <div className="border-t-2 border-white border-opacity-50 px-3">
        <h1 className="text-5xl md:text-6xl font-semibold md:font-bold py-10 md:py-16">
          Services
        </h1>

        <ServiceCompo
          num="01"
          course="Front End"
          description="Our web developer is proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate."
          list="Donec aenean duis vel id mattis nunc"
          list2="Suscipit integer amet adipiscing adipiscing"
          list3="Velit habitasse cursus velit"
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
        />
        <ServiceCompo
          num="02"
          course="Back End"
          description="Our web developer can handle complex server-side processes including database management, ensuring seamless functionality of the website."
          list="Donec aenean duis vel id mattis nunc"
          list2="Suscipit integer amet adipiscing adipiscing"
          list3="Velit habitasse cursus velit"
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-02.jpg"
        />
        <ServiceCompo
          num="03"
          course="Full Stack"
          description="Our full-stack web developer is a one-stop-shop for all web development needs – from creating visually stunning front-ends to handling complex back-end processes, making our hotel website run smoothly and efficiently."
          list="Donec aenean duis vel id mattis nunc"
          list2="Suscipit integer amet adipiscing adipiscing"
          list3="Velit habitasse cursus velit"
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-03.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
