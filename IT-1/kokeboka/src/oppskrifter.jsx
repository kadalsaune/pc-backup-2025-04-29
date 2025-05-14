import { Link } from 'react-router-dom';
import oppskrifter from './assets/oppskrifter.json';
import Header from './header.jsx'
import Nav from './nav.jsx'

function Oppskrifter(){

    return(
        <>
        <Header />
        <Nav />
            <h1>Oppskrifter</h1>
            <ul>
                {oppskrifter.map((oppskrift, index) => (
                    <li key={index}>
                        <h2>{oppskrift.navn}</h2>
                        <p>{oppskrift.beskrivelse}</p>
                        <Link to={`/oppskrift/${oppskrift.id}`}>Se oppskrift</Link>
                    </li>
                ))}
            </ul>
        
        </>
    )
}

export default Oppskrifter;