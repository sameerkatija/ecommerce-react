import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import CategoriesReducer from "./categories/categoriesReducer";
import CartReducer from "./cart/CartReducer";

export const RootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
});
