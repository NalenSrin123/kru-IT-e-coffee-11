import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, Edit2} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatusBadge = ({ status }) => (
  <span className={`text-[10px] font-black px-2.5 py-1 rounded-md border tracking-wider ${
    status === 'ACTIVE' 
      ? "bg-green-50 text-green-700 border-green-100" 
      : "bg-stone-100 text-stone-500 border-stone-200"
  }`}>
    {status}
  </span>
);

const CustomerLists = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const matchesSearch = 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
        customer.phone.toLowerCase().includes(searchTerm.toLowerCase());
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
        
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2D1B14]">Customer Database</h1>
            <p className="text-stone-500 text-sm">Manage your member database and status</p>
          </div>
        </header>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search by name, email, or phone..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#2D1B14] outline-none bg-white shadow-sm transition-all"
            />
            <Search className="absolute right-3 top-3.5 text-stone-400 w-5 h-5" />
          </div>

          <div className="w-full md:w-48 relative">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)} 
              className="appearance-none w-full bg-white border border-stone-200 rounded-xl pl-4 pr-10 py-3 outline-none cursor-pointer text-sm font-semibold shadow-sm"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active Only</option>
              <option value="Inactive">Inactive Only</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-stone-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Table/Card Container */}
        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-stone-50/50 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-[0.15em] text-black">Customer</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-[0.15em] text-black">Contact </th>
                       <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-[0.15em] text-black text-center">Phone </th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-[0.15em] text-black text-center">Status</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-[0.15em] text-black text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {paginatedCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-stone-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://ui-avatars.com/api/?name=${c.name}&background=random&size=128`} alt="" />
                        <div className="font-bold text-[#2D1B14]">{c.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-[#2D1B14]">{c.email}</div>

                    </td>

                      <td className="px-6 py-4 text-center">
                      <div className="text-sm font-medium text-[#2D1B14]">{c.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => navigate(`/edit/${c.id}`)} 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#2D1B14] text-stone-600 hover:text-white rounded-lg transition-all text-xs font-bold border border-stone-200 shadow-sm"
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-stone-100">
            {paginatedCustomers.map((c) => (
              <div key={c.id} className="p-4 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img className="w-12 h-12 rounded-full border shadow-sm" src={`https://ui-avatars.com/api/?name=${c.name}&background=random`} alt="" />
                    <div>
                      <div className="font-bold text-[#2D1B14]">{c.name}</div>
                      <StatusBadge status={c.status} />
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/edit/${c.id}`)}
                    className="p-2 text-stone-400 border border-stone-100 rounded-lg"
                  >
                    <Edit2 size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-stone-400 uppercase font-black tracking-tighter">Email</div>
                  <div className="text-stone-400 uppercase font-black tracking-tighter">Phone</div>
                  <div className="text-[#2D1B14] font-medium truncate">{c.email}</div>
                  <div className="text-[#2D1B14] font-medium">{c.phone}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCustomers.length === 0 && (
            <div className="p-12 text-center">
              <div className="inline-flex p-4 rounded-full bg-stone-50 mb-4">
                <Search className="text-stone-300" size={32} />
              </div>
              <p className="text-stone-500 font-medium">No customers found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          <div className="px-6 py-4 bg-stone-50/50 border-t flex items-center justify-between">
            <button 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(p => p - 1)} 
              className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.12em] text-stone-500 disabled:opacity-30 hover:text-[#2D1B14] transition-all group"
            >
              <ChevronDown className="rotate-90 transition-transform group-hover:-translate-x-1" size={16} />
              <span className="hidden sm:inline">Prev</span>
            </button>
            
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map(n => (
                <button 
                  key={n} 
                  onClick={() => setCurrentPage(n)} 
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === n ? 'bg-[#2D1B14] text-white shadow-md' : 'text-stone-400 hover:bg-stone-200'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage >= totalPages} 
              onClick={() => setCurrentPage(p => p + 1)} 
              className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.12em] text-stone-500 disabled:opacity-30 hover:text-[#2D1B14] transition-all group"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronDown className="-rotate-90 transition-transform group-hover:translate-x-1" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLists;
