import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiSaveLine } from "react-icons/ri";

const AddUser = () => {
  const navigate = useNavigate();
  
  // ១. បង្កើត State សម្រាប់ទុកទិន្នន័យ Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'CUSTOMER'
  });
  const [loading, setLoading] = useState(false);

  // ២. Function សម្រាប់ Handle ការផ្លាស់ប្តូរតម្លៃ Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ៣. Function សម្រាប់ Fetch API (Add User)
  const handleSubmit = async (e) => {
    e.preventDefault(); // ការពារកុំឱ្យ Refresh Page
    setLoading(true);

    try {
      const response = await fetch('https://your-api-url.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer ' + token (បើមាន)
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User added successfully!");
        navigate('/dashboard/users'); /
      } else {
        alert("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
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
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input 
                type="text" 
                placeholder="e.g. Robert Fox"
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input 
                type="email" 
                placeholder="robert@example.com"
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none transition-all"
              />
            </div>

            {/* Role Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Assign Role</label>
              <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#361205]/10 focus:border-[#361205] outline-none cursor-pointer">
                <option value="ADMIN">Admin</option>
                <option value="STAFF">Staff</option>
                <option value="CUSTOMER">Customer</option>
              </select>
            </div>

            {/* Password (បើមាន) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <input 
                type="password" 
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
              className="flex items-center gap-2 px-8 py-2.5 text-sm font-bold text-white bg-[#361205] hover:bg-[#4d1a08] rounded-xl shadow-md transition-all"
            >
              <RiSaveLine className="text-lg" />
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;