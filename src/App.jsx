
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
import Footer from './components/common/Footer'
import Navbar from './components/Navbar'
import AddToCardPage from './dashboard/pages/prices/AddToCardPage'



function App() {
  return (
    <div>
      {/*<Design_UI_get_reset_password_in_email/>
      <ResetPassword/>*/}
      <Navbar/>
      {/* <ForgotPassword/> */}
      {/*<GetOtpInEmail/>
      <OtpDesign/>*/}
      {/* <Sidebar/> */}
      {/*<DashboardOverview/>
      <CustomerLists/>*/}
      <HeroSection/>
      <Design_Top_Product/>
      <Footer/>
      <AddToCardPage/>
    </div>
  )
} 

export default App
