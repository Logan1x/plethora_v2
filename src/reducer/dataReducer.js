const dataReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_RATING":
      return { ...state, filterByRating: action.payload };
    case "FILTER_BY_PRICE_RANGE":
      return { ...state, filterByPriceRange: action.payload };
    case "CLEAR_FILTER":
      return {
        ...state,
        filterByRating: null,
        sortBy: null,
        filterByPriceRange: 15000,
      };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  sortBy: null,
  filterByRating: null,
  filterByPriceRange: 15000,
};

export { dataReducerFunc, initialState };
