import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    activeCategory: "all",
  },
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setActiveCategory, setCategories } = categorySlice.actions;
export default categorySlice.reducer;
