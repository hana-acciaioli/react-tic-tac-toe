import React from 'react';
import './Box.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Box({ box }) {
  const { player, isActive, setPlayer, board, setBoard, setGameMessage, gameMessage } =
    useGameContext();

  function handleClick() {
    box.content = player;
    const newBoard = [...board];
    setBoard(newBoard);
    {
      player === 'X' ? setPlayer('O') : setPlayer('X');
    }
  }

  return (
    <>
      {isActive && box.content === '' ? (
        <button className="button" onClick={() => handleClick()}>
          <div className="box-container">
            {box.content && <img className="image" src={`${box.content}.png`}></img>}
          </div>
        </button>
      ) : (
        <div className="box-container">
          {box.content && <img className="image" src={`${box.content}.png`}></img>}
        </div>
      )}
    </>
  );
}
