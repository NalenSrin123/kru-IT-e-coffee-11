import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCards from './components/StatCards';
import SalesChart from './components/SalesChart';
import PopularItems from './components/PopularItems';
import RecentOrders from './components/RecentOrders';

export const DashboardOverview = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h2 className="text-2xl font-extrabold text-[#361205]">Dashboard Overview</h2>
        <p className="text-sm text-gray-500 font-medium mt-1">Manage your coffee empire.</p>
      </div>
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <PopularItems />
      </div>
      <RecentOrders />
    </div>
  );
};