import CheckBox from "./checkbox";
import classes from "../styles/answers.module.css";
import { Fragment } from "react";

export default function Answers({ options = [], handleChange, input }) {
  console.log("answer page render", input);
  return (
    <>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <Fragment key={index}>
            {input ? (
              <CheckBox
                key={index}
                className={classes.answer}
                text={option.title}
                value={index}
                checked={option.checked}
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <CheckBox
                key={index}
                className={`${classes.answer} ${
                  option.correct
                    ? classes.correct
                    : option.checked
                    ? classes.wrong
                    : null
                }`}
                text={option.title}
                defaultChecked={option.checked}
                disabled
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
