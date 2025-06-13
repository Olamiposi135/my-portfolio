import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import { FloatButton } from "antd";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonial />
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default Homepage;
