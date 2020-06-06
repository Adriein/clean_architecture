import React, { createContext } from 'react';

import useApi from '../hooks/useApi';

export const UsersContext = createContext();
//export const DispatchContext = createContext();

const initialState = {
  loading: true,
  data: [],
  payload: [],
  error: '',
};

const getEndpoint = '/api/admin/overview';

export function UsersProvider(props) {
  const { state, post, put, del } = useApi(getEndpoint, initialState);

  return (
    <UsersContext.Provider value={{ state, post, put, del }}>
      {props.children}
    </UsersContext.Provider>
  );
}
