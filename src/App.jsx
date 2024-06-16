import { Navigate, Route, Routes, redirect } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import AuthPage from "./routes/auth/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<NavigationBar />}>
        <Route index={true} element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
