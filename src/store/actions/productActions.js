export const filterProducts = (category) => ({
    type: 'FILTER_PRODUCTS',
    payload: category,
  });
  
  export const decreaseStock = (productId) => ({
    type: 'DECREASE_STOCK',
    payload: productId,
  });