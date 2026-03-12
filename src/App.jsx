
import React from 'react'
import Register from './services/auth/register'
import Login from './utils/Login'
import OtpDesign from './services/auth/OtpPage'
import Design_UI_get_reset_password_in_email from './services/auth/Design_UI_get_reset_password_in_email'
import ResetPassword from './services/auth/Comfirm_rest_pw'
import ForgotPassword from './services/auth/Forgotpassword'
import GetOtpInEmail from './services/auth/GetOtpInEmail'

import Sidebar from './dashboard/features/Sidebar/sidebar'
import { DashboardOverview } from './dashboard/features/dashboard-overview/DashboardMain'
import CustomerLists from './dashboard/features/a2-tables-filters-ux/confirmation-modals/Customerlists'
import HeroSection from './components/public/home/HeroSection'
import Design_Top_Product from './components/public/home/Design_Top_Product'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import { Routes,Route } from 'react-router-dom'
=======
import Footer from './components/common/Footer'
>>>>>>> 104a3baa2b8c2e17e17423611944b7fea3956ace

const App = () => {
  return (
<<<<<<< HEAD
    <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login/>}> </Route>
         <Route path='/GetOtpInEmail' element={<GetOtpInEmail/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
         <Route path='/otpdesign' element={<OtpDesign/>}></Route>
=======
    <div>
      <Navbar/>
      <HeroSection/>     
      <Design_Top_Product/>
      <Footer/>
    </div>
  )
}
>>>>>>> 104a3baa2b8c2e17e17423611944b7fea3956ace


      </Routes>
  )}
    


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

      
export default App
