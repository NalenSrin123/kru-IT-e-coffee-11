import React, { useState } from 'react'
import { RiArrowLeftLine, RiUserAddLine } from 'react-icons/ri';
import { ROLES } from './User';

const inputCls = "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50 w-full";

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
    {children}
  </div>
);

const AdduserPage = ({ onBack, onSave }) => {   
    const [form, setForm] = useState({ name: '', email: '', role: 'Customer', status: 'Active' });

    const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim()) return;
        onSave(form);
        onBack();
    };
  return (
    <div className="font-sans">
      <div className="flex flex-col p-2 md:p-3 w-full">
        {/* Breadcrumb */}
        <p className="hidden sm:block text-xs text-gray-400 mb-2">
              Dashboard › <span className="text-gray-500">User Management</span> › <span className="text-gray-700 font-semibold">Add User</span>
        </p>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="p-2 rounded-xl border border-gray-200 hover:bg-[#4d1a08] bg-gray-100 text-gray-500 transition"
          >
            <RiArrowLeftLine size={18} />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#361205]">Add New User</h1>
            <p className="text-sm text-gray-500 mt-0.5">Fill in the details to create a new user account.</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Full Name">
              <input
                name="name" type="text" value={form.name}
                onChange={handleChange} placeholder="e.g. Jane Smith"
                required className={inputCls}
              />
            </Field>

            <Field label="Email Address">
              <input
                name="email" type="email" value={form.email}
                onChange={handleChange} placeholder="e.g. jane@example.com"
                required className={inputCls}
              />
            </Field>

            <Field label="Role">
              <select name="role" value={form.role} onChange={handleChange} className={inputCls}>
                {ROLES.map((r) => <option key={r}>{r}</option>)}
              </select>
            </Field>

            <Field label="Status">
              <select name="status" value={form.status} onChange={handleChange} className={inputCls}>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </Field>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button" onClick={onBack}
                className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-[#361205] hover:bg-[#4d1a08] text-white text-sm font-semibold py-2.5 rounded-xl transition shadow-md"
              >
                <RiUserAddLine size={16} />
                Add User
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AdduserPage