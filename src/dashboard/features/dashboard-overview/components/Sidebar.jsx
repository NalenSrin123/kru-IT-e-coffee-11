import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import these
import { 
  SquaresFour,
  Coffee, 
  UserList,     
  Package,     
  UserGear,     
  CookingPot,   
  X 
} from '@phosphor-icons/react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation(); // This helps us see which page is currently active

  const menuItems = [
    { name: 'Dashboard', icon: SquaresFour, path: '/dashboard' },
    { name: 'Customers', icon: UserList, path: '/dashboard/customers' },
    { name: 'Inventory', icon: Package, path: '/dashboard/inventory' },
    { name: 'Users', icon: UserGear, path: '/dashboard/users' },
    { name: 'Menu', icon: CookingPot, path: '/dashboard/menu' },
    { name: 'Category', icon: CookingPot, path: '/dashboard/category' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* The Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white flex flex-col border-r border-gray-100 p-6 transition-transform duration-300 ease-in-out
        xl:translate-x-0 
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
          
          <button onClick={toggleSidebar} className="xl:hidden p-2 text-gray-400">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            // Check if the current URL matches the item path
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1280) toggleSidebar(); // Close sidebar on mobile after click
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-[#361205]/5 text-[#361205] border-l-4 border-[#361205]' 
                    : 'text-gray-500 hover:bg-[#F7F4E8]'
                }`}
              >
                <item.icon size={20} weight={isActive ? "fill" : "regular"} />
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
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