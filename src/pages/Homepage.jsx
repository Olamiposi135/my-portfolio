import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Homepage;
