import React from "react";
import { Routes, Route } from "react-router-dom";
import GetOtpInEmail from "./services/auth/GetOtpInEmail";
import Register from "./services/auth/register";
import ForgotPassword from "./services/auth/Forgotpassword";
import PublicLayout from "./app/layouts/PublicLayout";
import OtpPage from "./services/auth/OtpPage";
import AuthLayout from "./app/layouts/AuthLayout";
import ResetPassword from "./services/auth/Comfirm_rest_pw";
import Login from "./utils/Login";
import adminRoutes from "./app/router/admin";

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
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/GetOtpInEmail' element={<GetOtpInEmail/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
        <Route path='/otpdesign' element={<OtpDesign/>}></Route>

      {/* Auth Pages */}
      <Route
        element={<AuthLayout />}
      >
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/otpage" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Dashboard / Admin Routes  */}
      {adminRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((child, childIndex) => (
              <Route
                key={childIndex}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default App;