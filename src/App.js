import './App.css';
import Board from './Components/Board/Board.js';
import Scoreboard from './Components/Scoreboard/Scoreboard.js';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Board />
    </div>
  );
}

export default App;
