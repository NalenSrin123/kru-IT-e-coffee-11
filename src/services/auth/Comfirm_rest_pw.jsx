import React from "react";
import Logo_Coffee from "../../assets/images/branches/Logo_Coffee.jpg";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <div className=" w-[20%] h-15 mb-2">
          <img src={Logo_Coffee} alt="" />
        </div>
        
        
        <p className="text-xs text-gray-500 mb-2 m-4">
          SIGN IN WITH GOOGLE
        </p>

        <h2 className="text-2xl font-bold mb-1">
          Reset Password
        </h2>

        <p className="text-gray-500 text-sm mb-6 ">
          Please enter your new password to secure your account.
        </p>

        <div className="space-y-4">
          
          <input
            type="password"
            placeholder="New Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:black "
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:black"
          />

          <button
            className="w-full bg-[#a97155] text-white py-2 rounded-lg hover:bg-[#8b5e45] transition"
          >
            Confirm
          </button>

        </div>
      </div>

    </div>
  );
};

export default ResetPassword;