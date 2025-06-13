import React from "react";
import TestimonialProps from "./TestimonialProps";
import "../App.css";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h1 className=" spacegrotesk-text text-4xl lg:text-6xl font-bold text-center py-4 lg:py-7">
        See why they love my work
      </h1>
      <div className="  grid lg:grid-cols-2 gap-7 px-14 py-20">
        <TestimonialProps />
        <TestimonialProps />
        <TestimonialProps />
        <TestimonialProps />
      </div>
    </section>
  );
};

export default Testimonial;
