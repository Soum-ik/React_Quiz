import classes from "../../styles/login.module.css";
import Button from "../Button";
import Form from "../form";
import Illustration from "../illustration";
import TextInput from "../textInput";
import { Link, Route, Routes } from "react-router-dom";
import SINg from "./sign";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration text="login" />
        <Form className={classes.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account?
            <Link to="/SingUp_page"> Sing UP </Link>
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}
