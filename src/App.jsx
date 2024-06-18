import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import AuthPage from "./routes/auth/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import {
  createuserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/UserAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createuserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
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
