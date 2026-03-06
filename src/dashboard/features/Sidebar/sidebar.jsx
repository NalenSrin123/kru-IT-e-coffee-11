import React from 'react';

const Sidebar = () => {
  // Navigation Data
  const menuGroups = [
    {
      title: "Main Menu",
      items: [
        { name: "Dashboard", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /> },
        { name: "Orders", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> },
        { name: "Inventory", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /> },
      ]
    },
    {
      title: "User Controls",
      items: [
        { name: "User List", active: true, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /> },
        { name: "Role Permissions", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z" /> },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-68 bg-white border-r border-gray-100 flex flex-col shadow-sm antialiased">
      
      {/* Brand Header */}
      <div className="px-8 py-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
           <span className="text-xl">
            <img src="/assets/images/coffee/logo.png" alt="E-Coffee Logo" className="w-10 h-10" />
           </span>
        </div>
        <h1 className="text-xl font-extrabold text-gray-800 tracking-tight">
          E-Coffee <span className="text-blue-900">Admin</span>
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 overflow-y-auto space-y-8">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <h2 className="px-4 text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
              {group.title}
            </h2>
            <ul className="space-y-1">
              {group.items.map((item, itemIdx) => (
                <li 
                  key={itemIdx}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 
                    ${item.active 
                      ? 'bg-blue-50 text-blue-900 shadow-sm shadow-blue-50/50' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-5 h-5 ${item.active ? 'text-blue-900' : 'text-gray-400 group-hover:text-gray-700'}`}
                  >
                    {item.icon}
                  </svg>
                  <span className="text-sm font-semibold">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Profile Footer */}
      <div className="p-4 border-t border-gray-50 bg-gray-50/30">
        <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-gray-100">
          <div className="relative">
            <img 
              src="/assets/images/coffee/logo.png" 
              className="w-10 h-10 rounded-full bg-white shadow-sm ring-2 ring-white" 
              alt="avatar" 
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-tight">Alex Morgan</span>
            <span className="text-xs font-medium text-gray-500">Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;