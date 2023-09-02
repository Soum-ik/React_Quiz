import classes from "../styles/summary.module.css";
import succesImage from "../assets/images/success.png";
import useFetch from "../database/hooks/useFetch";
// import { useMemo } from "react";

export default function Summary({ noq, score }) {
  const getKeyword = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "Good";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "Good";
    } else {
      return "Exllecnet";
    }
  };

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    {
      headers: import.meta.env.VITE_PIXCAL_API_KEY,
    }
  );

  const img = result ? result.photos[0].src.large : succesImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={classes.badge}>loading your bedge....</div>}
      {error && <div className={classes.badge}>An error encored</div>}

      <div className={classes.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
}
