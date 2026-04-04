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
  const [status, setStatus] = useState("loading"); // ✅ MUST exist
  // let itemsPerPage=5;
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || customer.email.toLowerCase().includes(searchTerm.toLowerCase()) || customer.phone.toLowerCase().includes(searchTerm.toLowerCase());
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
   // ✅ FETCH DATA
   useEffect(() => {
    const fetchCustomers = async () => {
      try {
        console.log("Fetching...");

        const response = await fetch(
          "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/customers"
        );

        console.log("Status Code:", response.status);

        if (!response.ok) {
          throw new Error("API failed");
        }

        const data = await response.json();

        console.log("API RESPONSE:", data);
        const customersArray = data.data?.data || [];

        setCustomers(customersArray);
        setStatus("success");
      } catch (err) {
        console.error("Fetch error:", err);
        setStatus("error");
      }
    };

    fetchCustomers();
  }, []);
  return (
    <div className="p-4 md:p-8 bg-[#F9F6F2] min-h-screen font-sans text-[#2D241E]">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#2D1B14]">Customer Lists</h1>
            <p className="text-stone-500 text-sm">Manage your member database</p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input type="text" placeholder="Search Members..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-4 pr-10 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#2D1B14] outline-none bg-white shadow-sm"/>
            <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
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

          <div className="px-6 py-4 bg-stone-50 border-t flex items-center justify-between">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} 
               className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.12em] text-stone-500 disabled:opacity-30 hover:text-[#2D1B14] transition-all group">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:-translate-x-0.5"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m14.25 4.75l-6.19 6.19a1.5 1.5 0 0 0 0 2.12l6.19 6.19"/></svg>
               <span className="hidden sm:inline">Previous</span>
            </button>
            <div className="flex gap-2">{Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => setCurrentPage(n)} className={`w-8 h-8 rounded-lg text-xs font-bold ${currentPage === n ? 'bg-[#2D1B14] text-white shadow-md' : 'text-stone-400 hover:bg-stone-200'}`}>{n}</button>))}
            </div>
            <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(p => p + 1)} className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.12em] text-stone-500 disabled:opacity-30 hover:text-[#2D1B14] transition-all group">
              <span className="hidden sm:inline">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m9.75 4.75l6.19 6.19a1.5 1.5 0 0 1 0 2.12l-6.19 6.19" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLists;
