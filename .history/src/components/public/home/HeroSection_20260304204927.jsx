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
        <img
          className="w-full h-full object-cover"
          src={imgHeroSection}
          alt="hero"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          
          <div className="w-full md:w-1/2 px-8 md:px-16 text-white">
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Elevate Your <br />
              Morning Routine ☕
            </h1>

            <p className="text-gray-200 text-lg mb-8 max-w-md">
              Start your day with the finest handcrafted coffee,
              made from premium beans sourced worldwide.
            </p>

            <div className="flex gap-4">
              <button className="bg-amber-700 hover:bg-amber-800 px-6 py-3 rounded-lg shadow-lg transition duration-300">
                Order Now
              </button>

              <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition duration-300">
                View Menu
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;