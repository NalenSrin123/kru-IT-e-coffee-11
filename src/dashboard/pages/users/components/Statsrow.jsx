import React from 'react'
import { RiGroupLine, RiUserStarLine, RiRadioButtonLine,  RiForbidLine } from "react-icons/ri";

const StatCard = ({ label, value, badge, badgeColor, icon, iconBg }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start justify-between">
    <div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-extrabold text-gray-800">{value}</span>
        {badge && (
          <span className={`text-xs font-semibold ${badgeColor}`}>{badge}</span>
        )}
      </div>
    </div>
    <div className={`p-2 rounded-lg ${iconBg}`}>{icon}</div>
  </div>
);

const Statsrow = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Total Users */}
    <StatCard
      label="Total Users"
      value={stats.total.toLocaleString()}
      badge="+12%"
      badgeColor="text-orange-500"
      iconBg="bg-orange-50"
      icon={<RiGroupLine className="text-xl text-orange-400" />}
    />
    <StatCard
    // Staff Members
      label="Staff Members"
      value={stats.staff}
      badge="Stable"
      badgeColor="text-blue-500"
      iconBg="bg-blue-50"
      icon={<RiUserStarLine className="text-xl text-blue-400" />}
    />
    <StatCard
    // Active Now
      label="Active Now"
      value={stats.active}
      badge="High"
      badgeColor="text-green-500"
      iconBg="bg-green-50"
      icon={<RiRadioButtonLine className="text-xl text-green-400" />}
    />
    <StatCard
    // Suspended
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

export default Statsrow