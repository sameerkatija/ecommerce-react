import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user-context/UserContext.jsx";
import { ShopProvider } from "./context/shop-context/ShopContext.jsx";
import { CartDropDownProvider } from "./context/cart-dropdown-context/CartDropDownContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <CartDropDownProvider>
            <App />
          </CartDropDownProvider>
        </ShopProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
