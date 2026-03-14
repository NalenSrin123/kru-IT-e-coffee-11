// import React from "react";
// // import "./ForgotPassword.css";
// function ForgotPassword() {
//   return (
//     <div className="forgot-container">
//       <div className="forgot-card">
//         <h2>Forgot Password</h2>
//         <p className="description">
//           Enter your email address and we'll send you a link to reset your password.
//         </p>

//         <div className="input-group">
//           <label>Email Address</label>
//           <input type="email" placeholder="example@etec.com" />
//         </div>

//         <button className="btn-reset">Send Reset Password</button>

//         <div className="back-login">
//           <a href="#">Back to Login</a>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ForgotPassword;
import React from "react";
import { Link } from "react-router-dom";
import OtpDesign from "./OtpPage";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h2>
        <p className="text-gray-500 mb-6 text-center">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="example@etec.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <Link to={"/otpdesign"} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Send Reset Password
        </Link>

        <div className="mt-6 text-center">
          <a href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;