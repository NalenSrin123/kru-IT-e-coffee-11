import React from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-black w-full h-[70px]">12</div>
      <div className="w-[100%] h-[600px] m-auto bg-pink-300">
        <img className="w-[100%] h-[100%] object-cover" src={imgHeroSection} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;