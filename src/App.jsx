import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Register Successful ✅");
        navigate("/login");
      } else {
        alert("Register Failed ❌");
      }
    } catch (error) {
      alert("Error connecting to API ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 from-indigo-500 via-gray-400 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:outline-none focus:ring-2  focus:ring-gray-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-black font-semibold py-3 rounded-xl hover:bg-blue-800 transition"
          >
            {loading ? "Creating..." : "Register 🚀"}
          </button>
        </form>

        <p className="text-center text-black mt-4 text-sm">
          Already have an account? 
          <span
            onClick={() => navigate("/login")}
            className="underline cursor-pointer ml-1"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
