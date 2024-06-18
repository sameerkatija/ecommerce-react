import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_TYPES } from "./UserTypes";

export const setCurrentUser = (user) =>
  createAction(USER_TYPES.SET_CURRENT_USER, user);
