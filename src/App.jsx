import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import CheckoutPage from './CheckoutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/living-rivers" element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}

export default App
