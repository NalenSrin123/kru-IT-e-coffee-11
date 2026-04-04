import React from 'react'
import { RiEditLine, RiDeleteBinLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { ROLES } from './User';

const roleBadge = {
  Admin:    "bg-orange-50 text-orange-600 border border-orange-100",
  Staff:    "bg-blue-50 text-blue-600 border border-blue-100",
  Customer: "bg-gray-50 text-gray-500 border border-gray-100",
};

const Avatar = ({ user }) => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center
               text-white text-[10px] font-bold shrink-0 shadow-sm"
    style={{ backgroundColor: user.color || '#361205' }}
  >
    {user.initials}
  </div>
);

const UserTable = ({
    users, filtered, currentPage, totalPages,
    roleFilter, statusFilter, onRoleFilter, onStatusFilter, onPageChange, onEdit, onDelete
}) => {
    const from = (currentPage - 1) * 10 + 1;
    const to = Math.min(currentPage * 10, filtered.length);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Filter Bar - Responsive Stacking */}
      <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex w-full sm:w-auto gap-2">
            <select
              value={roleFilter}
              onChange={(e) => onRoleFilter(e.target.value)}
              className="flex-1 sm:w-32 border border-gray-200 rounded-lg px-3 
                py-2 text-xs font-semibold focus:ring-2 focus:ring-stone-600 focus:outline-none"
            >
              <option>All Roles</option>
              {ROLES.map((r) => <option key={r}>{r}</option>)}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => onStatusFilter(e.target.value)}
              className="flex-1 sm:w-32 border border-gray-200 rounded-lg px-3 
                py-2 text-xs font-semibold focus:ring-2 focus:ring-stone-600 focus:outline-none"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Suspended</option>
            </select>
        </div>

        <span className="text-[11px] text-gray-400 font-medium">
          Showing <strong className="text-gray-700">{from}–{to}</strong> of {filtered.length}
        </span>
      </div>

      {/* TABLE WRAPPER - Horizontal Scroll enabled */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-175">
          <thead className="bg-gray-50/50">
            <tr className="text-left">
              <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">User</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.length === 0 ? (
              <tr><td colSpan={4} className="py-12 text-center text-gray-400 text-xs">No matches found.</td></tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar user={user} />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800 text-sm">{user.name}</span>
                        <span className="text-[11px] text-gray-400">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md ${roleBadge[user.role] || roleBadge.Customer}`}>
                      {user.role.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`} />
                      <span className={`text-xs font-bold ${user.status === "Active" ? "text-green-600" : "text-red-500"}`}>{user.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => onEdit(user)} className="p-2 text-gray-400 hover:text-blue-500
                                                               hover:bg-blue-50 rounded-lg transition">
                        <RiEditLine size={16} />
                      </button>
                      <button onClick={() => onDelete(user.id)} className="p-2 text-gray-400 hover:text-red-500
                                                                   hover:bg-red-50 rounded-lg transition">
                        <RiDeleteBinLine size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Container */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/30">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1, 2, 3, "...", totalPages);
    }

    return (
        <div className="flex items-center justify-between">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-[#361205] disabled:opacity-30 transition"
            >
                <RiArrowLeftSLine size={20}/>
            </button>
            <div className="flex gap-1">
                {pages.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => typeof p === 'number' && onPageChange(p)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition ${p === currentPage ? 'bg-[#361205] text-white' : 'text-gray-400 hover:bg-gray-100'}`}
                    >
                        {p}
                    </button>
                ))}
            </div>
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-[#361205] disabled:opacity-30 transition"
            >
                <RiArrowRightSLine size={20}/>
            </button>
        </div>
    );
};

export default UserTable;