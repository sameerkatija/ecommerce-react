import SignUp from "../../components/sign-up/SignUp";
import {
  signInWithGooglePopup,
  createuserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    createuserDocumentFromAuth(res.user);
    console.log(res.user);
  };
  const logGoogleRediectUser = async () => {
    const res = await signInWithGoogleRedirect();
    console.log(res.user);
  };
  return (
    <div>
      <h1>Signin</h1>
      <SignUp />
      <button onClick={logGoogleUser}>signin </button>
      <button onClick={logGoogleRediectUser}>signin with redirect </button>
    </div>
  );
}

export default SignIn;
