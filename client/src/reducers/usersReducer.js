const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action];
    case "REMOVE":
      return state.filter((user) => user.id !== action.id);
    case "EDIT":
      return state.map((user) => (user.id === action.id ? action : user));
    case "SELECT":
      return state.find((user) => user.id === action.id);
    case "FILTER_ACTIVE":
      return state.filter((user) => user.user_status === true);
    case "FILTER_PENDING":
      return state.filter((user) => user.pending === true);
    case "FILTER_SEARCH":
      const filteredUsers = state.users.filter((user) => {
        const name = `${user.first_name} ${user.last_name}`;
        return name.toLocaleLowerCase().includes(action.searchTerm);
      });
      return {
        loading: false,
        users: state.users,
        filteredUsers,
        error: "",
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        filteredUsers: action.payload,
        error: "",
        searchTerm: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        data: [],
        filteredUsers: [],
        error: "Error fetching users data",
      };
    default:
      return state;
  }
};
export default reducer;
