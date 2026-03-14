import React from 'react'
import { Route,Routes } from 'react-router-dom'
const auth = () => {
  return (
   
       <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login/>}> </Route>
         <Route path='/GetOtpInEmail' element={<GetOtpInEmail/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
         <Route path='/otpdesign' element={<OtpDesign/>}></Route>
      </Routes>

  )
}

export default auth
