import mobileHeroImage from "../assets/mobile/image-hero.jpg";
import mobileHeroImage2 from "../assets/mobile/image-hero@2x.jpg";
import Button from "./Button";
import classes from "./Header.module.css";

const Header = (props) => {
  const { homePageLocation } = props;

  return (
    <header className={classes.header}>
      <img
        className={classes.headerHeroImage}
        src={mobileHeroImage}
        alt="A man and a woman looking at a painting of an elderly woman."
      />

      <div className={classes.headerContainer}>
        <div className={classes.headerBox}>
          <h1 className={classes.headerTitle}>
            Modern <br /> Art Gallery
          </h1>
          <div className={classes.headerTextContainer}>
            <p className={classes.headerText}>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <Button homePageLocation={homePageLocation} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
