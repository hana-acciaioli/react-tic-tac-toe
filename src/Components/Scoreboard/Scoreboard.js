import React from 'react';
import './Scoreboard.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Scoreboard() {
  const { gameMessage, resultsMessage, setGameMessage, isActive, setIsActive, setBoard, player } =
    useGameContext();

  function handleNewGame() {
    setIsActive(true);
    setBoard([
      { space: 0, content: '' },
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
    ]);
    setGameMessage(`Your are up ${player}!`);
  }

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      {isActive ? (
        <p>{gameMessage}</p>
      ) : (
        <>
          <h2>{resultsMessage}</h2>
          <button className="play-again-button" onClick={() => handleNewGame()}>
            Play Again
          </button>
        </>
      )}
    </div>
  );
}
