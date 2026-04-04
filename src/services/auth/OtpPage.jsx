
import React, { useRef } from "react";
import branchlogo from "../../assets/images/branches/branchlogo.png";
import { Link } from "react-router-dom";
const OtpPage = () => {
   const inputs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center p-4 global-font">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 bg-[#f5efe6] p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img
              src={branchlogo}
              alt="Branch Logo"
              className="w-28 object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#4b3a2f]">
            Secure Account Access
          </h2>

          <p className="text-[#6b5b4f] leading-relaxed text-sm sm:text-base">
            We've sent a 6-digit verification code to your registered email.
            Enter the code to securely continue your coffee experience.
          </p>

          <div className="text-sm text-[#6b5b4f] space-y-2">
            <p>• Code expires in 5 minutes</p>
            <p>• Keeps your rewards protected</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#6f4e37] text-white p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
            Enter OTP Code
          </h2>

          <p className="text-white/80 mb-8 text-center md:text-left text-sm sm:text-base">
            Please enter the 6-digit code below.
          </p>

          <div className="flex justify-center md:justify-start gap-2 sm:gap-3 mb-8">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                inputMode="numeric"
                ref={(el) => (inputs.current[i] = el)}
                onInput={(e) => handleInput(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl text-center text-lg sm:text-xl font-semibold bg-white text-[#4b3a2f] focus:outline-none focus:ring-2 focus:ring-white/70 transition"
              />
            ))}
          </div>
            <Link to="/reset-password">
          <button className="w-full py-3 rounded-xl bg-white text-[#6f4e37] font-semibold hover:scale-[1.02] transition">
            Verify Code
          </button>
            </Link>
            <div className=" flex flex-col md:flex-row mt-6 md:gap-5 gap-1 items-center">
          <p className=" text-sm text-white/80 text-center md:text-left">
            Didn’t receive the code?
            <a className="ml-2 underline cursor-pointer hover:text-white">
              Resend
            </a>
          </p>
          <p className=" text-sm text-white/80 text-center md:text-left">
            Wrong email?
            <Link to="/forgot-password" className="ml-2 underline cursor-pointer hover:text-white">
              Back to send email
            </Link>
          </p>
              </div>              
          
        </div>

      </div>
    </div>
    </div>
  )
}

export default OtpPage