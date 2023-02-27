import mobileImage1 from "../assets/mobile/image-grid-1.jpg";
import mobileImage12 from "../assets/mobile/image-grid-1@2x.jpg";
import tabletImage1 from "../assets/tablet/image-grid-1.jpg";
import tabletImage12 from "../assets/tablet/image-grid-1@2x.jpg";
import desktopImage1 from "../assets/desktop/image-grid-1.jpg";
import desktopImage12 from "../assets/desktop/image-grid-1@2x.jpg";
import mobileImage2 from "../assets/mobile/image-grid-2.jpg";
import mobileImage22 from "../assets/mobile/image-grid-2@2x.jpg";
import tabletImage2 from "../assets/tablet/image-grid-2.jpg";
import tabletImage22 from "../assets/tablet/image-grid-2@2x.jpg";
import desktopImage2 from "../assets/desktop/image-grid-2.jpg";
import desktopImage22 from "../assets/desktop/image-grid-2@2x.jpg";
import mobileImage3 from "../assets/mobile/image-grid-3.jpg";
import mobileImage32 from "../assets/mobile/image-grid-3@2x.jpg";
import tabletImage3 from "../assets/tablet/image-grid-3.jpg";
import tabletImage32 from "../assets/tablet/image-grid-3@2x.jpg";
import desktopImage3 from "../assets/desktop/image-grid-3.jpg";
import desktopImage32 from "../assets/desktop/image-grid-3@2x.jpg";
import classes from "./Main.module.css";

const Main = () => {
    return (
        <main className={classes.mainContainer}>
            <div className={classes.mainSmallGrid}>
                <picture>
                    <source
                        media="(min-width: 1110px)"
                        srcSet={`${desktopImage1}, ${desktopImage12}`}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={`${tabletImage1}, ${tabletImage12}`}
                    />
                    <img
                        srcSet={`${mobileImage1}, ${mobileImage12}`}
                        src={mobileImage1}
                        alt="An Indigenous Art Gallery."
                        className={classes.mainImgOne}
                    />
                </picture>
                <div className={classes.mainTextContainer}>
                    <div className={classes.textContainer}>
                        <h2 className={classes.mainTitle}>
                            Your day at the gallery
                        </h2>
                        <p className={classes.mainText}>
                            Wander through our distinct collections and find new
                            insights about our artists. Dive into the details of
                            their creative process.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.mainBigGrid}>
                <picture>
                    <source
                        media="(min-width: 1110px)"
                        srcSet={`${desktopImage2}, ${desktopImage22}`}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={`${tabletImage2}, ${tabletImage22}`}
                    />
                    <img
                        srcSet={`${mobileImage2}, ${mobileImage22}`}
                        src={mobileImage2}
                        alt="A bench in front of a picture"
                        className={classes.mainImgTwo}
                    />
                </picture>
                <picture className={classes.mainImgThreePic}>
                    <source
                        media="(min-width: 1110px)"
                        srcSet={`${desktopImage3}, ${desktopImage32}`}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={`${tabletImage3}, ${tabletImage32}`}
                    />
                    <img
                        srcSet={`${mobileImage3}, ${mobileImage32}`}
                        src={mobileImage3}
                        alt="People within the art gallery looking at pictures."
                        className={classes.mainImgThree}
                    />
                </picture>
                <div className={classes.mainSubtextContainer}>
                    <h2 className={classes.mainSubtitle}>
                        Come &amp; be inspired
                    </h2>
                    <p className={classes.mainSubtext}>
                        We’re excited to welcome you to our gallery and see
                        how our collections influence you.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;
