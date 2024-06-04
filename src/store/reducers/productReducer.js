const initialState = {
  products: [],
  filteredProducts: [],
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
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
