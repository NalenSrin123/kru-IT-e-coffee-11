import React from 'react'
import { RiGroupLine, RiUserStarLine, RiRadioButtonLine, RiForbidLine } from "react-icons/ri";

const StatCard = ({ label, value, badge, badgeColor, icon, iconBg }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start justify-between shadow-sm">
    <div>
      <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-[#361205]">{value}</span>
        {badge && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-gray-50 ${badgeColor}`}>{badge}</span>
        )}
      </div>
    </div>
    <div className={`p-3 rounded-xl ${iconBg} shadow-inner`}>{icon}</div>
  </div>
);

const Statsrow = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Total Users"
        value={stats.total.toLocaleString()}
        badge="+12%"
        badgeColor="text-orange-500"
        iconBg="bg-orange-50"
        icon={<RiGroupLine className="text-xl text-orange-400" />}
      />
      <StatCard
        label="Staff Members"
        value={stats.staff}
        badge="Stable"
        badgeColor="text-blue-500"
        iconBg="bg-blue-50"
        icon={<RiUserStarLine className="text-xl text-blue-400" />}
      />
      <StatCard
        label="Active Now"
        value={stats.active}
        badge="High"
        badgeColor="text-green-500"
        iconBg="bg-green-50"
        icon={<RiRadioButtonLine className="text-xl text-green-400" />}
      />
      <StatCard
        label="Suspended"
        value={stats.suspended}
        badge="-2"
        badgeColor="text-red-500"
        iconBg="bg-red-50"
        icon={<RiForbidLine className="text-xl text-red-400" />}
      />
    </div>
  )
}

export default Statsrow;