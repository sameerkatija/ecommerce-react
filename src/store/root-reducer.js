import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./user/UserReducer";

import { CartReducer } from "./cart/CartReducer";
import { CategoriesReducer } from "./categories/categoriesReducer";

export const RootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
});
