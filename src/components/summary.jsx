import classes from "../styles/summary.module.css";
import resultImagge from "../assets/images/success.png";

export default function Summary() {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={resultImagge} alt="Success" />
      </div>
    </div>
  );
}
