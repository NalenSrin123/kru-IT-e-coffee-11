import React, { useState, useEffect } from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const backgrounds = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1500',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1500',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1500'
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 60000); // ១ នាទីដូរម្ដង
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const menuItems = [
    "Espresso Bar",
    "Cold Brew & Iced",
    "Pastries & Bakery",
    "Signature Drinks"
  ];

  return (
    <div className="w-full bg-stone-900 pb-20">
      
      {/* --- Section 1: Hero Section --- */}
      <div className="relative w-full md:w-[90%] h-[500px] md:h-[700px] m-auto mt-4 overflow-hidden rounded-lg shadow-2xl">
        <div className="w-full overflow-hidden bg-black py-1 flex gap-5">
          <marquee className="text-white text-[15px]" behavior="alternate" scrolldelay="10">
            Welcome to ETEC Coffee – Premium Coffee Everyday
          </marquee>
        </div>
        
        <img className="absolute inset-0 w-full h-full object-cover" src={imgHeroSection} alt="hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="w-full px-6 md:px-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
              Welcome to <br />
              Morning
              <span className="ml-2 border-b-[4px] border-yellow-600 text-yellow-600">
                <Typewriter
                  words={["ETEC"]}
                  loop={0} cursor cursorStyle="."
                  typeSpeed={200} deleteSpeed={200} delaySpeed={900}
                />
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto font-light">
              Start your day with the finest handcrafted coffee, made from premium beans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-900 text-white hover:bg-amber-700 px-8 py-3 rounded-lg shadow-lg transition duration-300">
                Order Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition duration-300">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Menu Board (ទំហំស្មើ Hero ខាងលើ) --- */}
      <div className="flex items-center justify-center mt-10">
        <div 
          className="relative w-full md:w-[90%] h-[500px] border-[16px] border-[#3d2b1f] shadow-2xl rounded-sm overflow-hidden bg-cover bg-center transition-all duration-[2500ms] ease-in-out"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        >
          {/* Overlay បន្ថែមភាពងងឹតបន្តិចឱ្យលេចប៊ូតុង */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>

          {/* ប៊ូតុង Menu (លុប Animation ញាក់ចេញ) */}
          <div className="relative z-10 flex flex-wrap justify-center gap-6 p-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="
                  bg-[#2c1a10]/95 text-stone-100 border-2 border-stone-400/50 
                  px-8 py-4 rounded-xl text-xl font-medium 
                  transition-all duration-300
                  hover:bg-[#4a2c1a] hover:border-white hover:scale-105
                  hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  shadow-lg
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* អក្សរខាងក្រោម */}
          <div className="absolute bottom-12 left-0 right-0 text-center z-10">
            <h2 className="text-white/80 font-serif italic text-3xl tracking-[0.2em] uppercase">
              Classic Coffee House
            </h2>
            <div className="w-32 h-[2px] bg-amber-600/50 mx-auto mt-3"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;