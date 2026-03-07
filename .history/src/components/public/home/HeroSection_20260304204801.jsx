import React from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[750px] overflow-hidden">

      {/* Background Image */}
      <img
        src={imgHeroSection}
        alt="coffee"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-20">
        
        {/* Animated Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-float">
          Premium Coffee Experience ☕
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
          Discover the rich aroma and bold flavor crafted from the finest beans around the world.
        </p>

        <div className="flex gap-4">
          <button className="bg-amber-700 hover:bg-amber-800 px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Order Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;