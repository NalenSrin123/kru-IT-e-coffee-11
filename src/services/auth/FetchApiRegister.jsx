import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function FetchApiRegister() {
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

    // check password match
    // if (formData.password !== formData.confirmPassword) {
    //   alert("Password does not match!");
    //   return;
    // }

    try {
      setLoading(true);

      const res = await fetch(
        "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        }
      );

      if (res.ok) {
        alert("Register Successful ✅");
        navigate("/login");
      } else {
        const errorData = await res.json();
        console.log("Backend error:", errorData);
        alert("Register Failed ❌");
      }
    } catch (error) {
      console.log("Network error:", error);
      alert("Error connecting to API ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl  border outline-none mt-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl  border outline-none mt-3"
            required
          />

         
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Register 🚀"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
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