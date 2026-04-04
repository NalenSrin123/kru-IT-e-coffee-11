import React, { useState } from 'react'; // បន្ថែម useState នៅទីនេះ
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiSaveLine } from "react-icons/ri";

const AddUser = () => {
  const navigate = useNavigate();
  
  // ១. បង្កើត State សម្រាប់ទុកទិន្នន័យ Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'CUSTOMER',
    password: '' // បន្ថែម field password
  });
  const [loading, setLoading] = useState(false);

  // ២. Function សម្រាប់ Handle ការផ្លាស់ប្តូរតម្លៃ Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ៣. Function សម្រាប់ Fetch API (Add User)
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      const response = await fetch('https://your-api-url.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User added successfully!");
        navigate('/dashboard/users'); 
      } else {
        const errorData = await response.json();
        alert("Failed to add user: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto animate-fade-in">
      {/* Header ជាមួយប៊ូតុងត្រឡប់ក្រោយ */}
      <div className="mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-500 hover:text-[#361205] transition-colors mb-2"
        >
          <RiArrowLeftLine /> Back to User Management
        </button>
        <h1 className="text-2xl font-extrabold text-[#361205]">Add New User</h1>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input 
                name="name" // ត្រូវដាក់ name ឱ្យដូចក្នុង state
                value={formData.name}
                onChange={handleChange}
                type="text" 
                required
                placeholder="e.g. Robert Fox"
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                required
                placeholder="robert@example.com"
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none transition-all"
              />
            </div>

            {/* Role Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Assign Role</label>
              <select 
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none cursor-pointer"
              >
                <option value="ADMIN">Admin</option>
                <option value="STAFF">Staff</option>
                <option value="CUSTOMER">Customer</option>
              </select>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <input 
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password" 
                required
                placeholder="••••••••"
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none transition-all"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-50">
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={loading} // បិទប៊ូតុងពេលកំពុង Save
              className={`flex items-center gap-2 px-8 py-2.5 text-sm font-bold text-white rounded-xl shadow-md transition-all ${loading ? 'bg-gray-400' : 'bg-[#361205] hover:bg-[#4d1a08]'}`}
            >
              {loading ? (
                <span>Saving...</span>
              ) : (
                <>
                  <RiSaveLine className="text-lg" />
                  Save User
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;