import React from 'react';
import { ArrowLeft, CloudArrowUp, FloppyDisk, Camera, Info } from '@phosphor-icons/react';

const FormView = ({ isEdit, formData, setFormData, onBack, onSubmit }) => {
  return (
    <div className="max-w-6xl mx-auto animate-in slide-in-from-right duration-500 space-y-6 pb-12">
      {/* Top Navigation */}
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-[#361205] font-bold text-sm transition-all group cursor-pointer">
        <ArrowLeft size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back to Menu Management
      </button>

      {/* Header with Integrated Status */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-black text-[#361205]">
              {!isEdit ? "New Product Entry" : "Modify Information"}
            </h1>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${isEdit ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
              {isEdit ? "Editing Mode" : "Draft"}
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium mt-1">Fill in the product specifications below.</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-6">
            <h4 className="text-[15px] font-black text-[#361205]/40 uppercase tracking-[0.2em] mb-4 px-2">Visual Image</h4>
            
            <div className="relative group w-full aspect-4/5 mb-6">
              <img 
                src={formData.img || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"} 
                className="w-full h-full object-cover rounded-4xl border-2 border-dashed border-gray-100 shadow-inner" 
                alt="Preview" 
              />
              <div className="absolute inset-0 bg-[#361205]/40 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <Camera size={32} weight="fill" />
                <span className="text-[10px] font-bold uppercase mt-2">Change Image</span>
              </div>
            </div>
            
            <div className="w-full space-y-4">
              <div className="relative">
                <label className="text-[9px] font-black text-[#361205]/60 uppercase tracking-widest ml-1 mb-1 block">Image Source URL</label>
                <div className="relative">
                  <input 
                    name="img" value={formData.img} onChange={(e) => setFormData({...formData, img: e.target.value})}
                    placeholder="https://..." 
                    className="w-full bg-[#F7F4E8]/40 border border-[#361205]/10 rounded-xl p-3 text-xs focus:ring-2 focus:ring-[#361205]/20 focus:bg-white outline-none font-bold transition-all pr-10"
                  />
                  <CloudArrowUp size={18} className="absolute right-3 top-2.5 text-[#361205]/40" />
                </div>
              </div>

              <div className="bg-[#F7F4E8]/50 p-4 rounded-2xl border border-[#361205]/5">
                <div className="flex gap-2 items-start text-[#361205]/70">
                  <Info size={16} weight="bold" className="mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase leading-tight">Image Guide</p>
                    <p className="text-[10px] leading-relaxed opacity-70">Use high-resolution images. Upload from device or paste direct image URL.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Data Form */}
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
                <label className="text-[10px] font-black text-[#361205]/60 uppercase tracking-widest ml-1">Product Description</label>
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
                {!isEdit ? "Create Product" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormView;