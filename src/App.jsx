import React from "react";
import { Routes, Route } from "react-router-dom";


import Register from "./services/auth/register";
import ForgotPassword from "./services/auth/Forgotpassword";
import PublicLayout from "./app/layouts/PublicLayout";
import AuthLayout from "./app/layouts/AuthLayout";
import Login from "./utils/Login";
import OtpDesign from "./services/auth/OtpPage";

const App = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route
        path="/"
        element={<PublicLayout />}
      >
        <Route index element={<></>} /> {/* Extra content if needed */}
      </Route>

      {/* Auth Pages */}
      <Route
        element={<AuthLayout />}
      >
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otpdesign" element={<OtpDesign/>}></Route>
        
      </Route>
    </Routes>
  );
};

export default App;