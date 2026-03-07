import React from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";

const HeroSection = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-red-600 w-full h-[70px] flex items-center justify-center text-white">
        Navbar Area
      </div>

      {/* Hero Section */}
      <div className="relative w-[90%] h-[700px] m-auto mt-4 overflow-hidden rounded-xl">

        {/* Background Image */}
        <img className="w-full h-full object-cover"
          src={imgHeroSection}
          alt="hero"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Freshly Brewed Coffee ☕
          </h1>

          <p className="max-w-xl mb-6 text-lg">
            Experience the rich aroma and premium taste in every sip.
          </p>

          <button className="bg-amber-700 hover:bg-amber-800 transition px-6 py-3 rounded-lg shadow-lg">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;