import classes from "../styles/Illstration.module.css";
import signUpImmage from "../assets/images/signup.svg";

export default function Illustration() {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={signUpImmage} alt="Signup" />
      </div>
    </div>
  );
}
