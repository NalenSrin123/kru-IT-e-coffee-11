import React, { useState } from "react";

const GetOtpInEmail = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (email === "") {
      alert("Please enter email");
      return;
    }

    console.log("Send OTP to:", email);
    setOtpSent(true);
  };

  const handleVerify = () => {
    console.log("OTP entered:", otp);
    alert("OTP Verified (Demo)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm">

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Email OTP Verification
        </h2>

        {!otpSent && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Get OTP
            </button>
          </>
        )}

        {otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerify}
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>

    </div>
  );
};

export default GetOtpInEmail;