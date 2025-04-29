import { useState } from 'react'
import "./Header.css"


function Header() {
  

  return (
    <>
    <header className="header">
      <h1>STORE NORSKE KOKEBOK</h1>
        <h2>Verdens største database av norske oppskrifter</h2>
        <nav>
          <ul className="nav-list">
            <li><a href="/">Hjem&nbsp;&nbsp;</a></li>
            <li><a href="/oppskrifter">Oppskrifter&nbsp;&nbsp;</a></li>
            <li><a href="/om-oss">Om oss&nbsp;&nbsp;</a></li>

          </ul>
        </nav>
    </header>
    </>
    
  )
}

export default Header