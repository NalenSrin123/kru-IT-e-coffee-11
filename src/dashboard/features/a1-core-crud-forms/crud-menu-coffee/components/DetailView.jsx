import React from 'react';
import { ArrowLeft, PencilSimple, Star, CheckCircle, WarningCircle } from '@phosphor-icons/react';

const DetailView = ({ product, onBack, onEdit, onDelete }) => {
  return (
    <div className="animate-in slide-in-from-right duration-500 space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-[#361205] font-bold text-sm transition-all group cursor-pointer">
        <ArrowLeft size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back to Inventory
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <img src={product.img} className="w-full aspect-square object-cover rounded-4xl" alt="" />
          </div>
          <div className="bg-[#361205] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Sourcing</p>
              <h4 className="text-xl font-bold mt-2">Verified Supplier</h4>
              <p className="text-sm text-white/60 mt-2 leading-relaxed italic">"Quality checks passed. Sustainable farming certification active for 2026."</p>
            </div>
            <CheckCircle size={80} weight="fill" className="absolute -bottom-4 -right-4 text-white/5" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start border-b border-gray-50 pb-8 mb-8">
              <div>
                <span className="text-xs text-[#D1A872] font-black uppercase tracking-[0.2em]">{product.category}</span>
                <h1 className="text-4xl font-black text-[#361205] mt-2">{product.name}</h1>
                <p className="text-gray-400 text-xs font-bold mt-1">SKU: {product.sku}</p>
              </div>
              <button 
                onClick={onEdit}
                className="flex items-center gap-2 bg-[#F7F4E8] text-[#361205] px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#361205] hover:text-white transition-all shadow-sm cursor-pointer"
              >
                <PencilSimple size={18} weight="bold" /> Edit Product
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-[#F7F4E8]/30 rounded-3xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Unit Price</p>
                <p className="text-3xl font-black text-[#361205] mt-1">${product.price.toFixed(2)}</p>
              </div>
              <div className="p-6 bg-[#F7F4E8]/30 rounded-3xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Inventory</p>
                <p className="text-3xl font-black text-[#361205] mt-1">{product.stock} <span className="text-xs text-gray-400">pcs</span></p>
              </div>
              <div className="p-6 bg-[#F7F4E8]/30 rounded-3xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Customer Rating</p>
                <div className="flex items-center gap-2 mt-1 text-[#361205]">
                  <Star size={24} weight="fill" className="text-yellow-500" />
                  <p className="text-2xl font-black">{product.rating}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Description</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">System Information</h5>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                    <span className="text-gray-400 font-bold">Supplier</span>
                    <span className="text-[#361205] font-bold">{product.supplier}</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                    <span className="text-gray-400 font-bold">Date Created</span>
                    <span className="text-[#361205] font-bold">{product.dateAdded}</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                    <span className="text-gray-400 font-bold">Status</span>
                    <span className="text-green-600 font-bold italic">Active in Menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
                <WarningCircle size={32} weight="fill" />
              </div>
              <div>
                <h4 className="font-black text-[#361205]">Delete Product</h4>
                <p className="text-xs text-gray-500 max-w-md mt-1">Permanently remove this product from the database.</p>
              </div>
            </div>
            <button 
              onClick={onDelete}
              className="px-8 py-4 bg-white text-red-600 border border-red-200 rounded-2xl font-black text-xs uppercase hover:bg-red-600 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              Delete Forever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;