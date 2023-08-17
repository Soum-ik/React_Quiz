import CheckBox from "./checkbox";
import classes from "../styles/answers.module.css";

export default function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <CheckBox className={classes.answer} text="text answers" />
      </div>
    </>
  );
}
