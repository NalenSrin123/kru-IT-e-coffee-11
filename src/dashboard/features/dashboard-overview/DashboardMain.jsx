import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCards from './components/StatCards';
import SalesChart from './components/SalesChart';
import PopularItems from './components/PopularItems';
import RecentOrders from './components/RecentOrders';

// export const DashboardOverview = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="flex min-h-screen bg-[#F7F4E8] text-[#211B1D] font-sans overflow-hidden relative">
      
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
//         <Topbar toggleSidebar={toggleSidebar} />

//         {/* Main Content Area */}
//         <div className="flex-1 p-4 md:p-8 flex flex-col gap-8 overflow-y-auto">
          
//           {/* Header */}
//           <div>
//             <h2 className="text-2xl font-extrabold text-[#361205]">Dashboard Overview</h2>
//             <p className="text-sm text-gray-500 font-medium mt-1">
//               Manage your coffee empire performance and operations.
//             </p>
//           </div>

//           <StatCards />

//           {/* Middle Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <SalesChart />
//             <PopularItems />
//           </div>

//           {/* Bottom Section */}
//           <RecentOrders />

//         </div>
//       </main>
//     </div>
//   );
// };

export const DashboardOverview = () => {
  return (
    <div className="flex flex-col gap-8">
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