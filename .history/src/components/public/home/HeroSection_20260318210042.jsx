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

  useEffect(() => {
    const timer = setInterval(() => setBgIndex((prev) => (prev + 1) % backgrounds.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full pb-5 space-y-8 ">
      <div className="w-[100%] lg:w-[90%] sm:px-  m-auto ">
      <div className="relative w-[100%] h-[500px] md:h-[600px] mx-auto mt-5 overflow-hidden shadow-2xl rounded-t-3xl">
        <img src={imgHeroSection} className="absolute inset-0 w-full h-full object-cover " alt="Hero" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center lg:items-start   justify-center text-white text-center p-10">
        <div className="w-[600px] h-[320px] px-20 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to <br /> Morning <span className="text-amber-500 underline decoration-amber-600">
                  <Typewriter words={["ETEC"]} loop={0} cursor cursorStyle="|" />
                </span>
              </h1>
              <p className="mt-8">Discover the perfect blend of freshly roasted beans and a cozy atmosphere. <br /> Every cup is crafted with passion to brighten your day and fuel your soul.</p>
              <div className="flex gap-4 mt-10">
                <button className="bg-amber-800 px-8 py-3 border-[2px] border-orange-800  hover:bg-amber-700 transition rounded-2xl">Order Now</button>
                <button className="bg-gray-600 text-white border-[2px] border-gray-500 px-8 py-3  hover:bg-gray-500 transition rounded-2xl">View More</button>
              </div>
        </div>
        </div>
      </div>

      <div className="w-full h-[40px] bg-[#2c1a10] mt-1 rounded-b-3xl flex items-center overflow-hidden px-4 ">
        <div className=" w-[150px] h-[100%] flex justify-center items-center bg-[#2c1a10]"><span className="text-amber-500 font-bold uppercase">New Menu :</span> </div>
        <marquee behavior="scroll" direction="left" onMouseOver={(e) => e.currentTarget.stop()} onMouseOut={(e) => e.currentTarget.start()} scrollamount="5" className="text-gray-300 font-medium tracking-wide ">
          <span className="mx-4">
            Double Espresso / Classic Cappuccino / Flat White / Caramel Macchiato / Caffè Mocha / Nitro Cold Brew / Iced Americano / Vanilla Cream Cold Brew / Iced Dirty Latte / Iced Shaken Espresso / Butter Croissant / Chocolate Pain au Chocolat / Blueberry Muffin / Almond Danish / Red Velvet Cake / Sea Salt Cream Latte / Honey Oatmilk Shaken / Pistachio Matcha Latte / Spiced Pumpkin Spice / Iced Rose Lychee Tea
          </span>
        </marquee>
      </div>

      <div className="flex justify-center mt-5 ">
        <div className="relative w-[90%] lg:w-[100%] h-[350px] rounded-4xl  shadow-xl overflow-hidden">
          
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
              Special Categories
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