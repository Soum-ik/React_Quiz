import classes from "../styles/buttton.module.css";

export default function Button({ className, children, ...rest }) {
  return (
    <>
      <button className={`${classes.button} ${className} `} {...rest}>
        {children}
      </button>
    </>
  );
}
