import { Navigate, Route, Routes, redirect } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import AuthPage from "./routes/auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<NavigationBar />}>
        <Route index={true} element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};
export default App;

const Shop = () => {
  return (
    <div>
      <h1>hhhhhshajshajs shop</h1>
    </div>
  );
};
