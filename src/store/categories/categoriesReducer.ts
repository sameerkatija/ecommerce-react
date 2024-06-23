import { CATEGORIES_TYPE, Category } from "./categoriesType";
import { CategoryAction } from "./categoriesAction";

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

const CategoriesReducer = (
  state = INITIAL_STATE,
  action = {} as CategoryAction
): CategoryState => {
  switch (action.type) {
    case CATEGORIES_TYPE.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case CATEGORIES_TYPE.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
