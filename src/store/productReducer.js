import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts(state, action) {
      state.filteredProducts =
        action.payload === "all"
          ? state.products
          : state.products.filter(
              (product) => product.category === action.payload
            );
    },
  },
});

export const { setProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
