import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";

// const middleWares = applyMiddleware(logger);

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(RootReducer, middleWares);

export const store = createStore(RootReducer, undefined, composedEnhancers);
// export const store = createStore(RootReducer);
