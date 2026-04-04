import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiSaveLine } from "react-icons/ri";

const AddUser = () => {
  const navigate = useNavigate();
  
  // 1. Initialize State with English keys and default role_id
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role_id: 3, // Default to Customer as per API doc
    password: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Submit Data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the token saved during login
    const token = localStorage.getItem('token'); 

    try {
      const response = await fetch('https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/customers', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Required for Protected Routes
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User added successfully!");
        navigate('/dashboard/users'); 
      } else {
        const errorData = await response.json();
        alert("Failed to save: " + (errorData.message || "Invalid data"));
      }
    } catch (error) {
      alert("Network error: Cannot connect to API");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 mb-4 hover:text-[#361205]">
        <RiArrowLeftLine /> Back
      </button>

      <h1 className="text-2xl font-bold text-[#361205] mb-6">Add New User</h1>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name</label>
            <input 
              name="name" 
              type="text" 
              required
              placeholder="ex. Dy Navath"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#361205] outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#361205] outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Assign Role</label>
            <select 
              name="role_id" 
              value={formData.role_id}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#361205] outline-none cursor-pointer"
              onChange={handleChange}
            >
              <option value={1}>Admin</option>
              <option value={2}>Staff</option>
              <option value={3}>Customer</option>
            </select>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Password</label>
            <input 
              name="password" 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#361205] outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex justify-end gap-3 mt-4 border-t pt-6">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex items-center gap-2 px-8 py-2 bg-[#361205] text-white font-bold rounded-xl shadow-md hover:bg-[#4d1a08] transition-all"
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