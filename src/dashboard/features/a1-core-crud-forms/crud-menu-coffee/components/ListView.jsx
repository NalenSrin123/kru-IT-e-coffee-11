import React from 'react';
import { Plus, PencilSimple, Trash } from '@phosphor-icons/react';
import { getStockStatus, getStockColor } from '../utils/helpers';

const ListView = ({ menuItems, onAddNew, onEdit, onDeleteClick }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-[#361205] tracking-tight">Menu Management</h2>
          <p className="text-sm text-gray-500 font-medium">Global inventory and product specifications</p>
        </div>
        <button 
          onClick={onAddNew}
          className="flex items-center justify-center gap-2 bg-[#361205] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl hover:bg-[#4d1a07] transition-all cursor-pointer"
        >
          <Plus size={20} weight="bold" />
          Add New Coffee
        </button>
      </div>

      <div className="bg-white rounded-[2rem] md:rounded-4xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px] md:min-w-full">
            <thead>
              <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] bg-gray-50/50 border-b border-gray-100">
                <th className="py-5 px-6">Product</th>
                <th className="py-5 px-6">Category</th>
                <th className="py-5 px-6">Price</th>
                <th className="py-5 px-6">Stock Level</th>
                <th className="py-5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {menuItems.map(item => (
                <tr key={item.id} className="hover:bg-[#F7F4E8]/20 transition-all group">
                  <td className="py-5 px-6 flex items-center gap-4">
                    <img src={item.img} className="w-12 h-12 rounded-2xl object-cover shadow-sm" alt="" />
                    <div className="flex flex-col">
                        <span className="font-bold text-[#361205] text-sm">{item.name}</span>
                        <span className="text-[10px] text-gray-400 font-bold">#{String(item.id).padStart(4, '0')}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.category}</td>
                  <td className="py-5 px-6 font-black text-[#361205]">${item.price.toFixed(2)}</td>
                  <td className="py-5 px-6">
                    <span className={`px-3 py-1 text-[10px] font-black rounded-lg border whitespace-nowrap ${getStockColor(item.stock)}`}>
                      {getStockStatus(item.stock)} ({item.stock})
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex justify-end gap-2">
                        <button 
                            onClick={() => onEdit(item)}
                            className="p-2 text-[#D1A872] hover:bg-[#361205] hover:text-white rounded-xl transition-all cursor-pointer"
                            title="Edit Product"
                        >
                            <PencilSimple size={20} weight="bold" />
                        </button>
                        <button 
                            onClick={() => onDeleteClick(item)}
                            className="p-2 text-red-300 hover:bg-red-500 hover:text-white rounded-xl transition-all cursor-pointer"
                            title="Delete Product"
                        >
                            <Trash size={20} weight="bold" />
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListView;