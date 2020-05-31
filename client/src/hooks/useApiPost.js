import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer from '../reducers/apiReducer';

const useApiFetch = (initUrl, initData) => {
  const [url, setUrl] = useState(initUrl);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: initData,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: (await axios.get(url)).data,
        });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl];
};

export default useApiFetch;
