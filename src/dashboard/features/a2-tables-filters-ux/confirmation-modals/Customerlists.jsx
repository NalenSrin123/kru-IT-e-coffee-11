import { Search, Plus, ChevronDown } from 'lucide-react';

const CustomerLists = () => {
  const customers = [
    { id: 1, name: "Liam Brown", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 1250 },
    { id: 2, name: "Ava Smith", email: "ava.s@email.com", phone: "(555) 234-5678", date: "2023-10-12", status: "ACTIVE", points: 980 },
    { id: 3, name: "Liana Broth", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 980 },
    { id: 4, name: "Mava Smith", email: "avar.a@email.com", phone: "(555) 123-4567", date: "2023-11-04", status: "ACTIVE", points: 980 },
    { id: 5, name: "Liam Brown", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 1250 },
    { id: 6, name: "Ava Smith", email: "ava.s@email.com", phone: "(555) 234-5678", date: "2023-10-12", status: "ACTIVE", points: 980 },
    { id: 7, name: "Liana Broth", email: "liam.b@email.com", phone: "(555) 123-4567", date: "2023-11-05", status: "ACTIVE", points: 980 },
    { id: 8, name: "Mava Smith", email: "avar.a@email.com", phone: "(555) 123-4567", date: "2023-11-04", status: "ACTIVE", points: 980 },
  ];

  return (
    <div className="p-8 bg-[#F9F6F2] min-h-screen font-sans text-[#2D241E]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Customer Lists</h1>
        </header>

        {/* Toolbar */}
        <div className="flex flex-wrap items-end gap-4 mb-6">
          <div className="flex-1 min-w-[300px]">
            <label className="block text-sm font-semibold mb-1">Search</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search customers by name, email, phone..." 
                className="w-full pl-4 pr-10 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-stone-400 outline-none transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Filter by Status</label>
            <div className="relative">
              <select className="appearance-none bg-white border border-stone-300 rounded-md pl-4 pr-10 py-2 outline-none cursor-pointer">
                <option>All Customers, Active, Inactive, Rewards</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <button className="bg-[#2D1B14] text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-[#3D2B24] transition-colors ml-auto">
            <Plus className="w-5 h-5" />
            Add New Customer
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-stone-100 ">
              <tr>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Phone Number</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-stone-200 rounded-full overflow-hidden flex-shrink-0">
                      <img src={`https://ui-avatars.com/api/?name=${c.name}&background=random`} alt="avatar" />
                    </div>
                    <span className="font-semibold">{c.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{c.email}</td>
                  <td className="px-6 py-4 text-gray-600">{c.phone}</td>
                  <td className="px-6 py-4 text-gray-600">{c.date}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-[#E9F3E9] text-[#2D5A27] text-xs font-bold px-3 py-1 rounded-full border border-[#D1E7D1]">
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-sm text-gray-500 font-medium">
                      <button className="hover:text-black">Edit</button>
                      <span>|</span>
                      <button className="hover:text-black">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         <div className="px-6 py-4 bg-stone-100 text-sm text-gray-500 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 text-gray-600 hover:text-stone-900 hover:underline transition-colors disabled:opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg> Previous </button>
           <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-md bg-[#2D1B14] text-white font-medium">1</button>
              <button className="w-8 h-8 rounded-md text-gray-600 hover:bg-stone-200 transition-colors">2</button>
              <button className="w-8 h-8 rounded-md text-gray-600 hover:bg-stone-200 transition-colors">3</button>
              <span className="px-1 text-stone-400">...</span>
           </div>
             <button className="flex items-center gap-2 text-gray-600 hover:text-stone-900 hover:underline transition-colors"> Next
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLists;