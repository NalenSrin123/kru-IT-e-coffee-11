import React from 'react';

const PopularItems = ({ items }) => {
  const displayItems = items || [
    { 
      name: "Ethiopian Dark Roast", 
      price: "$12.50", 
      sold: "420 units sold", 
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100" 
    },
    { 
      name: "Classic Latte", 
      price: "$4.95", 
      sold: "385 units sold", 
      img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=100" 
    },
    { 
      name: "Vanilla Cold Brew", 
      price: "$5.50", 
      sold: "312 units sold", 
      img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=100" 
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
      <h3 className="font-bold text-[#361205] text-lg mb-6">Popular Items</h3>
      <div className="flex-1 space-y-5">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img 
              src={item.img} 
              className="w-12 h-12 rounded-xl object-cover" 
              alt={item.name} 
            />
            <div className="flex-1">
              <h4 className="font-bold text-[#361205] text-sm">{item.name}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                {item.sold}
              </p>
            </div>
            <span className="font-bold text-sm text-[#361205]">
              {item.price}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-3 border-2 border-[#F7F4E8] rounded-xl text-xs font-bold text-[#361205] hover:bg-[#F7F4E8]">
        View All Products
      </button>
    </div>
  );
};

export default PopularItems;