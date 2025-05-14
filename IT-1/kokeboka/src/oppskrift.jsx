import { useParams } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import oppskrifter from './assets/oppskrifter.json';


function Oppskrift() {
    const { id } = useParams();
    const oppskrift = oppskrifter.find(oppskrift => oppskrift.id === parseInt(id));

    if (!oppskrift) {
        return <h1>Oppskriften ble ikke funnet</h1>;
    }

    return(
        <>
            <Header />
            <Nav />
            <h1>{oppskrift.navn}</h1>
            <p>{oppskrift.beskrivelse}</p>
            <h2>Ingredienser</h2>
            <ul>
                {oppskrift.ingredienser.map((ingrediens, index) => (
                    <li key={index}>{ingrediens}</li>
                ))}
            </ul>
            <h2>Fremgangsmåte</h2>
            <ol>
                {oppskrift.fremgangsmåte.map((trinn, index) => (
                    <li key={index}>{trinn}</li>
                ))}
            </ol>

            
        </>
    )
}

export default Oppskrift;