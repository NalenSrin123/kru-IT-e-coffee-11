<<<<<<< HEAD

=======
import React from "react";
import { Routes, Route } from "react-router-dom";


import Register from "./services/auth/register";
import ForgotPassword from "./services/auth/Forgotpassword";
import PublicLayout from "./app/layouts/PublicLayout";
import AuthLayout from "./app/layouts/AuthLayout";
import Login from "./utils/Login";

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
      </Route>
    </Routes>
  );
};

export default App;
>>>>>>> f065e2a23e614f0199b14ceda508b84d847930b0
