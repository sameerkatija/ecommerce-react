const INITIAL_STATE = {
  currentUser: null,
};

export const USER_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("Dispatched", action);
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
