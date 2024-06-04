import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    updateTotalPrice(state) {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price,
        0
      );
    },
  },
});

export const { addToCart, updateTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
