import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import CategoriesReducer from "./categories/categoriesReducer";

export const RootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
});
