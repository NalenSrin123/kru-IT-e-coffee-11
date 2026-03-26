import React from 'react'
import { RiEditLine, RiDeleteBinLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { ROLES } from './User';

// ── Role badge colours
const roleBadge = {
  Admin:    "bg-orange-100 text-orange-700 border border-orange-200",
  Staff:    "bg-blue-100 text-blue-700 border border-blue-200",
  Customer: "bg-gray-100 text-gray-600 border border-gray-200",
};

// ── Avatar with coloured initials
const Avatar = ({ user }) => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
    style={{ backgroundColor: user.color }}
  >
    {user.initials}
  </div>
);

// ── Filter bar
const FilterBar = ({ roleFilter, statusFilter, onRole, onStatus, total, from, to }) => (
  <div className="flex items-center gap-3 mb-4">
    <select
      value={roleFilter}
      onChange={(e) => onRole(e.target.value)}
      className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      <option>All Roles</option>
      {ROLES.map((r) => <option key={r}>{r}</option>)}
    </select>

    <select
      value={statusFilter}
      onChange={(e) => onStatus(e.target.value)}
      className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      <option>All Status</option>
      <option>Active</option>
      <option>Suspended</option>
    </select>

    <span className="ml-auto text-sm text-gray-500">
      Showing <strong>{from}–{to}</strong> of <strong>{total}</strong> users
    </span>
  </div>
);

// ── Pagination 
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3, "...", totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-1 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        <RiArrowLeftSLine className="text-lg" /> Previous
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-400">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 text-sm rounded-lg transition ${
              p === currentPage
                ? "bg-orange-500 text-white font-bold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next <RiArrowRightSLine className="text-lg" />
      </button>
    </div>
  );
};

const UserTable = ({
    users, filtered, currentPage, totalPages,
        roleFilter, statusFilter,
        onRoleFilter, onStatusFilter, onPageChange,
        onEdit, onDelete,
      }
    ) => {
        const from = (currentPage - 1) * 10 + 1;
        const to= Math.min(currentPage * 10, filtered.length);
  return (
     <div className="bg-white border border-gray-200 rounded-xl p-5">
      <FilterBar
        roleFilter={roleFilter} statusFilter={statusFilter}
        onRole={onRoleFilter}   onStatus={onStatusFilter}
        total={filtered.length} from={filtered.length === 0 ? 0 : from} to={to}
      />

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {["User", "Role", "Joined Date", "Status", "Actions"].map((h) => (
              <th
                key={h}
                className={`py-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wide ${
                  h === "Actions" ? "text-right" : "text-left"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-10 text-gray-400">
                No users match your search or filters.
              </td>
            </tr>
          )}

          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
              {/* Name + email */}
              <td className="py-3 px-3">
                <div className="flex items-center gap-3">
                  <Avatar user={user} />
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
              </td>

              {/* Role badge */}
              <td className="py-3 px-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${roleBadge[user.role] || roleBadge.Customer}`}>
                  {user.role.toUpperCase()}
                </span>
              </td>

              {/* Joined */}
              <td className="py-3 px-3 text-gray-600">{user.joined}</td>

              {/* Status */}
              <td className="py-3 px-3">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`} />
                  <span className={user.status === "Active" ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                    {user.status}
                  </span>
                </span>
              </td>

              {/* Actions */}
              <td className="py-3 px-3 text-right">
                <button
                  onClick={() => onEdit(user)}
                  className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded transition mr-1"
                  title="Edit user"
                >
                  <RiEditLine className="text-base" />
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition"
                  title="Delete user"
                >
                  <RiDeleteBinLine className="text-base" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  )
}

export default UserTable