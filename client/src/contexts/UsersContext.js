import React, { createContext } from "react";

import UseSyncUsersState from "../hooks/useSyncUsersState";

export const UsersContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export function UsersProvider(props) {
  const [state, dispatch] = UseSyncUsersState(initialState);

  return <UsersContext.Provider value={{ state, dispatch }}>{props.children}</UsersContext.Provider>;
}
