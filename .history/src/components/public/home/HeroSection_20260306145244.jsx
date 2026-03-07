import React, { useState, useEffect } from "react"; // បន្ថែម useState និង useEffect នៅទីនេះ
import imgHeroSection from "../../../assets/images/coffee/imgHeroSection.png";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  // ១. បញ្ជីរូបភាពសម្រាប់ដូរ Background
  const backgrounds = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1500',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1500',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1500'
  ];

  const [currentBg, setCurrentBg] = useState(0);

  // ២. បង្កើត Logic សម្រាប់ដូរ Background រាល់ ១ នាទី
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [backgrounds.length]);

  const menuItems = [
    "Espresso Bar",
    "Cold Brew & Iced",
    "Pastries & Bakery",
    "Signature Drinks"
  ];

  return (
    <div className="w-full pb-10">
      {/* --- ផ្នែក Hero Section ខាងលើ --- */}
      <div className="relative w-full md:w-[90%] h-[500px] md:h-[700px] m-auto mt-4 overflow-hidden rounded-lg shadow-2xl">
        <div className="w-full overflow-hidden bg-black py-1 flex gap-5">
          <marquee className="text-white text-[15px]" behavior="alternate" scrolldelay="10">
            Welcome to ETEC Coffee – Premium Coffee Everyday
          </marquee>
        </div>
        
        <img className="absolute inset-0 w-full h-full object-cover" src={imgHeroSection} alt="hero" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center">
          <div className="w-full px-6 md:px-20 py-20 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
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

            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0 font-light">
              Start your day with the finest handcrafted coffee,
              made from premium beans sourced worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-900 text-white hover:bg-amber-700 px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Order Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition duration-300">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- ផ្នែក Menu Board (Animated) --- */}
      <div className="flex items-center justify-center mt-20 px-4">
        <div 
          className="relative w-full max-w-5xl h-[450px] border-[16px] border-[#3d2b1f] shadow-2xl rounded-sm overflow-hidden bg-cover bg-center transition-all duration-[2000ms] ease-in-out"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        >
          {/* Overlay សម្រាប់បិទបាំងរូបភាពបន្តិចឱ្យច្បាស់ប៊ូតុង */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

          <div className="relative z-10 flex flex-wrap justify-center gap-4 p-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="
                  bg-[#2c1a10]/90 text-stone-100 border-2 border-stone-400/50 
                  px-6 py-3 rounded-2xl text-lg font-medium 
                  transition-all duration-200
                  hover:animate-[wiggle_0.3s_ease-in-out_infinite]
                  hover:bg-[#4a2c1a] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                  shadow-lg
                "
              >
                {item}
              </button>
            ))}
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center z-10">
            <h2 className="text-white/70 font-serif italic text-2xl tracking-widest uppercase">
              Classic Coffee House
            </h2>
            <div className="w-24 h-px bg-white/30 mx-auto mt-2"></div>
          </div>
        </div>
      </div>

      {/* CSS សម្រាប់ Animation ញាក់ */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      ` }} />
    </div>
  );
};

export default HeroSection;