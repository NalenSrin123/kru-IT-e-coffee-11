import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Camera, Check, Save } from 'lucide-react';

const Input = ({ label, value, onChange, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-stone-600">{label}</label>
    <input type={type} value={value || ""} onChange={(e) => onChange(e.target.value)}
      className="w-full p-3.5 bg-white border border-stone-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#2D1B14]/5 focus:border-[#2D1B14] transition-all text-stone-700"/>
  </div>
);

export default function Editcustomerlist() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [allCustomers, setAllCustomers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", status: "ACTIVE"
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('my_customer_list') || "[]");
    setAllCustomers(data);
    
    const user = data.find(c => c.id === parseInt(id));
    if (user) {
      const [first, ...last] = user.name.split(" ");
      setFormData({
        firstName: first,
        lastName: last.join(" "),
        email: user.email,
        phone: user.phone,
        status: user.status
      });
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Create the updated object
    const updatedUser = {
      id: parseInt(id),
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      status: formData.status
    };

    // Update the full array
    const newCustomerList = allCustomers.map(c => 
      c.id === parseInt(id) ? updatedUser : c
    );

    // Save back to localStorage
    localStorage.setItem('my_customer_list', JSON.stringify(newCustomerList));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F9F6F2] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-stone-400 hover:text-[#2D1B14] mb-8 font-bold text-sm transition-colors">
          <ArrowLeft size={18} /> Back to Customerlist
        </button>

        <form onSubmit={handleUpdate} className="bg-white rounded-[2rem] border border-stone-200 shadow-sm overflow-hidden">
          <div className="p-8 md:p-12 space-y-10">
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <img 
                  src={`https://ui-avatars.com/api/?name=${formData.firstName}+${formData.lastName}&background=random&size=128`} 
                  className="w-28 h-28 rounded-full border-4 border-whinte shadow-xl group-hover:opacity-80 transition-opacity" 
                  alt="" 
                />
                {/* <div className="absolute bottom-1 right-1 p-2 bg-[#2D1B14] rounded-full text-white border-4 border-white">
                  <Camera size={14} />
                </div> */}
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black text-[#2D1B14]">Edit Member</h2>
                <p className="text-stone-400 font-medium">Currently updating ID: <span className="text-stone-600">#{id}</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First Name" value={formData.firstName} onChange={(v) => setFormData({...formData, firstName: v})} />
              <Input label="Last Name" value={formData.lastName} onChange={(v) => setFormData({...formData, lastName: v})} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Email Address" type="email" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
              <Input label="Phone Number" value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} />
            </div>

            <div className="pt-6 border-t border-stone-100">
              <label className="block text-sm font-bold text-stone-600 mb-4">Membership Status</label>
              <div className="flex gap-4">
                {["ACTIVE", "INACTIVE"].map((s) => (
                  <button key={s} type="button" onClick={() => setFormData({...formData, status: s})}
                    className={`flex-1 py-4 px-6 rounded-2xl border-2 font-black text-[10px] tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                      formData.status === s 
                      ? "bg-[#2D1B14] text-white border-[#2D1B14] shadow-lg shadow-stone-200" 
                      : "bg-white text-stone-300 border-stone-100 hover:border-stone-200"
                    }`}
                  > {formData.status === s && <Check size={16} />}
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 flex justify-end">
            <button type="submit" className="w-full md:w-auto px-12 py-4 bg-[#2D1B14] text-white rounded-2xl font-black text-xs tracking-widest hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3">
              <Save size={18} /> SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}