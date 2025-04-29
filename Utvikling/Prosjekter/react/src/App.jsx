import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Forside from './Forside'
import Oppskrift from './Oppskrift'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/oppskrift/:id" element={<Oppskrift />} />
      </Routes>
    </Router>
      
      
      
    </>
  )
}

export default App