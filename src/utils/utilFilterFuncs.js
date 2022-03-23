export const getSortedData = (data, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  } else if (sortBy === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  } else {
    return data;
  }
};

export const filterByRating = (data, filterByRating) => {
  if (filterByRating === "4_AND_ABOVE") {
    return data.filter((product) => Number(product.rating) >= 4);
  } else if (filterByRating === "3_AND_ABOVE") {
    return data.filter((product) => Number(product.rating) >= 3);
  } else if (filterByRating === "2_AND_ABOVE") {
    return data.filter((product) => Number(product.rating) >= 2);
  } else if (filterByRating === "1_AND_ABOVE") {
    return data.filter((product) => Number(product.rating) >= 1);
  } else {
    return data;
  }
};

export const filterByPriceRange = (data, filterByPriceRange) => {
  if (filterByPriceRange) {
    return data.filter(
      (product) => Number(product.price) <= Number(filterByPriceRange)
    );
  } else {
    return data;
  }
};
