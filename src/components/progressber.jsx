import { useRef, useState } from "react";
import classes from "../styles/progressbar.module.css";
import Button from "./Button";

export default function ProgressBar({ next, progress, prev, submit }) {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);
  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {" "}
          {progress}% Cimplete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOut={toggleTooltip}
            onMouseOver={toggleTooltip}
          ></div>
        </div>
      </div>

      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Question" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
