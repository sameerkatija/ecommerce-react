import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./Auth.scss";

function AuthPage() {
  console.log("Auth hit");
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthPage;