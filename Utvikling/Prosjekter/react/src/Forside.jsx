import { Link } from 'react-router-dom';
import Header from './header';



  function Forside({ oppskrifter }) {
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