import React from 'react';
import { X, CloudArrowUp } from '@phosphor-icons/react';

const FormModal = ({ isOpen, isEdit, formData, setFormData, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#361205]/60 backdrop-blur-md flex items-center justify-center z-100 p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 max-h-[90vh] flex flex-col">
        <div className="px-10 py-5 border-b border-gray-100 flex justify-between items-center bg-[#361205]">
          <h2 className="text-xl font-black text-[#F7F4E8]">{!isEdit ? "New Product Entry" : "Modify Information"}</h2>
          <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 text-[#F7F4E8] rounded-full transition-all cursor-pointer">
            <X size={20} weight="bold" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-8 bg-white overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-4"> 
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Product Name *</label>
                <input 
                  required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Arabica Dark Blend" 
                  className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Category</label>
                  <select 
                    name="category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold cursor-pointer transition-all"
                  >
                    <option>Hot Coffee</option>
                    <option>Cold Brew</option>
                    <option>Whole Bean</option>
                    <option>Pastry</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Unit Price ($) *</label>
                  <input 
                    required type="number" step="0.01" name="price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="0.00" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Stock Level</label>
                  <input 
                    type="number" name="stock" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    placeholder="0" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Rating (0-5)</label>
                  <input 
                    type="number" step="0.1" name="rating" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})}
                    placeholder="5.0" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">SKU Identification</label>
                <input 
                  name="sku" value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})}
                  placeholder="ECOFFEE-XXXX" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Product Visual (URL)</label>
                <div className="relative group">
                  <input 
                    name="img" value={formData.img} onChange={(e) => setFormData({...formData, img: e.target.value})}
                    placeholder="https://..." className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                  />
                  <CloudArrowUp size={18} className="absolute right-3 top-3.5 text-[#361205]/40" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Supplier Entity</label>
                <input 
                  name="supplier" value={formData.supplier} onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                  placeholder="Brand Name" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Product Narrative</label>
                <textarea 
                  name="description" rows="4" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe flavor notes..." 
                  className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-medium resize-none transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 border-t border-gray-100 pt-6">
            <button type="button" onClick={onClose} className="px-6 py-3 text-gray-500 font-black text-[10px] uppercase tracking-widest hover:text-red-600 transition-colors cursor-pointer">
              Discard
            </button>
            <button type="submit" className="px-8 py-3 bg-[#361205] text-[#F7F4E8] rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#4d1a07] transition-all cursor-pointer">
              {!isEdit ? "Commit Product" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;