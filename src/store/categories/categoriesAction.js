import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPE } from "./categoriesType";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesError = (error) =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_ERROR, error);
