import { Routes, Route } from "react-router-dom";
import FetchApiRegister from "./services/auth/FetchApiRegister.jsx";

// import Register from "./services/auth/register";
import ForgotPassword from "./services/auth/Forgotpassword";
import PublicLayout from "./app/layouts/PublicLayout";
import OtpPage from "./services/auth/OtpPage";
import AuthLayout from "./app/layouts/AuthLayout";
import ResetPassword from "./services/auth/Comfirm_rest_pw";
import Login from "./utils/Login";
import OtpDesign from "./services/auth/OtpPage";
import adminRoutes from "./app/router/admin";
import webRoutes from "./app/router/web";

const App = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<PublicLayout />}>
        {webRoutes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path === "/" ? undefined : route.path} 
            index={route.path === "/"} 
            element={route.element} 
          />
        ))}
      </Route> 

      {/* Auth Pages */}
      <Route
        element={<AuthLayout />}
      >
      
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/otpage" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otpdesign" element={<OtpDesign/>}></Route>
        {/* <Route path="/" element={<FetchApiRegister />} /> */}
      <Route path="/register" element={<FetchApiRegister />} /> 
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
}

export default App;
