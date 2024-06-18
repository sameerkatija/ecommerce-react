import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPE } from "./categoriesType";

export const setCategoriesMap = (categories) => {
  return createAction(CATEGORIES_TYPE.GET_CATEGORIES_TO_MAP, categories);
};
