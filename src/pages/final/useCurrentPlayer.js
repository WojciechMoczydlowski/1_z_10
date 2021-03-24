import { useState } from "react";

export default function useCurrentPlayer() {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [isOpponent, setIsOpponent] = useState();

  const selectPlayer = (id, isOpponent) => {
    setCurrentPlayer(id);
    setIsOpponent(isOpponent);
  };

  return { currentPlayer, isOpponent, selectPlayer };
}
