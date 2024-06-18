import { CATEGORIES_TYPE } from "./categoriesType";

const INITIAL_STATE = {
  categories: [],
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPE.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
