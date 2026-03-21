import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../features/dashboard-overview/components/Sidebar';
import Topbar from '../features/dashboard-overview/components/Topbar';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-[#F7F4E8] text-[#211B1D] font-serif overflow-hidden relative">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className="pt-20 xl:ml-64 flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar toggleSidebar={toggleSidebar} />
        
        {/* This Outlet is where Menu, Users, and Customers will appear */}
        <div className="flex-1 overflow-y-auto p-4 md:p-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;