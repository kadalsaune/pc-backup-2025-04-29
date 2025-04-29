import { Link } from 'react-router-dom';
import Header from './header';

// Dummy oppskrifter
const oppskrifter = [
    { id: 1, navn: 'Pasta Carbonara', beskrivelse: 'En klassisk italiensk rett med bacon og pasta.' },
    { id: 2, navn: 'Taco', beskrivelse: 'Meksikansk mat med kjøtt, salat og salsa.' },
    { id: 3, navn: 'Kylling Curry', beskrivelse: 'En krydret og smakfull indisk curry.' }
  ];

  function Forside() {
    return (
        <>
        <Header />
        <div>
        <h1>Mine Matoppskrifter</h1>
        <div className="oppskrifts-list">
            {oppskrifter.map(oppskrift => (
                <div className="oppskrift-kort" key={oppskrift.id}>
                    <h2>{oppskrift.navn}</h2>
                    <p>{oppskrift.beskrivelse}</p>
                    <Link to={`/oppskrift/${oppskrift.id}`}>Les mer</Link>
                </div>
            ))}
        </div>
        </div>
        </>
    );
}

export default Forside;