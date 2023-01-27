import React from 'react';
import './Scoreboard.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Scoreboard() {
  const { gameMessage } = useGameContext();
  return (
    <div className="container">
      <h1>Tic-Tac-Toe!</h1>
      <p>{gameMessage}</p>
    </div>
  );
}
