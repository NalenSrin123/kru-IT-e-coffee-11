import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatusBadge = ({ status }) => (
  <span className={`text-[10px] font-black px-2.5 py-1 rounded-md border tracking-wider ${status === 'ACTIVE' ? "bg-green-50 text-green-700 border-green-100" : "bg-stone-100 text-stone-500 border-stone-200"}`}>
    {status}
  </span>
);
const CustomerLists = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  let itemsPerPage=5;
  useEffect(() => {
    const savedData = localStorage.getItem('my_customer_list');
    if (savedData) {
      setCustomers(JSON.parse(savedData));
    } else {
      const initialData = [
        { id: 1, name: "Liam Brown", email: "liam.b@email.com", phone: "555-0101", status: "ACTIVE" },
        { id: 2, name: "Ava Smith", email: "ava.s@email.com", phone: "555-0102", status: "INACTIVE" },
        { id: 3, name: "Liana Broth", email: "liana.b@email.com", phone: "555-0103", status: "ACTIVE" },
        { id: 4, name: "Mava Smith", email: "mava.s@email.com", phone: "555-0104", status: "ACTIVE" },
        { id: 5, name: "Noah Wilson", email: "noah.w@email.com", phone: "555-0105", status: "INACTIVE" },
        { id: 6, name: "Emma Davis", email: "emma.d@email.com", phone: "555-0106", status: "ACTIVE" },
        { id: 7, name: "Oliver Platt", email: "oliver.p@email.com", phone: "555-0107", status: "INACTIVE" },
      ];
      setCustomers(initialData);
      localStorage.setItem('my_customer_list', JSON.stringify(initialData));
    }
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); // Added missing state
  const [viewingCustomer, setViewingCustomer] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);

  // 3. Filtering Logic
  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const matchesSearch = 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || customer.status === statusFilter.toUpperCase();
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter, customers]);

  const paginatedCustomers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCustomers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCustomers, currentPage]);

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const resetData = () => {
    localStorage.removeItem('my_customer_list');
    window.location.reload();
  };

  return (
    <div className="p-4 md:p-8 bg-[#F9F6F2] min-h-screen font-sans text-[#2D241E]">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#2D1B14]">Customer Lists</h1>
            <p className="text-stone-500 text-sm">Manage your member database</p>
          </div>
        </header>

        {/* --- TOOLBAR --- */}
        <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-xs font-bold mb-1.5 text-stone-600 uppercase tracking-wider">Search</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Name or email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-3 md:py-2 border border-stone-300 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#2D1B14] outline-none transition-all bg-white"
              />
              <Search className="absolute right-3 top-3.5 md:top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="w-full md:w-48 relative">
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="appearance-none w-full bg-white border border-stone-300 rounded-xl pl-4 pr-10 py-3 outline-none cursor-pointer text-sm font-medium shadow-sm">
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-stone-50 border-b border-stone-100">
              <tr>
                <th className="px-6 py-4 font-bold text-[12px] uppercase tracking-widest text-black">Customer</th>
                <th className="px-6 py-4 font-bold text-[12px] uppercase tracking-widest text-black text-center">Contact</th>
                <th className="px-6 py-4 font-bold text-[12px] uppercase tracking-widest text-black text-center">Phone</th>
                <th className="px-6 py-4 font-bold text-[12px] uppercase tracking-widest text-black text-center">Status</th>
                <th className="px-6 py-4 font-bold text-[12px] uppercase tracking-widest text-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {paginatedCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full border" src={`https://ui-avatars.com/api/?name=${c.name}&background=random`} alt="" />
                    <div className="font-bold text-[#2D1B14]">{c.name}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-xs font-medium text-stone-600">{c.email}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-xs font-medium text-stone-600">{c.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-center"><StatusBadge status={c.status} /></td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => navigate(`/edit/${c.id}`)} className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#2D1B14] text-stone-600 hover:text-white rounded-lg transition-all text-xs font-bold border border-stone-200 shadow-sm">
                      <Edit2 size={14} /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination Footer */}
<div className="px-6 py-4 bg-stone-50 border-t flex items-center justify-between">
  {/* Previous Button */}
  <button 
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
    className="flex items-center gap-1 text-sm font-bold text-stone-500 hover:text-black disabled:opacity-30 disabled:hover:text-stone-500 transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
    <span>Previous</span>
  </button>

  {/* Dynamic Page Numbers */}
  <div className="flex gap-2">
    {Array.from({ length: Math.ceil(filteredCustomers.length / 5) || 1 }, (_, i) => i + 1).map(n => (
      <button 
        key={n}
        onClick={() => setCurrentPage(n)}
        className={`w-8 h-8 rounded-md text-xs font-bold transition-all ${
          currentPage === n 
            ? 'bg-[#2D1B14] text-white shadow-md' 
            : 'text-stone-500 hover:bg-stone-200'
        }`}
      >
        {n}
      </button>
    ))}
  </div>

  {/* Next Button */}
  <button 
    disabled={currentPage >= Math.ceil(filteredCustomers.length / 5)}
    onClick={() => setCurrentPage(p => p + 1)}
    className="flex items-center gap-1 text-sm font-bold text-stone-500 hover:text-black disabled:opacity-30 disabled:hover:text-stone-500 transition-colors"
  >
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  </button>
</div>
        </div>

        {/* --- MOBILE CARD VIEW --- */}
        <div className="md:hidden space-y-4">
          {filteredCustomers.map((c) => (
            <div key={c.id} className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img className="w-12 h-12 rounded-full" src={`https://ui-avatars.com/api/?name=${c.name}&background=random`} alt="" />
                  <div>
                    <p className="font-bold text-[#2D1B14]">{c.name}</p>
                    <p className="text-xs text-stone-500">{c.email}</p>
                  </div>
                </div>
                <StatusBadge status={c.status} />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-50">
                <button 
                  onClick={() => setViewingCustomer(c)}
                  className="flex items-center justify-center gap-2 py-2.5 bg-stone-100 rounded-xl text-sm font-bold text-stone-700"
                >
                  {/* <Eye size={16} />  */}
                  View
                </button>
                <button 
                   onClick={() => setEditingCustomer({...c})}
                   className="flex items-center justify-center gap-2 py-2.5 bg-[#2D1B14] rounded-xl text-sm font-bold text-white"
                >
                  {/* <Edit2 size={16} /> */}
                   Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12 text-stone-400">No customers found.</div>
        )}
      </div>

      {/* --- VIEW MODAL --- */}
      {viewingCustomer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 z-50">
          <div className="bg-white rounded-t-3xl md:rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden relative">
             <div className="h-20 bg-[#2D1B14] flex justify-end p-4">
                <button onClick={() => setViewingCustomer(null)} className="text-white/50 hover:text-white"><X /></button>
             </div>
             <div className="px-6 pb-8 text-center -mt-10">
                <img className="w-20 h-20 mx-auto rounded-full border-4 border-white shadow-lg bg-white" src={`https://ui-avatars.com/api/?name=${viewingCustomer.name}&size=128&background=random`} alt="" />
                <h2 className="mt-4 text-2xl font-bold">{viewingCustomer.name}</h2>
                <div className="mt-6 space-y-4 text-left border-t pt-6">
                  <InfoRow icon={<Mail />} label="Email" value={viewingCustomer.email} />
                  <InfoRow icon={<Phone />} label="Phone" value={viewingCustomer.phone} />
                  <InfoRow icon={<Award />} label="Points" value={`${viewingCustomer.points} pts`} />
                </div>
                <button onClick={() => setViewingCustomer(null)} className="w-full mt-8 py-3 bg-stone-100 rounded-xl font-bold md:hidden">Close</button>
             </div>
          </div>
        </div>
      )}

      {/* --- EDIT MODAL --- */}
      {editingCustomer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 z-50">
          <form onSubmit={handleSaveEdit} className="bg-white rounded-t-3xl md:rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button type="button" onClick={() => setEditingCustomer(null)}><X className="text-stone-400" /></button>
            </div>
            <div className="p-6 space-y-4">
              <Input label="Full Name" value={editingCustomer.name} onChange={(val) => setEditingCustomer({...editingCustomer, name: val})} />
              <Input label="Email" type="email" value={editingCustomer.email} onChange={(val) => setEditingCustomer({...editingCustomer, email: val})} />
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Status</label>
                <select 
                  className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-stone-200"
                  value={editingCustomer.status}
                  onChange={(e) => setEditingCustomer({...editingCustomer, status: e.target.value})}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </div>
            </div>
            <div className="p-6 bg-stone-50 flex flex-col md:flex-row gap-3">
              <button type="submit" className="w-full py-3 bg-[#2D1B14] text-white rounded-xl font-bold flex items-center justify-center gap-2 order-1 md:order-2">
                <Save size={18} /> Save Changes
              </button>
              <button type="button" onClick={() => setEditingCustomer(null)} className="w-full py-3 font-bold text-stone-500 order-2 md:order-1">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomerLists;