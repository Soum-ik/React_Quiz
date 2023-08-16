import classes from "../styles/Nav.module.css";
import Account from "./account";
import Logo from "../assets/images/logo-bg.png";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Soumik</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
