import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Sidebar from './dashboard/features/Sidebar/sidebar';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 p-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
        <p className='text-gray-600'>Welcome to the E-Coffee Admin Dashboard</p>
      </main>
    </div>
  )
}

export default App;