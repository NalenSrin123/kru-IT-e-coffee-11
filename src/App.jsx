import React from 'react'

import Login from './utils/Login'
import Register from './services/auth/register'
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

const App = () => {
  return (
    <div>
      <Login />
      <Design_UI_get_reset_password_in_email />
      <GetOtpInEmail />
      <OtpDesign />
      <DashboardOverview />
      <CustomerLists />
      <HeroSection />
      <Design_Top_Product />
      <Register />
      <Navbar />
    </div>
  )
}

export default App
