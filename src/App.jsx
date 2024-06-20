import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import AuthPage from "./routes/auth/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";

import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/UserAction";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<NavigationBar />}>
        <Route index={true} element={<HomePage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
