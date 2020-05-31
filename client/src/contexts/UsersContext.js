import React, { createContext } from 'react';

import useApi from '../hooks/useApi';

export const UsersContext = createContext();
//export const DispatchContext = createContext();

const initialState = {
  loading: false,
  data: [],
  payload: [],
  error: '',
};

const getEndpoint = '/api/admin/overview';

export function UsersProvider(props) {
  const { state, makePost } = useApi(getEndpoint, initialState);

  return (
    <UsersContext.Provider value={{ state, makePost}}>
      {props.children}
    </UsersContext.Provider>
  );
}
