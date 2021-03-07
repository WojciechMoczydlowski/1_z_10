import { useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState();

  const addUser = ({ firstname, lastname }) =>
    setUsers((u) => [{ firstname, lastname }, ...u]);

  return { users, addUser };
}
