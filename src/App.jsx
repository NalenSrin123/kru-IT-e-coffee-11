import React from "react";
import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Inventory from './dashboard/features/dashboard-overview/components/Inventory'


import Login from './utils/Login'
import Register from './services/auth/register'
import React from 'react'
import Design_UI_get_reset_password_in_email from './services/auth/Design_UI_get_reset_password_in_email'
import ResetPassword from './services/auth/Comfirm_rest_pw'
import ForgotPassword from './services/auth/Forgotpassword'
import GetOtpInEmail from './services/auth/GetOtpInEmail'
import OtpDesign from './services/auth/OtpPage'
import Sidebar from './dashboard/features/Sidebar/sidebar'
import { DashboardOverview } from './dashboard/features/dashboard-overview/DashboardMain'
import CustomerLists from './dashboard/features/a2-tables-filters-ux/confirmation-modals/Customerlists'
import HeroSection from './components/public/home/HeroSection'
import Design_Top_Product from './components/public/home/Design_Top_Product'
import Navbar from './components/Navbar'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

import Sidebar from './dashboard/features/Sidebar/sidebar'
import { DashboardOverview } from './dashboard/features/dashboard-overview/DashboardMain'
import CustomerLists from './dashboard/features/a2-tables-filters-ux/confirmation-modals/Customerlists'
import HeroSection from './components/public/home/HeroSection'
import Design_Top_Product from './components/public/home/Design_Top_Product'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div>
      <Inventory/>
      <Navbar/>
      <HeroSection/>     
      <Design_Top_Product/>
      <Footer/>
    </div>
  )
}


    


      // {/* <Login />
      // <Design_UI_get_reset_password_in_email />
      // <GetOtpInEmail />
      // <OtpDesign />
      // <DashboardOverview />
      // <CustomerLists />
      // <HeroSection />
      // <Design_Top_Product />
      // <Register />
      // <Navbar /> */}
      //  /* <GetOtpInEmail/>
      //   <OtpDesign/>
      //  <ResetPassword/> */
import Register from "./services/auth/register";
import ForgotPassword from "./services/auth/Forgotpassword";
import PublicLayout from "./app/layouts/PublicLayout";
import OtpPage from "./services/auth/OtpPage";
import AuthLayout from "./app/layouts/AuthLayout";
import ResetPassword from "./services/auth/Comfirm_rest_pw";
import Login from "./utils/Login";
import OtpDesign from "./services/auth/OtpPage";
import DeleteProduct from "./services/api/DeleteProduct";
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
        <Route path="/register" element={<Register />} />
        <Route path="/otpage" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otpdesign" element={<OtpDesign/>}></Route>
        
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
