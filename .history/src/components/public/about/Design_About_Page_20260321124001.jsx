import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-[#f9f8f8] min-h-screen font-sans">


      <div className="border-4 border-gray-500 mx-4 md:mx-10 mt-4">
        <div className="bg-[url('https://i.pinimg.com/736x/cf/8c/4a/cf8c4a0534f15ae84650ce823dd0e1cf.jpg')] bg-cover bg-center h-40 md:h-56 flex items-center justify-center ">
          <h1 className="text-3xl md:text-5xl font-black text-white">
            ABOUT US
          </h1>
        </div>
      </div>

      <section className="px-6 md:px-16 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="font-black text-lg mb-3">WHO WE ARE</h2>
          <p className="text-sm leading-relaxed">
            We are passionate coffee lovers dedicated to crafting exceptional
            moments in every cup. Our mission is simple — to redefine everyday
            rituals through high-quality beans, carefully crafted recipes, and a
            warm, welcoming experience.
          </p>
        </div>

        <div className="flex gap-4 ">
          <div className="bg-white rounded-xl p-4 flex-1 text-center shadow  transition-transform duration-300 hover:scale-110">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-xs">WORLDWIDE STORY</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex-1 text-center shadow  transition-transform duration-300 hover:scale-110">
            <p className="text-2xl font-bold">100+</p>
            <p className="text-xs">COFFEE & DRINKS</p>
          </div>
        </div>
      </section>

      <div className="text-center py-10">
        <h2 className="text-xl md:text-2xl font-black">
          MAKING HISTORY <br /> TOGETHER
        </h2>
        <p className="text-xs mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="relative px-6 md:px-20 pb-16">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-400"></div>

        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-10 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 p-4 h-[250px] md:h-[300px]  transition-transform duration-300 hover:scale-110">
              <img
                src={
                  index === 0
                    ? "https://i.pinimg.com/736x/8c/93/71/8c9371a0d2b7bdd8bbe84369cb858188.jpg"
                    : index === 1
                      ? "https://i.pinimg.com/1200x/9e/56/0c/9e560cdb73ae2abfd80577e093f8335b.jpg"
                      : index === 2
                        ? "https://i.pinimg.com/1200x/97/68/81/97688163bf8262ab7787a9e219322335.jpg"
                        : "https://i.pinimg.com/1200x/6d/c5/3f/6dc53fe5237d33aaf32342279fdb5170.jpg"
                }
                alt="coffee"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center  transition-transform duration-300 hover:scale-110">
              <h3 className="font-bold text-sm mb-2">
                {index === 0
                  ? "Razox was founded in the United Kingdom with a vision to redefine the global coffee experience."
                  : index === 1
                    ? "We expanded our coffee shops across Europe, bringing our unique flavors and atmosphere to new communities."
                    : index === 2
                      ? "We introduced premium coffee blends crafted with passion and quality, gaining worldwide recognition."
                      : "Today, Razox continues to grow globally, serving over 100+ drinks and creating memorable moments."}
              </h3>
              <p className="text-xs leading-relaxed  transition-transform duration-300 hover:scale-110">
                {index === 0
                  ? "Our journey began with a small coffee shop in London, driven by a passion for quality and customer experience. From the beginning, we focused on delivering rich flavors and a warm environment for everyone."
                  : index === 1
                    ? "As our popularity grew, we expanded into different cities across Europe. Each new location was designed to maintain our identity while connecting with local culture and coffee lovers."
                    : index === 2
                      ? "We continuously innovated our menu by introducing premium blends and unique drinks. Our dedication to quality ingredients and creative recipes helped us stand out in the global market."
                      : "Today, we proudly serve customers around the world. Our mission remains the same — to create meaningful experiences through every cup of coffee we deliver."}
              </p>
            </div>

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
