import { createContext, useEffect, useReducer } from "react";
import {
  createuserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducer/reducer.utils";

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
      throw new Error(`unhandled type ${type} in the user reducer`);
  }
};

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    console.log(user);
    dispatch({ type: USER_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createuserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
