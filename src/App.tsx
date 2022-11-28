import './App.css';
import thilla from './media/Thilla.png';
import Contestant from './contestant';
import fredrik from './media/Fredrik.png';
import eirik from './media/Eirik.png';
import silje from './media/Silje.png';


function App() {
  var players = [
    {
      name: "Thilla",
      image: thilla,
      score: 0,
    },
    {
      name: "Fredrik",
      image: fredrik,
      score: 0,
    },
    {
      name: "Eirik",
      image: eirik,
      score: 0,
    },
    {
      name: "Silje",
      image: silje,
      score: 0,
    }
  ]
  
  
  return (
    <div className="App">
      <div className="flex flex-col justify-center h-[100vh]"> 
        <div className="flex justify-center gap-20">
          {players.map(player => (
            <Contestant player={player}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
