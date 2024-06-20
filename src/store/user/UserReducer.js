import { USER_TYPES } from "./UserTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_TYPES.SIGN_IN_FAILURE:
    case USER_TYPES.SIGN_OUT_FAILURE:
    case USER_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
