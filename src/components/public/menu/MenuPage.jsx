import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import background from "../../../assets/images/coffee/coffee_background.jpg";
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [priceRange, setPriceRange] = useState(7.5);

  // ✅ STATES
  const [selectedCategories, setSelectedCategories] = useState(['All Drinks']);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 2, name: 'Matcha Green Tea', price: 2.50, desc: 'Premium matcha whisked with creamy milk over ice.', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&q=80' },
    { id: 3, name: 'Caramel Frappe', price: 3.25, desc: 'Blended coffee with rich caramel sauce and whipped cream.', image: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=500&q=80' },
    { id: 4, name: 'Signature Cold Brew', price: 3.00, desc: 'Slow-steeped for 24 hours for a super smooth finish.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80' },
    { id: 5, name: 'Hot Cappuccino', price: 2.25, desc: 'Classic espresso with equal parts steamed milk and foam.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80' },
    { id: 6, name: 'Passion Fruit Tea', price: 2.75, desc: 'Refreshing tropical fruit tea with real passion fruit.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80' },
  ];

  const categoryMap = {
    'Hot Coffee': ['Hot Cappuccino'],
    'Cold Drinks': ['Signature Cold Brew'],
    'Frappe Drinks': ['Caramel Frappe'],
    'Tea & Refreshers': ['Matcha Green Tea', 'Passion Fruit Tea'],
    'Specialty Drinks': []
  };

  // ✅ CATEGORY HANDLER
  const handleCategoryChange = (category) => {
    if (category === 'All Drinks') {
      setSelectedCategories(['All Drinks']);
    } else {
      let updated = [...selectedCategories.filter(c => c !== 'All Drinks')];

      if (updated.includes(category)) {
        updated = updated.filter(c => c !== category);
      } else {
        updated.push(category);
      }

      if (updated.length === 0) {
        updated = ['All Drinks'];
      }

      setSelectedCategories(updated);
    }
  };

  // ✅ UNIFIED FILTER FUNCTION
  const applyFilter = () => {
    let result = products;

    // CATEGORY FILTER
    if (!selectedCategories.includes('All Drinks')) {
      let allowedNames = [];

      selectedCategories.forEach(cat => {
        allowedNames = [...allowedNames, ...(categoryMap[cat] || [])];
      });

      result = result.filter(p => allowedNames.includes(p.name));
    }

    // PRICE FILTER
    result = result.filter(p => p.price <= priceRange);

    // SEARCH FILTER
    if (searchTerm.trim() !== '') {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  };

  return (
    <div className="min-h-screen text-gray-800 ">
      
      <div className='w-full sm:w-[90%] m-auto rounded-3xl overflow-hidden mt-3 mb-8 bg-linear-to-r from-orange-900/40 via-orange-900/10 to-orange-900/40'>
      
      <div className='w-full h-62.5 bg-amber-200 m-auto overflow-hidden border-[3px] border-orange-950'>
          <img className='w-full h-full object-cover' src={background} alt="" />
      </div>

      {/* SEARCH */}
      <header className="mt-5 p-4 rounded-2xl w-[95%] m-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="relative w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Search your favorite drink..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}

              // ✅ ENTER KEY TRIGGER
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  applyFilter();
                }
              }}

              className="w-full pl-10 pr-4 py-2 border bg-gray-100 border-black-900 outline-none focus:border-orange-950 rounded-full transition-all"
            />

            <Search className="absolute left-3 top-2.5 text-gray-400 size-5" />
          </div>

        </div>
      </header>

      <main className="w-[95%] m-auto md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-7">
        
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-8 p-6 rounded-2xl h-fit shadow-md bg-gray-50 ">
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2 border-black/50 uppercase tracking-wider ">Drink Category</h3>
            
            <div className="space-y-3 text-sm">
              {['All Drinks', 'Hot Coffee', 'Cold Drinks', 'Frappe Drinks', 'Tea & Refreshers', 'Specialty Drinks'].map((cat) => (
                
                <label key={cat} className="flex items-center gap-3 cursor-pointer hover:text-amber-700 transition-colors">
                  
                  <input 
                    type="checkbox"
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />

                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2 border-black/50 uppercase tracking-wider text-xs flex items-center gap-2">
               Filter by Price
            </h3>

            <input 
              type="range" 
              min="0" 
              max="10" 
              step="0.5" 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-700"
            />

            <div className="flex justify-between items-center mt-3">
              <span className="text-sm font-semibold">Price: $0 - ${priceRange}</span>

              {/* APPLY BUTTON */}
              <button 
                onClick={applyFilter}
                className="text-xs bg-amber-800 text-white px-3 py-1 rounded hover:bg-amber-900 transition-all"
              >
                APPLY
              </button>
            </div>
          </div>
        </aside>
        
        {/* PRODUCTS */}
        <div className="lg:col-span-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {(filteredProducts.length > 0 ? filteredProducts : products).map((item) => (
              
              <Link to="/detail" key={item.id} className="bg-white p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-amber-100">
                
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div>
                  <h4 className="font-bold text-[20px] p-2 group-hover:text-amber-800 transition-colors">{item.name}</h4>
                  <p className="text-gray-500 text-[14px] mb-4 line-clamp-2">{item.desc}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-amber-700">${item.price.toFixed(2)}</span>

                    <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-amber-800 hover:text-white transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>

              </Link>
            ))}

          </div>
        </div>

      </main>
      </div>
    </div>
  );
};

export default MenuPage;