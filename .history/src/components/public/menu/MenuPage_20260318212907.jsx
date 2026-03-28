

import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import Navbar from '../../Navbar'
import Footer from '../../common/Footer';
import background from "../../../assets/images/coffee/coffee_background.jpg";


const MenuPage = () => {
  const [priceRange, setPriceRange] = useState(7.5);


  const products = [
    { id: 1, name: 'Iced Latte Coffee', price: 2.00, desc: 'Smooth espresso blended with fresh milk and ice.', image: 'https://images.unsplash.com/photo-1517701604599-bb2450458d22?w=500&q=80' },
    { id: 2, name: 'Matcha Green Tea', price: 2.50, desc: 'Premium matcha whisked with creamy milk over ice.', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&q=80' },
    { id: 3, name: 'Caramel Frappe', price: 3.25, desc: 'Blended coffee with rich caramel sauce and whipped cream.', image: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=500&q=80' },
    { id: 4, name: 'Signature Cold Brew', price: 3.00, desc: 'Slow-steeped for 24 hours for a super smooth finish.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80' },
    { id: 5, name: 'Hot Cappuccino', price: 2.25, desc: 'Classic espresso with equal parts steamed milk and foam.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80' },
    { id: 6, name: 'Passion Fruit Tea', price: 2.75, desc: 'Refreshing tropical fruit tea with real passion fruit.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80' },
  ];

  return (
    <div className="min-h-screen text-gray-800 ">
      <Navbar/>
      <div className='w-[90%] h-[250px] rounded-3xl mt-2 bg-amber-200 m-auto overflow-hidden  border-[3px] border-orange-950'>
          <img className='w-[100%] h-[100%] object-cover' src={background} alt="" />
      </div>
      <div className='w-[90%] m-auto rounded-3xl '>
      <header className="mt-5 p-4  rounded-2xl w-[90%] m-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-1/2">
            <input type="text" placeholder="Search your favorite drink..." className="w-full pl-10 pr-4 py-2 border bg-gray-100 border-black-900 outline-none focus:border-orange-950 rounded-full transition-all"/>
            <Search className="absolute left-3 top-2.5 text-gray-400 size-5" />
          </div>

          <div className="flex items-center gap-4 px-2">
            <select className=" outline-none  text-sm font-medium focus:ring-0 cursor-pointer border bg-gray-100 border-black-900 pl-10 pr-4 py-2 rounded-2xl ">
              <option>Default Sorting </option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </header>

      <main className="w-[90%] m-auto md:p-6 grid grid-cols-1 md:grid-cols-4 gap-7">
        
        {/* --- Sidebar (Filter) --- */}
        <aside className="md:col-span-1 space-y-8 p-6 rounded-2xl h-fit shadow-md ">
          <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2 border-amber-200 uppercase tracking-wider text-xs">Drink Category</h3>
            <div className="space-y-3 text-sm">
              {['All Drinks', 'Hot Coffee', 'Cold Drinks', 'Frappe Drinks', 'Tea & Refreshers', 'Specialty Drinks'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer hover:text-amber-700 transition-colors">
                  <input type="checkbox" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" defaultChecked={cat === 'All Drinks'} />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2 border-amber-200 uppercase tracking-wider text-xs flex items-center gap-2">
               Filter by Price
            </h3>
            <input type="range" min="0" max="10" step="0.5" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-700"/>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm font-semibold">Price: $0 - ${priceRange}</span>
              <button className="text-xs bg-amber-800 text-white px-3 py-1 rounded hover:bg-amber-900 transition-all">APPLY</button>
            </div>
          </div>
        </aside>

        {/* --- Product Grid --- */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-amber-100">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-1 group-hover:text-amber-800 transition-colors">{item.name}</h4>
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-amber-700">${item.price.toFixed(2)}</span>
                    <button className="bg-amber-50 text-amber-800 px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-amber-800 hover:text-white transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Pagination --- */}
          <div className="flex justify-center items-center mt-12 gap-2">
            <button className="p-2 rounded-lg bg-white shadow-sm border hover:bg-gray-50"><ChevronLeft size={20}/></button>
            {[1, 2, 3, 4].map((n) => (
              <button key={n} className={`size-10 rounded-lg font-medium transition-all ${n === 1 ? 'bg-amber-800 text-white' : 'bg-white hover:bg-amber-50 shadow-sm border'}`}>
                {n}
              </button>
            ))}
            <button className="p-2 rounded-lg bg-white shadow-sm border hover:bg-gray-50"><ChevronRight size={20}/></button>
          </div>
        </div>

      </main>
      </div>
      <Footer/>
    </div>
  );
};

export default MenuPage;