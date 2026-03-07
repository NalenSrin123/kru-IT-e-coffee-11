import React, { useState, useEffect } from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const backgrounds = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200'
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // ប្តូរ Background រាល់ 1 នាទី
  useEffect(() => {
    const timer = setInterval(() => setBgIndex((prev) => (prev + 1) % backgrounds.length), );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full  pb-10 space-y-10">
      
      {/* --- Section 1: Hero --- */}
      <div className="relative w-[90%] h-[500px] md:h-[650px] mx-auto mt-5 rounded-xl overflow-hidden shadow-2xl">
        <img src={imgHeroSection} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <br /> Morning <span className="text-amber-500 border-b-4 border-amber-600">
              <Typewriter words={["ETEC"]} loop={0} cursor cursorStyle="|" />
            </span>
          </h1>
          <p className="text-gray-300 max-w-lg mb-8">Premium handcrafted coffee made from world-class beans.</p>
          <div className="flex gap-4">
            <button className="bg-amber-800 hover:bg-amber-700 px-8 py-3 rounded-lg transition">Order Now</button>
            <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition">View Menu</button>
          </div>
        </div>
      </div>

      {/* --- Section 2: Menu Board (ប្រវែងស្មើ Hero) --- */}
      <div className="flex justify-center">
        <div 
          className="relative w-[90%] h-[450px] border-[14px] border-[#3d2b1f] rounded shadow-2xl bg-cover bg-center transition-all duration-[2000ms] flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Buttons (លុប Animation ញាក់ចេញ) */}
          <div className="relative z-10 flex flex-wrap justify-center gap-5 p-5">
            {["Espresso Bar", "Cold Brew & Iced", "Pastries & Bakery", "Signature Drinks"].map((item) => (
              <button key={item} className="bg-[#2c1a10]/90 text-white border border-stone-500 px-6 py-3 rounded-xl hover:scale-105 hover:bg-[#4a2c1a] transition duration-300">
                {item}
              </button>
            ))}
          </div>

          <h2 className="relative z-10 mt-10 text-white/70 italic text-2xl tracking-widest uppercase border-t border-white/20 pt-4">
            Classic Coffee House
          </h2>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;