import Button from "../Button";
import CheckBox from "../checkbox";
import Form from "../form";
import Illustration from "../illustration";
import classes from "../../styles/singUP.module.css";
import TextInput from "../textInput";
import { Link } from "react-router-dom";

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
          <Button><span>Submit Now</span></Button>
          <div class="info">
              Already have an account? <Link to="/login_page">Login</Link> instead.
            </div>
        </Form>
      </div>
    </>
  );
}
