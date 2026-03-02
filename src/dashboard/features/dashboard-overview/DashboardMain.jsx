import React from 'react';

// Import Components
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCards from './components/StatCards';
import SalesChart from './components/SalesChart';
import PopularItems from './components/PopularItems';
import RecentOrders from './components/RecentOrders';

export const DashboardOverview = () => {
  return (
    <div className="flex min-h-screen bg-[#F7F4E8] text-[#211B1D] font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar */}
        <Topbar />

        {/* Main Content Area */}
        <div className="flex-1 p-8 flex flex-col gap-8 overflow-y-auto">
          
          {/* Header */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#361205]">Dashboard Overview</h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Manage your coffee empire performance and operations.
            </p>
          </div>

          {/* Stats Cards (Total Sales, Orders, Users, Inventory Alerts) */}
          <StatCards />

          {/* Middle Section (Chart and Popular Products) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SalesChart />
            <PopularItems />
          </div>

          {/* Bottom Section (Orders Table) */}
          <RecentOrders />

        </div>
      </main>
    </div>
  );
};