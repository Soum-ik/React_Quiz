import Logo from "../assets/images/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./account";
import { Link } from "react-router-dom";
import "../styles/app.css"

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo"/>
            <h3>Quiz</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
