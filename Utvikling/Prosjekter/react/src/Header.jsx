import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"


function Header() {
  

  return (
    <>
    <header className="header">
      <h1>STORE NORSKE KOKEBOK</h1>
        <h2>Verdens største database av norske oppskrifter</h2>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Hjem&nbsp;&nbsp;</Link></li>
            <li><Link to="/ny-oppskrift">Ny oppskrift&nbsp;&nbsp;</Link></li>
            <li><Link to="/om-oss">Om oss&nbsp;&nbsp;</Link></li>

          </ul>
        </nav>
    </header>
    </>
    
  )
}

export default Header