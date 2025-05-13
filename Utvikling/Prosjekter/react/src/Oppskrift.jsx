import { useParams } from 'react-router-dom';
import Header from './header';

function Oppskrift({ oppskrifter }) {
    const { id } = useParams();



      
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
          <p>{oppskrift.fremgangsmate}</p>
        </div>
        </>
      );
}

export default Oppskrift;