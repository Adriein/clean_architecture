import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer from '../reducers/usersReducer';

function UseSyncUsersState(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData() {
    try {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: (await axios.get('/api/admin/overview')).data,
      });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR' });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [state, dispatch];
}

export default UseSyncUsersState;
