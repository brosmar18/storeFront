import { createSlice } from "@reduxjs/toolkit";
import { categoryData } from "../../constants";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: categoryData,
    activeCategory: null,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
