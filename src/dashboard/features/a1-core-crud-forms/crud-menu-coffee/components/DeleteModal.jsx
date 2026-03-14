import React from 'react';
import { WarningCircle } from '@phosphor-icons/react';

const DeleteModal = ({ isOpen, product, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#361205]/80 backdrop-blur-md flex items-center justify-center z-110 p-4 animate-in fade-in zoom-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden">
        <div className="p-8 text-center space-y-4">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-2 animate-bounce">
            <WarningCircle size={44} weight="fill" />
          </div>
          <h2 className="text-2xl font-black text-[#361205]">Confirm Deletion</h2>
          <p className="text-sm text-gray-500">You are about to permanently remove this product from the master database.</p>
          
          <div className="bg-gray-50 rounded-3xl p-4 flex items-center gap-4 text-left border border-gray-100 mt-6">
            <img src={product?.img} className="w-20 h-20 rounded-2xl object-cover shadow-sm" alt="" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black text-[#D1A872] uppercase tracking-widest">{product?.category}</p>
              <h4 className="font-black text-[#361205] truncate">{product?.name}</h4>
              <p className="font-bold text-[#361205] mt-1">${product?.price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-gray-100 mt-4">
          <button onClick={onCancel} className="bg-white py-6 text-sm font-black text-gray-400 uppercase tracking-widest hover:bg-gray-50 transition-all cursor-pointer">
            Go Back
          </button>
          <button onClick={onConfirm} className="bg-white py-6 text-sm font-black text-red-600 uppercase tracking-widest hover:bg-red-50 transition-all cursor-pointer">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;