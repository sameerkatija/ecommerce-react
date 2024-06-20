import { CATEGORIES_TYPE } from "./categoriesType";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPE.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORIES_TYPE.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
