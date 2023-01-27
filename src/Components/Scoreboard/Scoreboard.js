import React from 'react';
import './Scoreboard.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Scoreboard() {
  const { player } = useGameContext();
  return (
    <div className="container">
      <h1>Tic-Tac-Toe!</h1>
      <p>
        It&apos;s <b>{player}&apos;s</b> turn
      </p>
    </div>
  );
}
