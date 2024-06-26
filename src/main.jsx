import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/strip-utils.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
