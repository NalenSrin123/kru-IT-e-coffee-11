import React from 'react'
import { Link } from 'react-router-dom'

function Design_UI_get_reset_password_in_email() {
  return (
    <div className='flex justify-center items-center'>
      <div className=' border border-gray-400 lg:w-220 lg:h-110 md:w-150 md:h-115 sm:w-100 sm:h-107 rounded-2xl mt-20 shadow-xl'>
        <div className='text-center'>
          <div className='flex justify-center mt-10'>
            <img className='w-15 ' src="src\assets\images\coffee\Screenshot_2026-02-28_180152-removebg-preview.png" alt="" />
          </div>
          <div>
            <h2 className='text-lg font-bold mt-3'>Etec Coffee</h2>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-8'>Reset your password</h2>
          </div>
          <hr className='border-gray-200' />
        </div>
        <div className='lg:px-13 md:px-10 sm:px-8'>
          <h2 className='font-bold mb-6 mt-10  font-serif sm:text-sm md:text-lg lg:text-xl'>Hey Jack,</h2>
          <p className='font-san font-serif font-lg sm:text-sm md:text-base lg:text-lg'>Need to reset your password? No problem! Just click the button below and you'll be on your way. If you did not make this request,
            please ignore this email.
          </p>
          <button className='bg-blue-600 lg:w-193 h-13 md:w-130 sm:w-84 sm:h-10 sm:mt-4 rounded-2xl text-white font-medium text-lg mt-10'>Reset your password</button>
        </div>
      </div>
    </div>
    
  )
}

export default Design_UI_get_reset_password_in_email