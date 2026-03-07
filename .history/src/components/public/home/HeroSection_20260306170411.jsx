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
      <div className="relative w-full h-[500px] md:h-[650px] mt-5 overflow-hidden shadow-2xl">
  {/* Image Background */}
  <img 
    src={imgHeroSection} 
    className="absolute inset-0 w-full h-full object-cover" 
    alt="Hero" 
  />
  
  {/* Overlay Content */}
  <div className={`
    absolute inset-0 bg-black/50 flex flex-col p-8 
    justify-center 
    items-center       {/* Default: Mobile នៅកណ្ដាល */}
    md:items-start     {/* Tablet/Laptop: មកខាងឆ្វេង */}
    lg:items-center    {/* Large Screen: ត្រឡប់មកកណ្ដាលវិញ */}
    md:px-20           {/* បន្ថែម Space ខាងឆ្វេងពេលនៅ screen មធ្យម */}
  `}>
    
    <div className={`
      w-full max-w-[800px] flex flex-col 
      items-center       {/* Default: កណ្ដាល */}
      md:items-start     {/* Tablet: ឆ្វេង */}
      lg:items-center    {/* Large: កណ្ដាល */}
      text-center        {/* Default: អក្សរកណ្ដាល */}
      md:text-left       {/* Tablet: អក្សរឆ្វេង */}
      lg:text-center     {/* Large: អក្សរកណ្ដាល */}
    `}>
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
        Welcome to <br /> 
        <span className="text-amber-500 underline decoration-amber-600">
          Morning <Typewriter words={["ETEC"]} loop={0} cursor cursorStyle="|" />
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-200 max-w-[600px] leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati pariatur nostrum ipsa cum deserunt, 
        odit voluptatem maxime officia? Eos, praesentium.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto">
        <button className="bg-amber-800 px-10 py-3 border-[2px] border-amber-800 hover:bg-amber-700 transition font-semibold shadow-lg min-w-[160px]">
          Order Now
        </button>
        <button className="bg-transparent backdrop-blur-sm text-white border-[2px] border-white/50 px-10 py-3 hover:bg-white hover:text-black transition font-semibold min-w-[160px]">
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