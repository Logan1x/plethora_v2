const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_RATING":
      return { ...state, filterByRating: action.payload };
    case "CLEAR_FILTER":
      return { ...state, filterByRating: null, sortBy: null };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducerFunc, {
  sortBy: null,
  filterByRating: null,
});
