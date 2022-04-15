import {
  getSortedData,
  filterByRating,
  filterByPriceRange,
} from "../utils/utilFilterFuncs";


import { useDataContext } from "../contexts/dataContext";

export const useFilterHook = () => {
  const { state } = useDataContext();

  const sortedData = getSortedData(state.data, state.sortBy);
  let filteredData = filterByRating(sortedData, state.filterByRating);
  filteredData = filterByPriceRange(filteredData, state.filterByPriceRange);


  return { filteredData };
};
