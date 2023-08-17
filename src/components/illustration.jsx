import classes from "../styles/Illstration.module.css";
import signUpImage from "../assets/images/signup.svg";
// import loginImage from "../assets/images/login.svg";
export default function Illustration({ text }) {
  return (
    <>
      <div className={classes.illustration}>
        <img src={signUpImage} alt={text} />
      </div>
    </>
  );
}
