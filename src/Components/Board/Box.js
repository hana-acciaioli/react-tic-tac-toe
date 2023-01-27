import React from 'react';
import './Box.css';
// import { useGameContext } from '../../Context/GameContext.js';

export default function Box({ box }) {
  return (
    <div className="box-container">{box.content && <img src={`${box.content}.png`}></img>}</div>
  );
}
