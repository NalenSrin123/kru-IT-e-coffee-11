import React from 'react';
import { 
  MagnifyingGlass, 
  Bell, 
  Gear, 
  SignOut, 
  List 
} from '@phosphor-icons/react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="h-20 flex items-center justify-between px-4 md:px-8 bg-white/80 backdrop-blur-md border-b border-gray-100 shrink-0 z-10">
      
      {/* LEFT SECTION: Hamburger & Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Hamburger Button - Hidden on Desktop (lg) */}
        <button 
          onClick={toggleSidebar} 
          className="xl:hidden p-2 text-[#361205] hover:bg-[#F7F4E8] rounded-lg transition-colors"
          aria-label="Open Menu"
        >
          <List size={26} weight="bold" />
        </button>

        {/* Search Bar - Hidden on extra small mobile, visible on tablet/desktop */}
        <div className="relative w-full max-w-md hidden sm:block">
          <MagnifyingGlass 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18} 
          />  
          <input 
            type="text" 
            placeholder="Search analytics or orders..." 
            className="w-full bg-[#F7F4E8]/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#361205]/20 outline-none"
          />
        </div>

        {/* Mobile Search Icon - Only visible when the full bar is hidden */}
        <button className="sm:hidden p-2 text-gray-400">
          <MagnifyingGlass size={22} />
        </button>
      </div>
      
      {/* RIGHT SECTION: Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-gray-400 hover:text-[#361205] hover:bg-[#F7F4E8] rounded-lg transition-all">
            <Bell size={22} />
          </button>
          <button className="p-2 text-gray-400 hover:text-[#361205] hover:bg-[#F7F4E8] rounded-lg transition-all">
            <Gear size={22} />
          </button>
        </div>

        {/* Logout - Label hidden on small mobile to save space */}
        <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 border-l pl-4 md:pl-6 border-gray-200 transition-colors">
          <span className="hidden md:inline">Logout</span>
          <SignOut size={18} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;