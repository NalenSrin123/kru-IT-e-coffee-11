import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./services/auth/register";
import ForgotPassword from "./services/auth/Forgotpassword";
import PublicLayout from "./app/layouts/PublicLayout";
import OtpPage from "./services/auth/OtpPage";
import AuthLayout from "./app/layouts/AuthLayout";
import ResetPassword from "./services/auth/Comfirm_rest_pw";
import Login from "./utils/Login";
import adminRoutes from "./app/router/admin";
import { ProductContext } from "./context/products/ProductData";


const App = () => {
  const {products,setProducts}=useContext(ProductContext)
  return (
    // <Routes>
    //   {/* Public Pages */}
    //   <Route
    //      path="/"
    //     element={<PublicLayout />}
    //   > 
    //      <Route index element={<></>} /> Extra content if needed 
    //   </Route>

    //   {/* Auth Pages */}
    //   <Route
    //     element={<AuthLayout />}
    //   >
      
    //     <Route path="/login" element={<Login/>} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/otpage" element={<OtpPage />} />
    //     <Route path="/forgot-password" element={<ForgotPassword />} />
    //     <Route path="/reset-password" element={<ResetPassword />} />
    //   </Route>

    //   {/* Dashboard / Admin Routes  */}
    //   {adminRoutes.map((route, index) => (
    //     <Route key={index} path={route.path} element={route.element}>
    //       {route.children &&
    //         route.children.map((child, childIndex) => (
    //           <Route
    //             key={childIndex}
    //             index={child.index}
    //             path={child.path}
    //             element={child.element}
    //           />
    //         ))}
    //     </Route>
    //   ))}
    // </Routes>
    <>
      {
        product.map((value, index, array) => {})
      }
    </>
  );
};

export default App;