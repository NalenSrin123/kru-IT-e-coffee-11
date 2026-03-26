import React from 'react';
import { 
  Coffee, 
  SquaresFour, 
  Receipt, 
  Warehouse, 
  Users, 
  ChartLineUp,
  X 
} from '@phosphor-icons/react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
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
    <>
      {/* Mobile Overlay: Darkens the background when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* The Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white flex flex-col border-r border-gray-100 p-6 transition-transform duration-300 ease-in-out
        xl:static xl:translate-x-0 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Logo & Close Button */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#361205] rounded-xl flex items-center justify-center text-white shadow-lg">
              <Coffee size={24} weight="fill" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-[#361205] tracking-tight">E-Coffee</h1>
              <span className="text-[10px] text-gray-400 uppercase font-semibold">Admin Panel</span>
            </div>
          </div>
          
          {/* Close button - Only visible on mobile */}
          <button onClick={toggleSidebar} className="xl:hidden p-2 text-gray-400">
            <X size={24} />
          </button>
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

        {/* User Profile */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-10 h-10 rounded-full bg-orange-100" />
            <div>
              <p className="text-xs font-bold text-[#361205]">James Wilson</p>
              <p className="text-[10px] text-gray-400">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;