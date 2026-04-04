import React, { useState } from 'react'
import { RiTeamLine, RiDownloadLine } from "react-icons/ri";
import Statsrow from './components/Statsrow';
import UserTable from './components/UserTable';
import Useusers from './components/Useusers';
import AdduserPage from './components/AdduserPage';
import DeleteUserPage from './components/DeleteUserPage';
import EditUserPage from './components/EditUserPage';
import { RiSearchLine, RiNotification3Line, RiQuestionLine, RiUserAddLine } from "react-icons/ri";

const UserManagement = () => {
    const {
        paginated, filtered, stats,
        currentPage, totalPages, setCurrentPage,
        search, roleFilter, statusFilter,
        handleSearch, handleRoleFilter, handleStatusFilter,
        addUser, editUser, deleteUser,
    } = Useusers();

    const [showAddPage, setShowAddPage] = useState(false);
    // const [userModalOpen,   setUserModalOpen]   = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedUser,    setSelectedUser]    = useState(null);
    const [showEditPage,   setShowEditPage]   = useState(false);
    // const [showDeletePage, setShowDeletePage] = useState(false);

    const handleAddUser   = () => { setSelectedUser(null); setUserModalOpen(true); };
    // const handleEditUser  = (user) => { setSelectedUser(user); setUserModalOpen(true); };
    const handleEditUser = (user) => { setSelectedUser(user); setShowEditPage(true); };
    const handleDeleteClick = (id) => {
        const user = filtered.find((u) => u.id === id);
        setSelectedUser(user);
        // setShowDeletePage(true);
        setDeleteModalOpen(true);
    };
    const handleSave = (formData) => {
        selectedUser ? editUser(selectedUser.id, formData) : addUser(formData);
    };
   
    if (showAddPage) {
      return (
          <AdduserPage
              onBack={() => setShowAddPage(false)}
              onSave={(formData) => addUser(formData)}
          />
      );
    }

    if (showEditPage) {
    return (
        <EditUserPage
            user={selectedUser}
            onBack={() => setShowEditPage(false)}
            onSave={(formData) => editUser(selectedUser.id, formData)}
        />
    );
    }

    // if (showDeletePage) {
    //     return (
    //         <DeleteUserPage
    //             user={selectedUser}
    //             onBack={() => setShowDeletePage(false)}
    //             onConfirm={deleteUser}
    //         />
    //     );
    // }

  return (
    <div className="font-sans min-h-screen">
      {/* <Header search={search} onSearch={handleSearch} onAddUser={handleAddUser} /> */}

      <main className="p-2 md:p-3 lg:p-3 max-w-7xl mx-auto">
        {/* Breadcrumb - Hidden on small mobile */}
        <p className="hidden sm:block text-xs text-gray-400 mb-2">
            Dashboard &rsaquo; <span className="text-gray-600">User Management</span>
        </p>

        {/* Page title row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            {/* title */}
            <h1 className="text-2xl font-extrabold text-[#361205]">User Management</h1>
            <p className="text-sm text-gray-500 mt-1">
                Review and manage access for all registered platform members.
            </p>
          </div>

            <div className="flex gap-2">

              {/* Button Add new user */}
              <button
                onClick={() => setShowAddPage(true)}
                className="flex items-center gap-2 bg-[#361205] hover:bg-[#4d1a08] text-white text-sm font-semibold p-2 md:px-4 md:py-2 rounded-xl transition-all shadow-md"
              >
                <RiUserAddLine className="text-lg" />
                <span className="hidden md:inline">Add User</span>
              </button>

              {/*Button Roles */}
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm">
                  <RiTeamLine className="text-base" /> Roles
              </button>
              {/*Button Export */}
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm">
                  <RiDownloadLine className="text-base" /> Export
              </button>
            </div>
        </div>

        {/* stats - Now Grid-based */}
        <Statsrow stats={stats} />

        {/* table section */}
        <div className="mt-6">
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
        </div>

        <DeleteUserPage
            isOpen={deleteModalOpen} user={selectedUser}
            onClose={() => setDeleteModalOpen(false)} onConfirm={deleteUser}
          />

      </main>

    </div>
  )
}

export default UserManagement;