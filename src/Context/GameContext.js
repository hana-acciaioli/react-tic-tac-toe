import { createContext, useContext, useState, useEffect } from 'react';

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
  const [gameMessage, setGameMessage] = useState(`You are up ${player}`);
  const [resultsMessage, setResultsMessage] = useState('');

  function checkForWin() {
    let winner = null;
    if (board[0].content === board[1].content && board[1].content === board[2].content) {
      return (winner = `${board[2].content}`);
    }
    if (board[3].content === board[4].content && board[4].content === board[5].content) {
      return (winner = `${board[5].content}`);
    }
    if (board[6].content === board[7].content && board[7].content === board[8].content) {
      return (winner = `${board[8].content}`);
    }
    if (board[0].content === board[3].content && board[3].content === board[6].content) {
      return (winner = `${board[6].content}`);
    }
    if (board[1].content === board[4].content && board[4].content === board[7].content) {
      return (winner = `${board[7].content}`);
    }
    if (board[2].content === board[5].content && board[5].content === board[8].content) {
      return (winner = `${board[8].content}`);
    }
    if (board[0].content === board[4].content && board[4].content === board[8].content) {
      return (winner = `${board[8].content}`);
    }
    if (board[2].content === board[4].content && board[4].content === board[6].content) {
      return (winner = `${board[6].content}`);
    }
  }
  const checkGameStatus = () => {
    if (!isActive) return;
    const winner = checkForWin();
    if (winner) {
      setResultsMessage(`You win ${winner}!`);
      setIsActive(false);
    } else if (
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
      setIsActive(false);
      setResultsMessage('Cats Game!');
    } else {
      return;
    }
  };

  checkGameStatus();

  useEffect(() => {
    setGameMessage(`You are up ${player}!`);
  }, [player]);

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
        resultsMessage,
        setResultsMessage,
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
