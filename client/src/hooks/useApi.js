import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import reducer from '../reducers/apiReducer';

const useApi = (initEndpoint, initState) => {
  const [endpoint] = useState(initEndpoint);
  const [state, dispatch] = useReducer(reducer, initState);

  const post = async (url, data) => {
    try {
      dispatch({
        type: 'POST',
        payload: (await axios.post(url, data)).data,
      });
    } catch (error) {
      dispatch({ type: 'POST_ERROR' });
    }
  };

  const put = async (url, data) => {
    try {
      dispatch({
        type: 'PUT',
        payload: (await axios.put(url, data)).data,
      });
    } catch (error) {
      dispatch({ type: 'POST_ERROR' });
    }
  };

  const del = async (url) => {
    try {
      dispatch({ type: 'DELETE', payload: await axios.delete(url) });
    } catch (error) {
      dispatch({ type: 'DELETE_ERROR' });
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

  return { state, post, put, del };
};

export default useApi;
