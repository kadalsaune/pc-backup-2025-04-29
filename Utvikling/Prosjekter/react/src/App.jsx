import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Forside from './Forside'
import Oppskrift from './Oppskrift'
import NyOppskrift from './NyOppskrift'

const initialOppskrifter = [
  { id: 1, navn: 'Pasta Carbonara', beskrivelse: 'En klassisk italiensk rett med bacon og pasta.',  ingredienser: ['Pasta', 'Bacon', 'Egg', 'Parmesan'], fremgangsmate: 'Kok pasta, stek bacon, bland sammen.' },
  { id: 2, navn: 'Taco', beskrivelse: 'Meksikansk mat med kjøtt, salat og salsa.', ingredienser: ['Kjøttdeig', 'Taco-krydder', 'Lefser', 'Salat', 'Salsa'], fremgangsmate: 'Stek kjøttdeig, fyll lefse med ingredienser.' },
  { id: 3, navn: 'Kylling Curry', beskrivelse: 'En krydret og smakfull indisk curry.', ingredienser: ['Kylling', 'Curry-paste', 'Kokosmelk', 'Ris'], fremgangsmate: 'Stek kylling, bland i curry-paste, tilsett kokosmelk.' }
];

function App() {
  const [oppskrifter, setOppskrifter] = useState(initialOppskrifter);

  const leggTilOppskrift = (nyOppskrift) => {
    setOppskrifter([...oppskrifter, {...nyOppskrift, id: oppskrifter.length + 1}])
  console.log("Legger til oppskrift:", nyOppskrift);
  
  }


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Forside oppskrifter={oppskrifter} />} />
        <Route path="/oppskrift/:id" element={<Oppskrift oppskrifter={oppskrifter} />} />
        <Route path="/ny-oppskrift" element={<NyOppskrift leggTilOppskrift={leggTilOppskrift} />} />
      </Routes>
    </Router>
      
      
      
    </>
  )
}

export default App