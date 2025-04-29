import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Forside from './Forside'
import App from './App.jsx'
import Header from './header.jsx'
import pancake from './assets/pancakes.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>
)
