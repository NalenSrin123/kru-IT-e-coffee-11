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