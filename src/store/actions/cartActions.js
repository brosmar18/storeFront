export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const updateTotalPrice = () => ({
  type: "UPDATE_TOTAL_PRICE",
});
