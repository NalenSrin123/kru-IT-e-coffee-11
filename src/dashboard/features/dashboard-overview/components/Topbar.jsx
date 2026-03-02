import React from 'react';
import { MagnifyingGlass, Bell, Gear, SignOut } from '@phosphor-icons/react';

const Topbar = () => {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md border-b border-gray-100 shrink-0 z-10">
      <div className="relative w-96">
        <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />  
        <input 
          type="text" 
          placeholder="Search analytics or orders..." 
          className="w-full bg-[#F7F4E8]/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-latte"
        />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-[#361205] transition-colors"><Bell size={22} /></button>
          <button className="text-gray-400 hover:text-[#361205] transition-colors"><Gear size={22} /></button>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 border-l pl-6 border-gray-200">
          <span>Logout</span>
          <SignOut size={18} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;