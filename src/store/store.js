import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const middleWares = applyMiddleware(logger);

// const loggerMiddleWare = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log({ "Type: ": action.type, "Payload: ": action.payload });
//   console.log("current State: ", store.getState());

//   next(action);

//   console.log("next State: ", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(RootReducer, middleWares);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistedStore = persistStore(store);
// export const store = createStore(RootReducer);
