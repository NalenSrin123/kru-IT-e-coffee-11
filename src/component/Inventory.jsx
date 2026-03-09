import React, { useState } from "react";

function Inventory() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const products = [
    { name: "Midnight Roast", sku: "COF-MID-001", category: "Whole Bean", price: "$18.50", status: "In Stock", availability: ["Available+", "Uptown", "Suburbs"], image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&h=100&fit=crop" },
    { name: "Golden Espresso", sku: "COF-GLD-024", category: "Espresso", price: "$24.00", status: "Low Stock", availability: ["Downtown"], image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.pngg" },
    { name: "Summertime Cold Brew", sku: "COF-SUM-089", category: "Seasonal", price: "$21.00", status: "Out of Stock", availability: ["All Branches"], image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=100&h=100&fit=crop" },
    { name: "Ethiopian Yirgacheffe", sku: "COF-ETH-005", category: "Whole Bean", price: "$26.50", status: "In Stock", availability: ["Uptown", "Suburbs"], image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] w-full text-[#2D3748] font-sans">
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r flex flex-col transform transition-transform duration-200 md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D35400] rounded-lg flex items-center justify-center text-white font-bold">☕</div>
          <span className="font-bold text-xl text-[#D35400]">E-Coffee Admin</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {['Dashboard', 'Inventory', 'Orders', 'Customers', 'Analytics'].map((item) => (
            <button key={item} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${item === 'Inventory' ? 'bg-[#D35400] text-white shadow-lg shadow-orange-200' : 'text-[#718096] hover:bg-gray-100'}`}>
              <span className="text-sm">{item}</span>
            </button>
          ))}
        </nav>

        {/* User Profile Card */}
        <div className="p-4 border-t">
          <div className="bg-[#FDF2F0] p-3 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden border-2 border-white">
                <img src="https://i.pravatar.cc/100?u=alex" alt="profile" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2D3748]">Alex Rivier</p>
                <p className="text-[10px] text-[#718096]">Store Manager</p>
              </div>
            </div>
            <button className="text-gray-400 text-xs"></button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Header / Search */}
        <header className="h-20 bg-white border-b px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center flex-1 max-w-xl">
            <button className="md:hidden mr-4" onClick={() => setSidebarOpen(true)}>☰</button>
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></span>
              <input type="text" placeholder="Search coffee by name, SKU, or category..." className="w-full bg-[#FFF9F8] border border-orange-50 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <div className="relative p-2 text-gray-400">n<span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-white"></span></div>
            <button className="bg-[#D35400] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 transition-all">+ Add New Coffee</button>
          </div>
        </header>

        <main className="p-4 sm:p-8 overflow-y-auto">
          {/* Title & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#1A202C] tracking-tight">Coffee Inventory</h1>
              <p className="text-[#718096] text-sm mt-1 font-medium">Manage your coffee products, pricing, and availability across branches.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"><span>≡</span> Filter</button>
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"><span>e</span> Export</button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['All Products', 'Espresso', 'Whole Bean', 'Seasonal', 'Accessories'].map((cat, i) => (
              <button key={cat} className={`px-5 py-1.5 rounded-full text-xs font-bold border transition-all ${i === 0 ? 'bg-[#D35400] text-white border-[#D35400]' : 'bg-white text-[#718096] border-gray-100 hover:border-orange-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Product Table Container */}
          <div className="bg-[#FFF9F8] rounded-[2rem] border border-orange-100 p-2 shadow-sm mb-8">
            <div className="bg-white rounded-[1.8rem] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white border-b border-gray-50">
                    <tr className="text-[10px] uppercase font-bold text-[#A0AEC0] tracking-widest">
                      <th className="p-6">Product</th>
                      <th className="p-6">Category</th>
                      <th className="p-6">Base Price</th>
                      <th className="p-6">Availability</th>
                      <th className="p-6">Status</th>
                      <th className="p-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {products.map((item, idx) => (
                      <tr key={idx} className="group hover:bg-orange-50/30 transition-all">
                        <td className="p-6 flex items-center gap-4">
                          <img src={item.image} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt="" />
                          <div>
                            <p className="font-bold text-[#2D3748] text-sm">{item.name}</p>
                            <p className="text-[10px] text-[#A0AEC0] font-mono mt-0.5">SKU: {item.sku}</p>
                          </div>
                        </td>
                        <td className="p-6 text-xs font-semibold text-[#718096]">{item.category}</td>
                        <td className="p-6 text-sm font-black text-[#2D3748]">{item.price}</td>
                        <td className="p-6">
                          <div className="flex flex-wrap gap-1 max-w-[150px]">
                            {item.availability.map((loc) => (
                              <span key={loc} className={`px-2 py-0.5 rounded text-[9px] font-bold ${loc === 'All Branches' ? 'bg-[#E6FFFA] text-[#319795]' : 'bg-[#F0FFF4] text-[#38A169]'}`}>
                                {loc}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.status === 'In Stock' ? 'bg-green-500' : item.status === 'Low Stock' ? 'bg-orange-400' : 'bg-slate-300'}`}></span>
                            <span className={`text-xs font-bold ${item.status === 'In Stock' ? 'text-green-600' : item.status === 'Low Stock' ? 'text-orange-500' : 'text-slate-400'}`}>
                              {item.status}
                            </span>
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          <button className="text-gray-300 group-hover:text-orange-600 font-bold transition-colors text-xl">···</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-50 flex items-center justify-between">
                <p className="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-widest px-4">Showing 4 of 24 products</p>
                <div className="flex items-center gap-2">
                   <button className="p-2 text-xs text-gray-400">‹</button>
                   <button className="w-8 h-8 rounded-lg bg-[#D35400] text-white text-xs font-bold">1</button>
                   <button className="w-8 h-8 rounded-lg text-gray-400 text-xs font-bold">2</button>
                   <button className="w-8 h-8 rounded-lg text-gray-400 text-xs font-bold">3</button>
                   <button className="p-2 text-xs text-gray-400">›</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total SKU", val: "128", trend: " +12% this month", tColor: "text-green-500" },
              { label: "Low Stock Items", val: "14", trend: " Needs attention", tColor: "text-orange-500" },
              { label: "In Stock Value", val: "$42,850", trend: " Updated 2h ago", tColor: "text-gray-400" },
              { label: "Avg. Margin", val: "64%", trend: " Above target", tColor: "text-orange-600" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[10px] font-black text-[#A0AEC0] uppercase tracking-widest">{stat.label}</p>
                <h2 className="text-3xl font-black text-[#1A202C] mt-2">{stat.val}</h2>
                <p className={`text-[10px] mt-2 font-bold ${stat.tColor}`}>{stat.trend}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Inventory;