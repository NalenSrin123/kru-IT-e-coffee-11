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
      <div className="relative w-full md:w-[90%] h-[500px] md:h-[700px] m-auto mt-4 overflow-hidden ">

        {/* Background Image */}
        <img className="w-full h-full object-cover" src={imgHeroSection} alt="hero"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center md:items-center">
          
          {/* Left Content */}
          <div className="w-full px-6 md:px-50 px-30 py-20 text-center md:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white">
              Welcome to <br />
              Morning
              <span className="text-amber-700"> ETEC</span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
              Start your day with the finest handcrafted coffee,
              made from premium beans sourced worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-900 hover:bg-amber-800 px-6 py-3 rounded-lg shadow-lg transition duration-300">
                Order Now
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-lg transition duration-300">
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