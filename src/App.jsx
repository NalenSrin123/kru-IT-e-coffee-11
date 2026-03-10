import { useState } from 'react'
import './App.css'
import Inventory from './dashboard/features/dashboard-overview/components/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inventory/>
    </>
  )
}

export default App