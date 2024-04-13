import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    filterProducts: (state, action) => {
      const activeCategory = action.payload;
      return state.filter((product) => product.category === activeCategory);
    },
  },
});

export const { setProducts, filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
