import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    // mx-auto: margin on x axis auto
    // container is for fixed screen sizes, as opposed to fluid viewports.
  return (
      <div className="container mx-auto bg-red-500">
          Hi
      </div>
  )
}

export default App
