import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { CartDropDownProvider } from "./context/cart-dropdown-context/CartDropDownContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartDropDownProvider>
          <App />
        </CartDropDownProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
