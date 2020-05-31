const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        payload: [],
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        data: [],
        payload: [],
        error: 'Error fetching data',
      };
    case 'POST':
      return {
        loading: false,
        data: [...state.data, action.payload[0]],
        payload: [],
        error: '',
      };
    case 'POST_ERROR':
      return {
        loading: false,
        data: [...state.data],
        payload: [],
        error: 'Error posting data',
      };
    default:
      return state;
  }
};
export default reducer;
