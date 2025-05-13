import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';

function NyOppskrift({ leggTilOppskrift }) {
    const [navn, setNavn] = useState('');
    const [beskrivelse, setBeskrivelse] = useState('');
    const [ingredienser, setIngredienser] = useState(['']);
    const [fremgangsmate, setFremgangsmate] = useState('');
    
    const navigate = useNavigate();

    const handleLeggTilOppskrift = (e) => {
        e.preventDefault();
        leggTilOppskrift({
            navn,
            beskrivelse,
            ingredienser,
            fremgangsmate
        });
        // console.log("Legger til oppskrift:", navn, beskrivelse, ingredienser, fremgangsmate);
        
        navigate('/');
    }

    return(
        <>
        <Header />
        <form onSubmit={handleLeggTilOppskrift}>
            <h2>Ny Oppskrift</h2>
            <input type="text" placeholder="Navn" value={navn} onChange={(e) => setNavn(e.target.value)} required />
            <input type="text" placeholder="Beskrivelse" value={beskrivelse} onChange={(e) => setBeskrivelse(e.target.value)} required />
            <h3>Ingredienser</h3>
            <p>Skriv inn ingredienser, med komma imellom hver linje.</p>
            <input type="textarea" placeholder="Ingredienser" value={ingredienser} onChange = {(e) => setIngredienser(e.target.value.split(','))} required />
            <h3>Fremgangsmåte</h3>
            <p>Skriv inn fremgangsmåte.</p>
            <input type="textarea" placeholder="Fremgangsmåte" value={fremgangsmate} onChange={(e) => setFremgangsmate(e.target.value)} required />
            <button type="submit">Legg til oppskrift</button>
            

        </form>
        </>
    );
}

export default NyOppskrift;