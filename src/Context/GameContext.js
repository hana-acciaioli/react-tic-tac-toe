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
    if (
      board[0].content === board[1].content &&
      board[1].content === board[2].content &&
      board[2].content !== ''
    ) {
      return (winner = board[2].content);
    } else if (
      board[3].content === board[4].content &&
      board[4].content === board[5].content &&
      board[5].content !== ''
    ) {
      return (winner = board[5].content);
    } else if (
      board[6].content === board[7].content &&
      board[7].content === board[8].content &&
      board[8].content !== ''
    ) {
      return (winner = board[8].content);
    } else if (
      board[0].content === board[3].content &&
      board[3].content === board[6].content &&
      board[6].content !== ''
    ) {
      return (winner = board[6].content);
    } else if (
      board[1].content === board[4].content &&
      board[4].content === board[7].content &&
      board[7].content !== ''
    ) {
      return (winner = board[7].content);
    } else if (
      board[2].content === board[5].content &&
      board[5].content === board[8].content &&
      board[8].content !== ''
    ) {
      return (winner = board[8].content);
    } else if (
      board[0].content === board[4].content &&
      board[4].content === board[8].content &&
      board[8].content !== ''
    ) {
      return (winner = board[8].content);
    } else if (
      board[2].content === board[4].content &&
      board[4].content === board[6].content &&
      board[6].content !== ''
    ) {
      // eslint-disable-next-line no-unused-vars
      return (winner = board[6].content);
    } else return;
  }

  //   function checkForWin() {
  //     let winner = null;
  //     switch (winner) {
  //       case board[0].content === board[1].content && board[1].content === board[2].content:
  //         winner = board[5].content;
  //         break;
  //     }
  //   }
  const checkGameStatus = () => {
    if (!isActive) return;
    let winner = checkForWin();
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
    setGameMessage(`You are are up ${player}!`);
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
