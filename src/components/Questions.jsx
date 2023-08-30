import Answer from "./answers";
import classes from "../styles/Question.module.css";

export default function Questions({ answers = [] }) {
  console.log("Question page render");

  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answer input={false} options={answer.options} />
    </div>
  ));
}
