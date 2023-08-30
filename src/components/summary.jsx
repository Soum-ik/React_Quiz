import classes from "../styles/summary.module.css";
import resultImagge from "../assets/images/success.png";

export default function Summary({ noq, score }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={resultImagge} alt="Success" />
      </div>
    </div>
  );
}
