
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (res.ok) {
        // save token (if have)
        localStorage.setItem("token", result.token);

        setMessage("✅ Login success");

        // go to next page
        navigate("/");
      } else {
        setMessage(result.message || "❌ Login failed");
      }
    } catch (error) {
      setMessage("❌ Server error");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Welcome login
        </h1>

        {/* message */}
        {message && (
          <p className="text-center text-sm mb-3 text-red-500">{message}</p>
        )}

        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 md:p-3 rounded mt-4 mb-2"
          required
        />

        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 md:p-3 rounded mt-4 mb-2"
          required
        />

        <div className="flex justify-between items-center mt-2 mb-3 text-sm">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <label>Remember for 30 day</label>
          </div>

          <Link
            to="/forgot-password"
            className="text-blue-600 underline"
          >
            Forgot password
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 md:p-3 rounded hover:bg-blue-600 mt-4 mb-2"
        >
          Login
        </button>

        <div className="flex gap-2 justify-center mt-3 text-sm">
          <h1>Don't have an account?</h1>
          <Link
            className="text-blue-600 underline"
            to="/register"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;