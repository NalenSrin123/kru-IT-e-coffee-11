import { useState } from 'react'
import './App.css'
import Inventory from './component/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inventory/>
    </>
  )
}

export default App
