export const filterProducts = (category) => ({
  type: "FILTER_PRODUCTS",
  payload: category,
});

export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});
