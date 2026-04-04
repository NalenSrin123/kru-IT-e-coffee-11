import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiSaveLine } from "react-icons/ri";

const AddUser = () => {
  const navigate = useNavigate();
  
  // ១. បង្កើត State ទុកទិន្នន័យ Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'CUSTOMER',
    password: ''
  });

  // ២. ចាប់យកតម្លៃដែលបំពេញក្នុង Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ៣. បញ្ជូនទិន្នន័យទៅ API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-api-url.com/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("រក្សាទុកបានជោគជ័យ!");
        navigate('/dashboard/users'); 
      } else {
        alert("ការបញ្ជូនទិន្នន័យមានបញ្ហា!");
      }
    } catch (error) {
      alert("មិនអាចតភ្ជាប់ទៅកាន់ API បានទេ!");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* ប៊ូតុងត្រឡប់ក្រោយ */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 mb-4">
        <RiArrowLeftLine /> Back
      </button>

      <h1 className="text-2xl font-bold text-[#361205] mb-6">Add New User</h1>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-semibold mb-1">Full</label>
            <input 
              name="name" 
              type="text" 
              required
              placeholder="ex. Navath"
              className="w-full px-4 py-2 bg-gray-50 border rounded-xl outline-none"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input 
              name="email" 
              type="email" 
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-2 bg-gray-50 border rounded-xl outline-none"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Role</label>
            <select 
              name="role" 
              className="w-full px-4 py-2 bg-gray-50 border rounded-xl outline-none"
              onChange={handleChange}
            >
              <option value="ADMIN">Admin</option>
              <option value="STAFF">Staff</option>
              <option value="CUSTOMER">Customer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-50 border rounded-xl outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-100 rounded-xl"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex items-center gap-2 px-6 py-2 bg-[#361205] text-white rounded-xl"
            >
              <RiSaveLine /> Save User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddUser;