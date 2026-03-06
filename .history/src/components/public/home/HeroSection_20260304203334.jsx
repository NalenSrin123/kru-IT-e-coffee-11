import React from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-red-600 w-full h-[70px]">12</div>
      <div className="w-[90%] h-[700px] m-auto bg-black position-ab"></div>
      <div className="w-[90%] h-[700px] m-auto bg-pink-300 ">
        <img className="w-[100%] h-[100%] object-cover position-relative" src={imgHeroSection} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;