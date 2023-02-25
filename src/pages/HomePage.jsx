import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const HomePage = () => {
    const homePageLocation = useLocation().pathname;

    return (
        <div>
            <Header homePageLocation={homePageLocation} />
            <Main />
            <Footer homePageLocation={homePageLocation} />
        </div>
    );
};

export default HomePage;
