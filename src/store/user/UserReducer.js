import { USER_TYPES } from "./UserTypes";

const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
