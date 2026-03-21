import React from 'react';
import { ArrowLeft, CloudArrowUp, FloppyDisk, Camera } from '@phosphor-icons/react';

const FormView = ({ isEdit, formData, setFormData, onBack, onSubmit }) => {
  return (
    <div className="max-w-6xl mx-auto animate-in slide-in-from-right duration-500 space-y-6 pb-12">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-[#361205] font-bold text-sm transition-all group cursor-pointer">
        <ArrowLeft size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back to Inventory
      </button>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-[#361205]">
            {!isEdit ? "New Product Entry" : "Modify Information"}
          </h1>
          <p className="text-gray-500 text-sm font-medium mt-1">Fill in the coffee specifications below.</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Visuals */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
             <div className="relative group w-full aspect-square mb-6">
                <img 
                    src={formData.img || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"} 
                    className="w-full h-full object-cover rounded-4xl border-2 border-dashed border-gray-200" 
                    alt="Preview" 
                />
                <div className="absolute inset-0 bg-black/40 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera size={40} className="text-white" />
                </div>
             </div>
             
             <div className="w-full space-y-1 text-left">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Image URL</label>
                <div className="relative">
                  <input 
                    name="img" value={formData.img} onChange={(e) => setFormData({...formData, img: e.target.value})}
                    placeholder="https://..." 
                    className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                  />
                  <CloudArrowUp size={18} className="absolute right-3 top-3.5 text-[#361205]/40" />
                </div>
                <p className="text-[9px] text-gray-400 mt-2 italic px-1">Upload to cloud or paste direct image URL</p>
             </div>
          </div>

          <div className="bg-[#361205] p-8 rounded-[2.5rem] text-white shadow-xl">
             <h4 className="text-xl font-bold">System Status</h4>
             <div className="mt-6 space-y-3">
                <div className="flex justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-white/40 font-bold uppercase tracking-widest">Entry Type</span>
                    <span className="font-bold">{isEdit ? 'Update' : 'New Draft'}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-white/40 font-bold uppercase tracking-widest">Visibility</span>
                    <span className="text-green-400 font-bold italic">Ready to Menu</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Data Entry */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Product Name *</label>
                <input 
                  required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Arabica Dark Blend" 
                  className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Category</label>
                <select 
                  name="category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold cursor-pointer transition-all"
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
                  placeholder="0.00" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Stock Level</label>
                <input 
                  type="number" name="stock" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  placeholder="0" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">SKU Code</label>
                <input 
                  name="sku" value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})}
                  placeholder="ECOFFEE-XXXX" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Supplier Entity</label>
                <input 
                  name="supplier" value={formData.supplier} onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                  placeholder="Brand or Partner Name" className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Product Narrative</label>
                <textarea 
                  name="description" rows="4" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe flavor notes, origin, etc..." 
                  className="w-full bg-[#F7F4E8]/30 border border-[#361205]/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-medium resize-none transition-all"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8 border-t border-gray-100 pt-8">
              <button type="button" onClick={onBack} className="px-8 py-4 text-gray-400 font-black text-[10px] uppercase tracking-widest hover:text-red-600 transition-colors cursor-pointer text-center">
                Discard Changes
              </button>
              <button type="submit" className="flex items-center justify-center gap-2 px-10 py-4 bg-[#361205] text-[#F7F4E8] rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-[#4d1a07] transition-all cursor-pointer">
                <FloppyDisk size={18} weight="bold" />
                {!isEdit ? "Commit Product" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormView;