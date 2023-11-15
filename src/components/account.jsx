import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "./context/Auth_contexts";

export default function Acccount() {
  const { currentUser, logOut } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className="userName">{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logOut}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <Link to="/singUp_page">Signup</Link>
          <Link to="/login_page">Login </Link>
        </>
      )}
    </div>
  );
}
