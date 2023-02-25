import classes from "./Address.module.css";

const Location = () => {
    return (
        <main className={classes.main}>
            <div className={classes.mainContainer}>
                <h1 className={classes.mainTitle}>Our location</h1>
                <div className={classes.mainAddressSection}>
                    <h2 className={classes.mainAddressStreet}>
                        99 King Street
                    </h2>
                    <p className={classes.mainAddress}>
                        Newport
                        <br />
                        RI 02840
                        <br />
                        United States of America
                    </p>
                    <p className={classes.mainAddressText}>
                        Our newly opened gallery is located near the Edward King
                        House on 99 King Street, the Modern Art Gallery is free
                        to all visitors and open seven days a week from 8am to
                        9pm.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Location;
