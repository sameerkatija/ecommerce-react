import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

// import { applyMiddleware, createStore, compose } from "redux";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, RootReducer);

// const composedEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// // export const store = createStore(RootReducer, middleWares);

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistedStore = persistStore(store);
// // export const store = createStore(RootReducer);
