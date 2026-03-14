import React, { useState, useMemo } from 'react';
import { Search, Plus, ChevronDown } from 'lucide-react';

const CustomerLists = () => {
  // 1. Data Source
  const initialCustomers = [
    { id: 1, name: "Liam Brown", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 1250 },
    { id: 2, name: "Ava Smith", email: "ava.s@email.com", phone: "(555) 234-5678", date: "2023-10-12", status: "ACTIVE", points: 980 },
    { id: 3, name: "Liana Broth", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 980 },
    { id: 4, name: "Mava Smith", email: "avar.a@email.com", phone: "(555) 123-4567", date: "2023-11-04", status: "ACTIVE", points: 980 },
    { id: 5, name: "Liam Brown", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 1250 },
    { id: 6, name: "Ava Smith", email: "ava.s@email.com", phone: "(555) 234-5678", date: "2023-10-12", status: "INACTIVE", points: 980 },
    { id: 7, name: "Liana Broth", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 980 },
    { id: 8, name: "Mava Smith", email: "avar.a@email.com", phone: "(555) 123-4567", date: "2023-11-04", status: "INACTIVE", points: 980 },
  ];

  // 2. State for Search and Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // 3. Filtering Logic
  const filteredCustomers = useMemo(() => {
    return initialCustomers.filter((customer) => {
      const matchesSearch = 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm);

      const matchesStatus = 
        statusFilter === "All" || customer.status === statusFilter.toUpperCase();

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return (
    <div className="p-2 md:p-3 min-h-screen font-sans text-[#2D241E]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#361205]">Customer Lists</h1>
          <p className="text-sm text-stone-500 mt-1">Manage and track your customer base efficiently.</p>
        </header>

        {/* Toolbar - Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-4 mb-6">
          
          {/* Search Input */}
          <div className="flex-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Search</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search name, email, phone..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none transition-all text-sm shadow-sm"
              />
              <Search className="absolute right-3 top-2.5 text-stone-400 w-5 h-5" />
            </div>
          </div>

          {/* Filter and Add Button Row */}
          <div className="flex flex-row items-end gap-3">
            <div className="flex-1 lg:flex-none">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Status</label>
              <div className="relative">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full min-w-[140px] appearance-none bg-white border border-stone-200 rounded-xl pl-4 pr-10 py-2.5 outline-none cursor-pointer text-sm shadow-sm focus:border-[#361205]"
                >
                  <option value="All">All Customers</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 text-stone-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <button className="flex-1 lg:flex-none bg-[#361205] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#4d1a08] transition-all shadow-md active:scale-95">
              <Plus className="w-5 h-5" />
              <span className="whitespace-nowrap">Add New</span>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-stone-50/50 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold text-stone-400 uppercase tracking-widest">Customer</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-stone-400 uppercase tracking-widest">Contact Info</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-stone-400 uppercase tracking-widest text-center">Date Joined</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-stone-400 uppercase tracking-widest text-center">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-stone-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((c) => (
                    <tr key={c.id} className="hover:bg-stone-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
                            <img src={`https://ui-avatars.com/api/?name=${c.name}&background=random`} alt="avatar" />
                          </div>
                          <span className="font-bold text-sm text-[#2D241E]">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm text-stone-600">{c.email}</span>
                          <span className="text-[11px] text-stone-400 font-medium">{c.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-stone-500">{c.date}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center text-[10px] font-black px-2.5 py-1 rounded-lg border ${
                          c.status === 'ACTIVE' 
                            ? 'bg-[#E9F3E9] text-[#2D5A27] border-[#D1E7D1]' 
                            : 'bg-red-50 text-red-700 border-red-100'
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3 text-xs font-bold text-stone-400">
                          <button className="hover:text-[#361205] transition-colors">Edit</button>
                          <span className="text-stone-200">|</span>
                          <button className="hover:text-[#361205] transition-colors">View</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-stone-400 font-medium">
                      No customers found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div className="px-6 py-4 bg-stone-50/30 text-sm text-stone-500 border-t border-stone-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-stone-500 hover:text-[#361205] transition-colors disabled:opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg> 
                Previous 
              </button>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg bg-[#361205] text-white text-xs font-bold shadow-md shadow-[#361205]/20">1</button>
                <button className="w-8 h-8 rounded-lg text-xs font-bold text-stone-400 hover:bg-stone-200/50 transition-colors">2</button>
                <button className="w-8 h-8 rounded-lg text-xs font-bold text-stone-400 hover:bg-stone-200/50 transition-colors">3</button>
                <span className="px-1 text-stone-300">...</span>
              </div>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-stone-500 hover:text-[#361205] transition-colors"> 
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLists;