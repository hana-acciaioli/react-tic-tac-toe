import './App.css';
import Board from './Components/Board/Board.js';
import Scoreboard from './Components/Scoreboard/Scoreboard.js';
import { useGameContext } from './Context/GameContext.js';
function App() {
  // function chooseSpace() {
  //   const space = [];
  // }
  return (
    <div className="App">
      <Scoreboard />
      <Board />
    </div>
  );
}

export default App;
