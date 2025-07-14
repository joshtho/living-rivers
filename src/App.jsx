import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CheckoutPage from './CheckoutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CheckoutPage />
    </>
  )
}

export default App
