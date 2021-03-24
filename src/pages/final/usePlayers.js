import { useState } from "react";

export default function usePlayers() {
  const [playersScore, setPlayersScore] = useState({ 0: 0, 1: 0, 2: 0 });
  const [playersLife, setPlayersLife] = useState({ 0: 3, 1: 3, 2: 3 });

  const answerQuestion = (currentPlayer, isOpponent, isCorrect) => {
    if (currentPlayer !== undefined) {
      if (isCorrect) {
        setPlayersScore((score) => ({
          ...score,
          [currentPlayer]: score[currentPlayer] + (isOpponent ? 10 : 20),
        }));
      } else {
        setPlayersLife((life) => ({
          ...life,
          [currentPlayer]: life[currentPlayer] - 1,
        }));
      }
    }
  };

  return { playersScore, playersLife, answerQuestion };
}
