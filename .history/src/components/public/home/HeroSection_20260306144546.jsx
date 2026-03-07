import React from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <div>

      <div className="relative w-full md:w-[90%] h-[500px] md:h-[700px] m-auto mt-4 overflow-hidden ">
          <div className="w-full overflow-hidden bg-black py-1 flex gap-5">
              <marquee className="text-white  text-[15px] flex gap-5 " behavior="alternate" scrolldelay="10">
               <span> Welcome to ETEC Coffee – Premium Coffee Everyday </span>
               
              </marquee>
        </div>
        <img className="w-full h-full object-cover" src={imgHeroSection} alt="hero"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center md:items-center">

          <div className="w-full px-6 md:px-50 px-30 py-20 text-center md:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white">
              Welcome to <br />
              Morning
              <span className="ml-2 border-b-[4px] border-yellow-600 text-yellow-600">
                <Typewriter
                  words={["ETEC"]}
                  loop={0}          
                  cursor           
                  cursorStyle="."   
                  typeSpeed={200}   
                  deleteSpeed={200}  
                  delaySpeed={900} 
                />
            </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
              Start your day with the finest handcrafted coffee,
              made from premium beans sourced worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-900 text-white hover:bg-amber-700 px-6 py-3 rounded-lg shadow-lg transition duration-300">
                Order Now
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-lg transition duration-300">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    
    <div className="flex items-center justify-center min-h-screen bg-stone-900 p-4">
      {/* Container ធំដែលមានស៊ុមឈើ */}
      <div 
        className="relative w-full max-w-5xl h-[500px] border-[16px] border-[#3d2b1f] shadow-2xl rounded-sm overflow-hidden bg-cover bg-center transition-all duration-[2000ms] ease-in-out"
        style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
      >
        {/* Overlay ដើម្បីឱ្យមើលអក្សរច្បាស់ */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ផ្នែក Menu ខាងលើ */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 p-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="
                bg-[#2c1a10]/90 text-stone-100 border-2 border-stone-400/50 
                px-6 py-3 rounded-2xl text-lg font-medium 
                transition-transform duration-200
                hover:animate-[wiggle_0.3s_ease-in-out_infinite]
                hover:bg-[#4a2c1a] hover:border-white
                shadow-lg
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* អក្សរតុបតែងខាងក្រោម */}
        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
          <h2 className="text-white/70 font-serif italic text-2xl tracking-widest uppercase">
            Classic Coffee House
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;