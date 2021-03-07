import { useState } from "react";

export default function usePlayers() {
  const [players, setPlayers] = useState();

  const addPlayer = ({ firstname, lastname }) =>
    setPlayers((u) => [{ firstname, lastname }, ...u]);

  return { players, addPlayer };
}
