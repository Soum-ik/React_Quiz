import classes from "../styles/Videos.module.css";
import Video from "./video";
import { Link } from "react-router-dom";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
      <Link to="/Quiz_page">
        <Video />
      </Link>
    </div>
  );
}
