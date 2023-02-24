import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    const { homePageLocation } = props;

    return (
        <footer
            className={
                homePageLocation ? classes.footer : classes.locationFooter
            }
        >
            <div className={classes.footerContainer}>
                <h3 className={classes.footerTitle}>
                    Modern <br />
                    Art Gallery
                </h3>
                <p className={classes.footerText}>
                    The Modern Art Gallery is free to all visitors and open
                    seven days a week from 8am to 9pm. Find us at 99 King
                    Street, Newport, USA.
                </p>
                <div className={classes.footerSocialMedia}>
                    <Link>
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            className={
                                homePageLocation
                                    ? classes.socialMedia
                                    : classes.socialMediaLocation
                            }
                        />
                    </Link>

                    <Link>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className={
                                homePageLocation
                                    ? classes.socialMedia
                                    : classes.socialMediaLocation
                            }
                        />
                    </Link>

                    <Link>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className={
                                homePageLocation
                                    ? classes.socialMedia
                                    : classes.socialMediaLocation
                            }
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
