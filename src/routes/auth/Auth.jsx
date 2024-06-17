import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import { AuthenticationContainerDiv } from "./Auth-styles";

function AuthPage() {
  // console.log("Auth hit");
  return (
    <AuthenticationContainerDiv>
      <SignIn />
      <SignUp />
    </AuthenticationContainerDiv>
  );
}

export default AuthPage;
