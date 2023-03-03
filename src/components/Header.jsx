import mobileHeroImage from "../assets/mobile/image-hero.jpg";
import mobileHeroImage2 from "../assets/mobile/image-hero@2x.jpg";
import tabletHeroImage from "../assets/tablet/image-hero.jpg";
import tabletHeroImage2 from "../assets/tablet/image-hero@2x.jpg";
import desktopHeroImage from "../assets/desktop/image-hero.jpg";
import desktopHeroImage2 from "../assets/desktop/image-hero@2x.jpg";
import Button from "./Button";
import classes from "./Header.module.css";

const Header = (props) => {
    const { homePageLocation } = props;

    return (
        <header className={classes.header}>
            <picture className={classes.headerHeroPicOne}>
                <source
                    media="(min-width: 1024px)"
                    srcSet={`${desktopHeroImage}, ${desktopHeroImage2} 2x`}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={`${tabletHeroImage}, ${tabletHeroImage2} 2x`}
                />
                <img
                    className={classes.headerHeroImage}
                    srcSet={`${mobileHeroImage}, ${mobileHeroImage2} 2x`}
                    src={mobileHeroImage}
                    alt="A man and a woman looking at a painting of an elderly woman."
                />
            </picture>

            <div className={classes.headerContainer}>
                <h1 className={classes.headerTitle}>
                    Modern <br /> Art Gallery
                </h1>
                <div className={classes.headerTextContainer}>
                    <p className={classes.headerText}>
                        The arts in the collection of the Modern Art Gallery all
                        started from a spark of inspiration. Will these pieces
                        inspire you? Visit us and find out.
                    </p>
                    <Button homePageLocation={homePageLocation} />
                </div>
            </div>
        </header>
    );
};

export default Header;
