import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello_World from './components/Hello_World'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello_World/>
    </>
  )
}

export default App;