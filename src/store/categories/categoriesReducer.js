import { CATEGORIES_TYPE } from "./categoriesType";

const INITIAL_STATE = {
  categoriesMap: {},
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPE.GET_CATEGORIES_TO_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
