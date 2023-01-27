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
  const [isCatsGame, setIsCatsGame] = useState(false);
  let winner = null;

  function checkForCatsGame() {
    if (
      !winner &&
      board[0].content &&
      board[1].content &&
      board[2].content &&
      board[3].content &&
      board[4].content &&
      board[5].content &&
      board[6].content &&
      board[7].content &&
      board[8].content
    ) {
      setGameMessage('Cats Game!');
      setIsActive(false);
    }
  }

  function checkForWin() {
    {
      if (board[0].content === board[1].content && board[1].content === board[2].content) {
        winner = `${board[2].content}`;
        return winner;
      }
    }
    {
      if (board[3].content === board[4].content && board[4].content === board[5].content) {
        winner = `${board[5].content}`;
        return winner;
      }
    }
    {
      if (board[6].content === board[7].content && board[7].content === board[8].content) {
        winner = `${board[8].content}`;
        return winner;
      }
    }
    {
      if (board[0].content === board[3].content && board[3].content === board[6].content) {
        winner = `${board[6].content}`;
        return winner;
      }
    }
    {
      if (board[1].content === board[4].content && board[4].content === board[7].content) {
        winner = `${board[7].content}`;
        return winner;
      }
    }
    {
      if (board[2].content === board[5].content && board[5].content === board[8].content) {
        winner = `${board[8].content}`;
        return winner;
      }
    }
    {
      if (board[0].content === board[4].content && board[4].content === board[8].content) {
        winner = `${board[8].content}`;
        return winner;
      }
    }
    {
      if (board[2].content === board[4].content && board[4].content === board[6].content) {
        winner = `${board[6].content}`;
        return winner;
      }
    }
  }

  const checkGameStatus = () => {
    if (!isActive) return;
    const winner = checkForWin();
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setIsActive(false);
    } else if (checkForCatsGame());
  };

  checkGameStatus();

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
