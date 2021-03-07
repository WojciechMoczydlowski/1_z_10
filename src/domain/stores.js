import React from "react";
import useUsers from "domain/users/useUsers";
const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const users = useUsers();

  const defaultContext = {
    users,
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
