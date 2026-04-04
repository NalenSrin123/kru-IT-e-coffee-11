// import React from 'react';
// import { RiArrowLeftLine, RiDeleteBinLine, RiAlertLine } from 'react-icons/ri';

// const DeleteUserPage = ({ user, onBack, onConfirm }) => {
//   const handleDelete = () => {
//     onConfirm(user.id);
//     onBack();
//   };

//   return (
//     <div className="font-sans">
//       <div className="flex flex-col p-2 md:p-3 w-full">
//         {/* Breadcrumb */}
//         <p className="hidden sm:block text-xs text-gray-400 mb-2">
//           Dashboard › <span className="text-gray-500">User Management</span> › <span className="text-gray-700 font-semibold">Delete User</span>
//         </p>

//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6">
//           <button onClick={onBack} className="p-2 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-500 transition">
//             <RiArrowLeftLine size={18} />
//           </button>
//           <div>
//             <h1 className="text-2xl font-extrabold text-[#361205]">Delete User</h1>
//             <p className="text-sm text-gray-500 mt-0.5">This action cannot be undone.</p>
//           </div>
//         </div>

//         {/* Card */}
//         <div className="bg-white border border-gray-100 rounded-2xl shadow-sm w-full p-8 md:p-10 flex flex-col items-center text-center gap-6">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//             <RiAlertLine className="text-3xl text-red-500" />
//           </div>

//           <div>
//             <h2 className="text-lg font-bold text-gray-800 mb-1">Are you sure?</h2>
//             <p className="text-sm text-gray-500">
//               You are about to delete <span className="font-semibold text-gray-800">{user?.name}</span>.
//               This will permanently remove their account and all associated data.
//             </p>
//           </div>

//           {/* User info box */}
//           <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-left">
//             <p className="text-xs text-gray-400 uppercase font-bold mb-2">User Details</p>
//             <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
//             <p className="text-xs text-gray-400">{user?.email}</p>
//             <div className="flex gap-2 mt-2">
//               <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-50 text-orange-600 border border-orange-100">{user?.role?.toUpperCase()}</span>
//               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${user?.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>{user?.status}</span>
//             </div>
//           </div>

//           <div className="flex gap-3 w-full">
//             <button onClick={onBack}
//               className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition">
//               Cancel
//             </button>
//             <button onClick={handleDelete}
//               className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-xl transition shadow-md">
//               <RiDeleteBinLine size={16} />
//               Delete User
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteUserPage;

import React from 'react'
import { RiAlertLine } from "react-icons/ri";

const DeleteModal = ({ isOpen, user, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6">
        {/* Warning icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
            <RiAlertLine className="text-3xl text-red-500" />
          </div>
        </div>

        <h2 className="text-lg font-bold text-center text-gray-800 mb-1">Delete User</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-gray-800">{user.name}</span>?
          This action cannot be undone.
        </p>

        <div className="flex gap-3">
          <button onClick={onClose}
            className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2 rounded-lg hover:bg-gray-50 transition">
            Cancel
          </button>
          <button onClick={() => { onConfirm(user.id); onClose(); }}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 rounded-lg transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal