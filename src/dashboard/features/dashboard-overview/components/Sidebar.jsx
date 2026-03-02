import React from 'react';
import { 
  Coffee, 
  SquaresFour, 
  Receipt, 
  Warehouse, 
  Users, 
  ChartLineUp 
} from '@phosphor-icons/react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: SquaresFour, active: true },
    { name: 'Orders', icon: Receipt },
    { name: 'Inventory', icon: Warehouse },
    { name: 'Users', icon: Users },
    { name: 'Promotions', icon: Receipt },
    { name: 'Branches', icon: Warehouse },
    { name: 'Reports', icon: ChartLineUp },
  ];

  return (
    <aside className="w-64 bg-white flex flex-col border-r border-gray-100 p-6 shrink-0">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-[#361205] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#361205]/20">
          <Coffee size={24} weight="fill" />
        </div>
        <div>
          <h1 className="font-bold text-xl text-[#361205] tracking-tight">E-Coffee</h1>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.active 
                ? 'bg-[#361205]/5 text-[#361205] border-l-4 border-[#361205]' 
                : 'text-gray-500 hover:bg-[#F7F4E8]'
            }`}
          >
            <item.icon size={20} weight={item.active ? "fill" : "regular"} />
            <span className={`text-sm ${item.active ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* User Profile Mini Card */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Admin" 
            className="w-10 h-10 rounded-full bg-orange-100" 
          />
          <div>
            <p className="text-xs font-bold text-[#361205]">James Wilson</p>
            <p className="text-[10px] text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;