import classes from "../styles/textInput.module.css";

export default function textInput({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> {icon}</span>
    </div>
  );
}
