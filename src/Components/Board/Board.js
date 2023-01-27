import React from 'react';
import './Board.css';
import { useGameContext } from '../../Context/GameContext.js';
import Box from './Box.js';
export default function Board() {
  const { board } = useGameContext();
  return (
    <div className="board">
      {board.map((box, index) => (
        <Box key={index} {...{ box }} />
      ))}
    </div>
  );
}
