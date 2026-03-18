import React from "react";
import { Link } from 'react-router-dom';function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-gray-50 shadow-lg rounded-lg p-8">
        
        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@etec.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
        <Link  to="/otpage">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Send Reset Password
        </button>
        </Link>
        </div>

        <div className="text-center mt-4">
          <Link  to="/login"  className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;