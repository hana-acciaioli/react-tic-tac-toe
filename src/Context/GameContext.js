import { createContext, useContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
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
  const [player, setPlayer] = useState('X');
  const [isActive, setIsActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('');
  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        player,
        setPlayer,
        isActive,
        setIsActive,
        gameMessage,
        setGameMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('GameContext must be used within a GameProvider');
  }
  return context;
};

export { useGameContext, GameProvider };
