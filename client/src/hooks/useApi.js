import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import reducer from '../reducers/apiReducer';

const useApi = (initEndpoint, initState) => {
  const [endpoint] = useState(initEndpoint);
  const [state, dispatch] = useReducer(reducer, initState);

  const makePost = async (url, data) => {
    try {
      dispatch({
        type: 'POST',
        payload: (await axios.post(url, data)).data,
      });
    } catch (error) {
      dispatch({ type: 'POST_ERROR' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: (await axios.get(endpoint)).data,
        });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };

    fetchData();
  }, [endpoint]);

  return { state, makePost };
};

export default useApi;
