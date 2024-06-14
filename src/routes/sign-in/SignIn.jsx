import {
  signInWithGooglePopup,
  createuserDocumentFromAuth,
} from "../../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    createuserDocumentFromAuth(res.user);
    console.log(res.user);
  };
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>signin </button>
    </div>
  );
}

export default SignIn;
