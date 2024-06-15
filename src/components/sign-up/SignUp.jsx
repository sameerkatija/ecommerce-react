import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import FormInput from "../form-inputs/FormInput";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
import "./SignUp.scss";
import Button from "../button/Button";
function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, displayName } = formFields;
    try {
      if (password !== confirmPassword) {
        alert("pass mismatch");
        return;
      }
      if (!email || !password || !displayName) {
        alert("missing");
        return;
      }
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      createuserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your Email and password</span>
      <form onSubmit={handleSubmit} method="POST">
        <FormInput
          label="Display Name:"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password:"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password:"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
