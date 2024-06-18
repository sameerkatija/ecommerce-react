import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";

// const middleWares = applyMiddleware(logger);

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log({ "Type: ": action.type, "Payload: ": action.payload });
  console.log("current State: ", store.getState());

  next(action);

  console.log("next State: ", store.getState());
};

const middleWares = [loggerMiddleWare];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(RootReducer, middleWares);

export const store = createStore(RootReducer, undefined, composedEnhancers);
// export const store = createStore(RootReducer);
