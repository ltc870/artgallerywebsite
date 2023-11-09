import { Link } from "react-router-dom";
import rightArrow from "../assets/icon-arrow-right.svg";
import leftArrow from "../assets/icon-arrow-left.svg";
import classes from "./Button.module.css";

const Button = (props) => {
  const { homePageLocation } = props;

  const goToLocationPage = (
    <Link className={classes.link} to="/location/">
      <span className={classes.linkText}>OUR LOCATION</span>
      <span>
        <img
          src={rightArrow}
          alt="Arrow pointing to location page"
          className={classes.linkArrow}
        />
      </span>
    </Link>
  );

  const goToHomePage = (
    <Link className={classes.locationLink} to="/artgallerywebsite/">
      <span>
        <img
          src={leftArrow}
          alt="Arrow pointing to home page"
          className={classes.linkArrow}
        />
      </span>
      <span className={classes.linkText}>GO TO HOME</span>
    </Link>
  );

  return homePageLocation ? goToLocationPage : goToHomePage;
};

export default Button;
