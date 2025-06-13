import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className=" py-14 lg:py-[200px]">
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-10  max-w-[1300px] mx-auto px-10 lg:px-0">
        <div className="flex-1 flex flex-col lg:flex-row items-center   lg:border-r-[1px] lg:border-b-0 border-b-[1px] w-full  border-opacity-75 px-12 py-10 lg:py-0 gap-5 lg:gap-3">
          <h1 className="text-7xl lg:text-8xl ">
            <CountUp
              start={0}
              end={10}
              delay={1}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            ></CountUp>
          </h1>
          <p className="text-xl opacity-75">Years of experience</p>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:border-r-[1px] border-opacity-75 px-12 lg:border-b-0 border-b-[1px] w-full py-10 lg:py-0 gap-5 lg:gap-3">
          <h1 className="text-7xl lg:text-8xl ">
            <CountUp
              start={0}
              end={120}
              delay={1}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            ></CountUp>
          </h1>
          <p className="text-xl opacity-75">Successful projects</p>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row items-center py-10 lg:py-0 gap-5 lg:gap-3 lg:border-r-[1px] border-opacity-75 px-8 lg:border-b-0 border-b-[1px] w-full ">
          <h1 className="text-7xl lg:text-8xl ">
            <CountUp
              start={0}
              end={48}
              delay={1}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            ></CountUp>
          </h1>
          <p className="text-xl opacity-75">Happy clients</p>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row items-center py-10 lg:py-0 gap-5 lg:gap-3pl-10 lg:border-b-0 border-b-[1px] w-full border-opacity-75">
          <h1 className="text-7xl lg:text-8xl ">
            <CountUp
              start={0}
              end={7}
              delay={1}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            ></CountUp>
          </h1>
          <p className="text-xl opacity-75">Individual awards</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
