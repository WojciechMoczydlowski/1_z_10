import React from "react";
import usePlayers from "domain/users/usePlayers";
const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const players = usePlayers();

  const defaultContext = {
    players,
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
