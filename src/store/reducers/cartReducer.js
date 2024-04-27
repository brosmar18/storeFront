const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "UPDATE_TOTAL_PRICE":
      const totalPrice = state.items.reduce(
        (total, item) => total + item.price,
        0
      );
      return {
        ...state,
        totalPrice,
      };
    default:
      return state;
  }
};

export default cartReducer;
