import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import productsReducer from "./features/productsSlice";
import activeCategoryReducer from "./features/activeCategorySlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    activeCategory: activeCategoryReducer,
  },
});

export default store;
