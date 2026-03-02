// dashboard/features/dashboard-overview/DashboardMain.jsx
import React, { useEffect, useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { 
  Coffee, 
  SquaresFour, 
  Receipt, 
  Users, 
  ChartLineUp, 
  Warehouse, 
  Bell, 
  CaretDown, 
  ArrowUpRight,
  MagnifyingGlass,
  Gear,
  SignOut,
  Warning
} from '@phosphor-icons/react';

// Register Chart.js components for Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const DashboardOverview = () => {
  const [time, setTime] = useState('');

  // Clock functionality for the header
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Bar Chart Data
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales',
      data: [3000, 4500, 3200, 5000, 4000, 7500, 9000],
      backgroundColor: (context) => {
        const index = context.dataIndex;
        // Highlight Sunday with a darker shade as seen in the reference image
        return index === 6 ? '#361205' : '#D1A872'; 
      },
      borderRadius: 6,
      borderSkipped: false,
    }]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#361205',
        titleFont: { family: 'Plus Jakarta Sans' },
        bodyFont: { family: 'Plus Jakarta Sans' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0,0,0,0.03)' },
        ticks: { font: { size: 10 } }
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11, weight: '600' } }
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F4E8] text-[#211B1D] font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white flex flex-col border-r border-gray-100 p-6 flex-shrink-0">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-[#361205] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#361205]/20">
            <Coffee size={24} weight="fill" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-[#361205] tracking-tight">E-Coffee</h1>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { name: 'Dashboard', icon: SquaresFour, active: true },
            { name: 'Orders', icon: Receipt },
            { name: 'Inventory', icon: Warehouse },
            { name: 'Users', icon: Users },
            { name: 'Promotions', icon: Receipt },
            { name: 'Branches', icon: Warehouse },
            { name: 'Reports', icon: ChartLineUp },
          ].map(item => (
            <a key={item.name} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-[#361205]/5 text-[#361205] border-l-4 border-[#361205]' : 'text-gray-500 hover:bg-[#F7F4E8]'}`}>
              <item.icon size={20} weight={item.active ? "fill" : "regular"} />
              <span className={`text-sm ${item.active ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* User Profile Mini Card */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-10 h-10 rounded-full bg-latte" />
            <div>
              <p className="text-xs font-bold text-[#361205]">James Wilson</p>
              <p className="text-[10px] text-gray-400">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOPBAR */}
        <header className="h-20 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md border-b border-gray-100 flex-shrink-0 z-10">
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

        {/* CONTENT AREA */}
        <div className="flex-1 p-8 flex flex-col gap-8 overflow-y-auto">
          
          <div>
            <h2 className="text-2xl font-extrabold text-[#361205]">Dashboard Overview</h2>
            <p className="text-sm text-gray-500 font-medium mt-1">Manage your coffee empire performance and operations.</p>
          </div>

          {/* FOUR METRIC CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Sales", value: "$12,840.50", icon: Receipt, trend: "+12.5%", color: "text-green-600" },
              { title: "New Orders", value: "142", icon: Coffee, trend: "+8.2%", color: "text-green-600" },
              { title: "Active Users", value: "1,205", icon: Users, trend: "+5.1%", color: "text-green-600" },
              { title: "Inventory Alerts", value: "12 items low", icon: Warning, trend: "-2.4%", color: "text-red-500", alert: true },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#F7F4E8] rounded-lg text-[#361205]">
                    <card.icon size={24} weight="fill" />
                  </div>
                  <span className={`text-xs font-bold ${card.color}`}>{card.trend}</span>
                </div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{card.title}</p>
                <h3 className="text-2xl font-black text-[#361205] mt-1">{card.value}</h3>
              </div>
            ))}
          </div>

          {/* SALES TRENDS & POPULAR ITEMS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[#361205] text-lg">Sales Trends</h3>
                <div className="flex items-center gap-2 bg-[#F7F4E8] px-3 py-1.5 rounded-lg">
                  <span className="text-xs font-bold text-[#361205]">Last 7 Days</span>
                  <CaretDown size={14} />
                </div>
              </div>
              <div className="h-[300px]">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="font-bold text-[#361205] text-lg mb-6">Popular Items</h3>
              <div className="flex-1 space-y-5">
                {[
                  { name: "Ethiopian Dark Roast", price: "$12.50", sold: "420 units sold", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100" },
                  { name: "Classic Latte", price: "$4.95", sold: "385 units sold", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=100" },
                  { name: "Vanilla Cold Brew", price: "$5.50", sold: "312 units sold", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=100" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={item.img} className="w-12 h-12 rounded-xl object-cover bg-cream" alt={item.name} />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#361205] text-sm">{item.name}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{item.sold}</p>
                    </div>
                    <span className="font-bold text-sm text-[#361205]">{item.price}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 border-2 border-[#F7F4E8] rounded-xl text-xs font-bold text-[#361205] hover:bg-[#F7F4E8] transition-colors">
                View All Products
              </button>
            </div>
          </div>

          {/* RECENT ORDERS TABLE */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-[#361205] text-lg">Recent Orders</h3>
              <button className="text-xs font-bold text-roasted hover:underline">View Report</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                    <th className="pb-4 px-4">Order ID</th>
                    <th className="pb-4 px-4">Customer</th>
                    <th className="pb-4 px-4">Product</th>
                    <th className="pb-4 px-4">Amount</th>
                    <th className="pb-4 px-4">Status</th>
                    <th className="pb-4 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="text-sm group hover:bg-[#F7F4E8]/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-gray-500">#ORD-7291</td>
                    <td className="py-4 px-4 font-bold text-[#361205]">Alex Thompson</td>
                    <td className="py-4 px-4 text-gray-500">2x Arabica Blend</td>
                    <td className="py-4 px-4 font-bold">$32.00</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-full uppercase">Completed</span>
                    </td>
                    <td className="py-4 px-4 text-right text-gray-400 font-bold">•••</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};