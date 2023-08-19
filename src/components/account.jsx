import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";

export default function Acccount() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/singUp_page">Signup</Link>
      <Link to="/login_page">Login </Link>
      {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
