import { gameCategories } from '../../constants';

const initialState = {
  categories: gameCategories,
  activeCategory: 'all',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;