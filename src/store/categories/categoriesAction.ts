import {
  Action,
  ActionWithPayload,
  createAction,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPE, Category } from "./categoriesType";

export type FetchCategoryStart = Action<CATEGORIES_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategorySuccess = ActionWithPayload<
  CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoryError = ActionWithPayload<
  CATEGORIES_TYPE.FETCH_CATEGORIES_ERROR,
  Error
>;

export type CategoryAction =
  | FetchCategoryStart
  | FetchCategorySuccess
  | FetchCategoryError;

export const fetchCategoriesStart = (): FetchCategoryStart =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categories: Category[]
): FetchCategorySuccess =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesError = (error: Error): FetchCategoryError =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_ERROR, error);
