import React from 'react';
import { WarningCircle } from '@phosphor-icons/react';

const DeleteModal = ({ isOpen, product, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#361205]/80 backdrop-blur-md flex items-center justify-center z-[200] p-4 md:p-6 animate-in fade-in zoom-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-6 md:p-8 text-center space-y-4">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-2 animate-bounce">
            <WarningCircle size={40} weight="fill" />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-[#361205]">Confirm Deletion</h2>
          <p className="text-xs md:text-sm text-gray-500 px-4">You are about to permanently remove this product from the master database. This action cannot be undone.</p>
          
          <div className="bg-gray-50 rounded-3xl p-3 md:p-4 flex items-center gap-4 text-left border border-gray-100 mt-6 mx-auto w-full max-w-sm">
            <img src={product?.img} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-sm" alt="" />
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-black text-[#D1A872] uppercase tracking-widest">{product?.category}</p>
              <h4 className="font-black text-[#361205] truncate text-sm md:text-base">{product?.name}</h4>
              <p className="font-bold text-[#361205] mt-1 text-xs md:text-sm">${product?.price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-gray-100 border-t border-gray-100">
          <button onClick={onCancel} className="bg-white py-5 md:py-6 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest hover:bg-gray-50 transition-all cursor-pointer">
            Go Back
          </button>
          <button onClick={onConfirm} className="bg-white py-5 md:py-6 text-[10px] md:text-xs font-black text-red-600 uppercase tracking-widest hover:bg-red-50 transition-all cursor-pointer">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;