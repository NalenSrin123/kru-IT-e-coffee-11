import React, { useEffect, useState } from 'react'
import { RiCloseLine } from "react-icons/ri";
import { ROLES } from './User';

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
    {children}
  </div>
);

const inputCls =
  "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50";


const UserModal = ({ isOpen, user, onClose, onSave }) => {
    const isEdit = Boolean(user);

  const [form, setForm] = useState({ name: "", email: "", role: "Customer", status: "Active" });

  useEffect(() => {
    if (isEdit && user) {
      setForm({ name: user.name, email: user.email, role: user.role, status: user.status });
    } else {
      setForm({ name: "", email: "", role: "Customer", status: "Active" });
    }
  }, [user, isEdit, isOpen]);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    onSave(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">
            {isEdit ? "Edit User" : "Add New User"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition p-1">
            <RiCloseLine className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
          <Field label="Full Name">
            <input name="name" type="text" value={form.name} onChange={handleChange}
              placeholder="e.g. Jane Smith" required className={inputCls} />
          </Field>

          <Field label="Email Address">
            <input name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="e.g. jane@example.com" required className={inputCls} />
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

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2 rounded-lg hover:bg-gray-50 transition">
              Cancel
            </button>
            <button type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition">
              {isEdit ? "Save Changes" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal