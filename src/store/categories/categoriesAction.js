import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPE } from "./categoriesType";

export const setCategories = (categories) => {
  return createAction(CATEGORIES_TYPE.SET_CATEGORIES, categories);
};
