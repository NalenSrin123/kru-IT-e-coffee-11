import React from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full h-screen bg-pink-300">
        <img src={imgHeroSection} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;