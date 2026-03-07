import React from 'react';

const RecentOrders = ({ orders }) => {
  const defaultOrders = orders || [
    {
      id: "#ORD-7291",
      customer: "Alex Thompson",
      product: "2x Arabica Blend",
      amount: "$32.00",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: "#ORD-7292",
      customer: "Sarah Jenkins",
      product: "1x Vanilla Latte, 1x Croissant",
      amount: "$12.50",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      id: "#ORD-7293",
      customer: "Michael Chen",
      product: "3x Ethiopian Roast (Whole Bean)",
      amount: "$45.00",
      status: "Pending",
      statusColor: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-[#361205] text-lg">Recent Orders</h3>
        <button className="text-xs font-bold text-[#D1A872] hover:underline">View Report</button>
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
            {defaultOrders.map((order, index) => (
              <tr key={index} className="text-sm hover:bg-[#F7F4E8]/30 transition-colors group">
                <td className="py-4 px-4 font-bold text-gray-500">{order.id}</td>
                <td className="py-4 px-4 font-bold text-[#361205]">{order.customer}</td>
                <td className="py-4 px-4 text-gray-500">{order.product}</td>
                <td className="py-4 px-4 font-bold">{order.amount}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 ${order.statusColor} text-[10px] font-black rounded-full uppercase`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right text-gray-400 font-bold cursor-pointer group-hover:text-[#361205]">
                  •••
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;