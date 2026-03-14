import React from 'react'
import { RiSearchLine, RiNotification3Line, RiQuestionLine, RiUserAddLine } from "react-icons/ri";


const Header = ({ search, onSearch, onAddUser }) => {
  return (
    <div>
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-5 gap-4">
      {/* ── Search bar ── */}
      <div className="flex-1 relative max-w-md">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
        <input
          type="text"
          placeholder="Search users by name, email, or role..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>

      {/* ── Icon buttons ── */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Bell */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <RiNotification3Line className="text-lg" />
        </button>

        {/* Help */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <RiQuestionLine className="text-lg" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* Add New User */}
        <button
          onClick={onAddUser}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          <RiUserAddLine className="text-base" />
          Add New User
        </button>
      </div>
    </header>
    </div>
  )
}

export default Header