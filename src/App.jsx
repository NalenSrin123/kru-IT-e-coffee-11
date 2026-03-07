<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>IT e-coffee</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======

import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Design_UI_get_reset_password_in_email from './services/auth/Design_UI_get_reset_password_in_email'

function App() {
  return (
    <div>
      <Design_UI_get_reset_password_in_email/>
    </div>
>>>>>>> 6a4c7f8da5f54231ac5e9b1898a6748443be58bd
  )
}

export default App
