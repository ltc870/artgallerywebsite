import { useLocation } from "react-router-dom";
import Map from "../components/Map";
import Address from "../components/Address";
import Footer from "../components/Footer";

const LocationPage = () => {
  const locationPageLocation = useLocation().pathname;

  return (
    <div>
      <Map locationPageLocation={locationPageLocation} />
      <Address />
      <Footer />
    </div>
  );
};

export default LocationPage;
