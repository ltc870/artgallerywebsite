import { Link } from "react-router-dom";
import rightArrow from "../assets/icon-arrow-right.svg";
import leftArrow from "../assets/icon-arrow-left.svg";
import classes from "./Button.module.css";

const Button = (props) => {
    const { homePageLocation } = props;

    return (
        <Link
            className={classes.link}
            to={homePageLocation ? "/location" : "/"}
        >
            <span className={classes.linkText}>
                {homePageLocation ? "OUR LOCATION" : "BACK TO HOME"}
            </span>
            <span>
                <img
                    className={classes.linkArrow}
                    src={homePageLocation ? rightArrow : leftArrow}
                    alt="Arrow pointing to the location page"
                />
            </span>
        </Link>
    );

    // if (locationPageLocation) {
    //     return (
    //         <Link className={classes.link} to="/">
    //             <span className={classes.linkText}>BACK TO HOME</span>
    //             <span>
    //                 <img
    //                     className={classes.linkArrow}
    //                     src={leftArrow}
    //                     alt="Arrow pointing to the home page"
    //                 />
    //             </span>
    //         </Link>
    //     );
    // }
};

export default Button;
