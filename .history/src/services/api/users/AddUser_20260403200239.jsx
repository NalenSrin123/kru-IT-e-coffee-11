import React, { useState } from 'react';

const AddUserModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Customer'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', formData);
    // បញ្ចូល Logic ដើម្បីរក្សាទុកទិន្នន័យនៅទីនេះ
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#3D190E]">Add New User</h2>
          <p className="text-sm text-gray-500">បញ្ចូលព័ត៌មានដើម្បីបង្កើតគណនីថ្មី</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. James Wilson"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D190E]/20 focus:border-[#3D190E] transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="james.wilson@example.com"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D190E]/20 focus:border-[#3D190E] transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Assign Role</label>
            <div className="relative">
              <select
                name="role"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#3D190E]/20 focus:border-[#3D190E] transition-all cursor-pointer"
                onChange={handleChange}
              >
                <option value="Customer">Customer</option>
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium text-white bg-[#3D190E] rounded-lg hover:bg-[#2A110A] transition-colors shadow-sm flex items-center gap-2"
            >
              <span className="text-lg">+</span> Add User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddUser;