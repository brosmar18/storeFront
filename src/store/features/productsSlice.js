import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../constants";

const productsSlice = createSlice({
  name: "products",
  initialState: productData,
  reducers: {},
});

export default productsSlice.reducer;
