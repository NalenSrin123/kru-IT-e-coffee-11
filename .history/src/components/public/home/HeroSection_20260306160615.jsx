import React, { useState, useEffect } from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import imgHeroSection from "../../../assets/images/coffee/img_category1";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const backgrounds = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200'
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // ប្តូរ Index រាល់ ១ នាទី
  useEffect(() => {
    const timer = setInterval(() => setBgIndex((prev) => (prev + 1) % backgrounds.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full pb-5 space-y-8">
      
      {/* --- Section 1: Hero (រក្សារូបថេរ) --- */}
      <div className="relative w-[90%] h-[500px] md:h-[600px] mx-auto mt-5 rounded-xl overflow-hidden shadow-2xl border-4 border-[#3d2b1f]">
        <img src={imgHeroSection} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center p-5">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <br /> Morning <span className="text-amber-500 underline decoration-amber-600">
              <Typewriter words={["ETEC"]} loop={0} cursor cursorStyle="|" />
            </span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati pariatur nostrum ipsa cum deserunt <br />, odit voluptatem maxime officia? Eos, praesentium.</p>
          <button className="bg-amber-800 px-8 py-3 rounded-lg hover:bg-amber-700 mt-4 transition">Order Now</button>
        </div>
      </div>

      {/* --- Section 2: Menu Board (ប្តូររូបពីឆ្វេងទៅស្តាំ) --- */}
      <div className="flex justify-center">
        <div className="relative w-[90%] h-[450px] border-[14px] border-[#3d2b1f] rounded shadow-xl overflow-hidden">
          
          {/* Inner Slider: រុញរូបភាពពីឆ្វេងទៅស្តាំ */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${bgIndex * 100}%)` }}
          >
            {backgrounds.map((img, i) => (
              <div 
                key={i} 
                className="min-w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${img})` }} 
              />
            ))}
          </div>

          {/* Overlay & Content (នៅថេរមួយកន្លែង) */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center pointer-events-none">
            <h2 className=" text-white/80 italic text-2xl tracking-widest uppercase border-b border-white/20 pt-4">
              Special Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4 p-5 pointer-events-auto">
              {["Espresso Bar", "Cold Brew & Iced", "Pastries & Bakery", "Signature Drinks"].map((item) => (
                <button key={item} className="bg-[#2c1a10]/90 text-white border border-stone-500 px-6 py-3 rounded-xl hover:bg-amber-900 transition-all active:scale-95">
                  {item}
                </button>
              ))}
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;