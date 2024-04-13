import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    activeCategory: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setCategories, setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
