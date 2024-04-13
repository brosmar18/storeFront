import { createSlice } from "@reduxjs/toolkit";

const activeCategorySlice = createSlice({
  name: "activeCategory",
  initialState: null,
  reducers: {
    setActiveCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveCategory } = activeCategorySlice.actions;

export default activeCategorySlice.reducer;
