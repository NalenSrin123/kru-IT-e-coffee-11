import React from 'react';
import { useNavigate } from "react-router-dom";
import { 
  MagnifyingGlass, 
  Bell, 
  Gear, 
  SignOut, 
  List 
} from '@phosphor-icons/react';

const Topbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      console.log("Logout clicked");

      // remove all auth data
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // redirect to login
      navigate("/login");

    } catch (error) {
      console.log("Logout error:", error);

      // fallback logout
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 xl:left-64 h-20 flex items-center justify-between px-4 md:px-8 bg-white backdrop-blur-md border-b border-gray-100 shrink-0 z-10">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar} 
          className="xl:hidden p-2 text-[#361205] hover:bg-[#F7F4E8] rounded-lg transition-colors"
          aria-label="Open Menu"
        >
          <List size={26} weight="bold" />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <MagnifyingGlass 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18} 
          />  
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full bg-[#F7F4E8]/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#361205]/20 outline-none"
          />
        </div>

        <button className="sm:hidden p-2 text-gray-400">
          <MagnifyingGlass size={22} />
        </button>
      </div>
      
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-6">
        
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-gray-400 hover:text-[#361205] hover:bg-[#F7F4E8] rounded-lg transition-all">
            <Bell size={22} />
          </button>

          <button className="p-2 text-gray-400 hover:text-[#361205] hover:bg-[#F7F4E8] rounded-lg transition-all">
            <Gear size={22} />
          </button>
        </div>

        {/* LOGOUT BUTTON */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 border-l pl-4 md:pl-6 border-gray-200 transition-colors cursor-pointer"
        >
          <span className="hidden md:inline">Logout</span>
          <SignOut size={18} />
        </button>

      </div>
    </header>
  );
};

export default Topbar;