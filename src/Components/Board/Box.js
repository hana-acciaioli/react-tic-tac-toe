import React from 'react';
import './Box.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Box({ box }) {
  const { player, isActive, setIsActive, setPlayer, board, setBoard } = useGameContext();

  //   function chooseSpace(player) {
  //     const content = player;
  //     box.content = content;
  //     console.log(box.content, player);
  //   }
  return (
    <>
      {isActive ? (
        <button className="button" onClick={() => console.log('click', { player })}>
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
