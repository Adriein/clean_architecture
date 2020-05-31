import React, { createContext } from 'react';

import useApiFetch from '../hooks/useApiFetch';

export const UsersContext = createContext();
//export const DispatchContext = createContext();

// const initialState = {
//   loading: true,
//   data: [],
//   error: "",
// };

const getUsersUrl = '/api/admin/overview';
const initUsersData = [];

export function UsersProvider(props) {
  //const [state, dispatch] = UseSyncUsersState(initialState);
  const [state, setUrl] = useApiFetch(getUsersUrl, initUsersData);

  return (
    <UsersContext.Provider value={{ state }}>
      {props.children}
    </UsersContext.Provider>
  );
}
