import React, { useState, useEffect } from "react";
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import imgCategory1 from "../../../assets/images/coffee/img_category1.avif";
import imgCategory2 from "../../../assets/images/coffee/img_category2.avif";
import imgCategory3 from "../../../assets/images/coffee/img_category3.webp";

import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const backgrounds = [
    imgCategory1,imgCategory2,imgCategory3
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // ប្តូរ Index រាល់ ១ នាទី
  useEffect(() => {
    const timer = setInterval(() => setBgIndex((prev) => (prev + 1) % backgrounds.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full pb-5 space-y-8 ">
      <div className="w-[90%] m-auto ">
      <div className="relative w-full h-[500px] md:h-[600px] mt-5 overflow-hidden shadow-2xl">
  {/* Image Background */}
  <img 
    src={imgHeroSection} 
    className="absolute inset-0 w-full h-full object-cover" 
    alt="Hero" 
  />
  
  {/* Overlay Content */}
  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-6 md:p-10">
    <div className="w-full max-w-[800px] flex flex-col items-center text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Welcome to <br /> 
        <span className="text-amber-500 underline decoration-amber-600">
          Morning <Typewriter words={["ETEC"]} loop={0} cursor cursorStyle="|" />
        </span>
      </h1>

      {/* Description - លាក់ខ្លះលើ Mobile ដើម្បីកុំឱ្យវែងពេក ឬប្រើ text-sm */}
      <p className="mt-4 md:mt-8 text-sm md:text-lg text-gray-200 max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati pariatur nostrum ipsa cum deserunt, 
        odit voluptatem maxime officia? Eos, praesentium.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto">
        <button className="bg-amber-800 px-8 py-3 border-[2px] border-amber-800 hover:bg-amber-700 transition w-full sm:w-auto">
          Order Now
        </button>
        <button className="bg-gray-600/50 backdrop-blur-sm text-white border-[2px] border-gray-500 px-8 py-3 hover:bg-gray-500 transition w-full sm:w-auto">
          View More
        </button>
      </div>
      
    </div>
  </div>
</div>

      
      <div className="flex justify-center mt-10">
        <div className="relative w-[100%] h-[350px] rounded-4xl  shadow-xl overflow-hidden">
          
          
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
    </div>
  );
};

export default HeroSection;