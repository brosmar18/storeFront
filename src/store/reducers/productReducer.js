import { productCardData } from "../../constants";

const initialState = {
  products: productCardData,
  filteredProducts: productCardData,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      const filteredProducts =
        action.payload === "all"
          ? state.products
          : state.products.filter(
              (product) => product.category === action.payload
            );
      return {
        ...state,
        filteredProducts,
      };
    case "DECREASE_STOCK":
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            inventory: product.inventory - 1,
          };
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts,
        filteredProducts: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
