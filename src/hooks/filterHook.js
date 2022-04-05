import {
  getSortedData,
  filterByRating,
  filterByPriceRange,
} from "../utils/utilFilterFuncs";

// import { updateCartItemQuantity } from "../utils/utilCartFuncs";

import { useDataContext } from "../contexts/dataContext";
// import { updateCartItemQuantity } from "../utils/utilCartWishFuncs";

export const useFilterHook = () => {
  const { state } = useDataContext();

  const sortedData = getSortedData(state.data, state.sortBy);
  let filteredData = filterByRating(sortedData, state.filterByRating);
  filteredData = filterByPriceRange(filteredData, state.filterByPriceRange);

  // const cartItemQuant = updateCartItemQuantity(state.cartData, id, incOrDec);

  return { filteredData };
};
