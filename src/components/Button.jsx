import classes from "../styles/buttton.module.css";

export default function Button({children}) {
    console.log(children);
  return (
    <>
      <div className={classes.button}>
        <span>{children}</span>
      </div>
    </>
  );
}
