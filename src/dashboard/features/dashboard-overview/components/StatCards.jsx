import React from 'react';
import { Receipt, Coffee, Users, Warning } from '@phosphor-icons/react';

const StatCards = ({ data }) => {
  
  const defaultStats = [
    { 
      title: "Total Sales", 
      value: data?.totalSales || "$12,840.50", 
      icon: Receipt, 
      trend: data?.salesTrend || "+12.5%", 
      color: "text-green-600" 
    },
    { 
      title: "New Orders", 
      value: data?.newOrders || "142", 
      icon: Coffee, 
      trend: data?.ordersTrend || "+8.2%", 
      color: "text-green-600" 
    },
    { 
      title: "Active Users", 
      value: data?.activeUsers || "1,205", 
      icon: Users, 
      trend: data?.usersTrend || "+5.1%", 
      color: "text-green-600" 
    },
    { 
      title: "Inventory Alerts", 
      value: data?.inventoryAlerts || "12 items low", 
      icon: Warning, 
      trend: data?.inventoryTrend || "-2.4%", 
      color: "text-red-500" 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {defaultStats.map((card, i) => (
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
  );
};

export default StatCards;