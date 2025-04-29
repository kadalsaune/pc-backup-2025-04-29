import { useParams } from 'react-router-dom';
import Header from './header';

function Oppskrift() {
    const { id } = useParams();

    const oppskrifter = [
        { id: 1, navn: 'Pasta Carbonara', ingredienser: ['Pasta', 'Bacon', 'Egg', 'Parmesan'], fremgangsmåte: 'Kok pasta, stek bacon, bland sammen.' },
        { id: 2, navn: 'Taco', ingredienser: ['Kjøttdeig', 'Taco-krydder', 'Lefser', 'Salat', 'Salsa'], fremgangsmåte: 'Stek kjøttdeig, fyll lefse med ingredienser.' },
        { id: 3, navn: 'Kylling Curry', ingredienser: ['Kylling', 'Curry-paste', 'Kokosmelk', 'Ris'], fremgangsmåte: 'Stek kylling, bland i curry-paste, tilsett kokosmelk.' }
      ];

      
    const oppskrift = oppskrifter.find(oppskrift => oppskrift.id === parseInt(id));
     
    if (!oppskrift) {
        return <p>Oppskriften ble ikke funnet.</p>;
      }

      return (
        <>
        <Header />
        <div>
          <h1>{oppskrift.navn}</h1>
          <h3>Ingredienser:</h3>
          <ul>
            {oppskrift.ingredienser.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Fremgangsmåte:</h3>
          <p>{oppskrift.fremgangsmåte}</p>
        </div>
        </>
      );
}

export default Oppskrift;