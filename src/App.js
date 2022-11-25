import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {
  return (

    // Rotas
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App
