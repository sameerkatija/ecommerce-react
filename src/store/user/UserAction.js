import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_TYPES } from "./UserTypes";

export const setCurrentUser = (user) =>
  createAction(USER_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_TYPES.CHECK_USER_SESSION);
export const googleSignInStart = () =>
  createAction(USER_TYPES.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) =>
  createAction(USER_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signOutStart = () => createAction(USER_TYPES.SIGN_OUT_START);
export const signInSuccess = (user) =>
  createAction(USER_TYPES.SIGN_IN_SUCCESS, user);
export const signInFailure = (error) =>
  createAction(USER_TYPES.SIGN_IN_FAILURE, error);

export const signOutSuccess = (user) =>
  createAction(USER_TYPES.SIGN_OUT_SUCCESS, user);

export const signOutFailure = (error) =>
  createAction(USER_TYPES.SIGN_OUT_FAILURE, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_TYPES.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalInformation) =>
  createAction(USER_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalInformation,
  });

export const signUpFailed = (error) =>
  createAction(USER_TYPES.SIGN_UP_FAILED, error);
