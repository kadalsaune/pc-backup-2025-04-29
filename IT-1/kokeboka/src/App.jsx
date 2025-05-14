import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './index.jsx'
import About from './about.jsx'
import Oppskrifter from './oppskrifter.jsx'
import Oppskrift from './oppskrift.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/oppskrifter' element={<Oppskrifter />} />
          <Route path='/oppskrift/:id' element={<Oppskrift />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
