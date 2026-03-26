import React, { useState } from 'react'
import { RiTeamLine, RiDownloadLine } from "react-icons/ri";
import Header from './components/Header';
import Statsrow from './components/Statsrow';
import UserTable from './components/UserTable';
import UserModal from './components/UserModal';
import DeleteModal from './components/DeleteModal';
import Useusers from './components/Useusers';

const UserManagement = () => {
    const {
        paginated, filtered, stats,
        currentPage, totalPages, setCurrentPage,
        search, roleFilter, statusFilter,
        handleSearch, handleRoleFilter, handleStatusFilter,
        addUser, editUser, deleteUser,
    } = Useusers();

    const [userModalOpen,   setUserModalOpen]   = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedUser,    setSelectedUser]    = useState(null);

    const handleAddUser   = () => { setSelectedUser(null); setUserModalOpen(true); };
    const handleEditUser  = (user) => { setSelectedUser(user); setUserModalOpen(true); };
    const handleDeleteClick = (id) => {
        const user = filtered.find((u) => u.id === id);
        setSelectedUser(user);
        setDeleteModalOpen(true);
    };
    const handleSave = (formData) => {
        selectedUser ? editUser(selectedUser.id, formData) : addUser(formData);
    };
  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
    <Header search={search} onSearch={handleSearch} onAddUser={handleAddUser} />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Breadcrumb */}
          <p className="text-xs text-gray-400 mb-1">
              Dashboard &rsaquo; <span className="text-gray-600">User Management</span>
          </p>

        {/* Page title row */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">User Management</h1>
              <p className="text-sm text-gray-500 mt-0.5">
                  Review and manage access for all registered platform members.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
                  <RiTeamLine className="text-base" /> Manage Roles
              </button>
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
                  <RiDownloadLine className="text-base" /> Export CSV
              </button>
            </div>
          </div>

        {/* stats */}
        <Statsrow stats={stats} />

          <UserTable
            users={paginated}
            filtered={filtered}    
            currentPage={currentPage}
            totalPages={totalPages}
            roleFilter={roleFilter}
            statusFilter={statusFilter}
            onRoleFilter={handleRoleFilter}
            onStatusFilter={handleStatusFilter}
            onPageChange={setCurrentPage}
            onEdit={handleEditUser}
            onDelete={handleDeleteClick}
          />
      </main>
    </div>

    <UserModal
      isOpen={userModalOpen} user={selectedUser}
      onClose={() => setUserModalOpen(false)} onSave={handleSave}
      />
    <DeleteModal
      isOpen={deleteModalOpen} user={selectedUser}
      onClose={() => setDeleteModalOpen(false)} onConfirm={deleteUser}
    />
    </div>
  )
}

export default UserManagement