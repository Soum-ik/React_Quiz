import Illustration from "./illustration";
import classes from "../styles/singUP.module.css";
import Form from "./form";
import TextInput from "./textInput";
import CheckBox from "./checkbox";
import Button from "./Button";

export default function SignUP() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration text="signUP" />
        <Form className={`${classes.SignUP}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms & Conditions" />
          <Button>Submit Now</Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
