const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        data: [],
        error: 'Error fetching data',
      };
    default:
      return state;
  }
};
export default reducer;
