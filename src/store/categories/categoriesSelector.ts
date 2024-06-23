import { createSelector } from "reselect";
import { CategoryState } from "./categoriesReducer";
import { CategoryMap } from "./categoriesType";

const selectCategoryReducer = (state: any): CategoryState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (catgoriesSlice) => catgoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectIscategoryLoading = createSelector(
  [selectCategoryReducer],
  (category) => category.isLoading
);
