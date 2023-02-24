import Button from "./Button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { myIcon } from "../mappings/icon";
import classes from "./Map.module.css";

const Map = (props) => {
    const { locationPageLocation } = props;

    return (
        <header>
            <MapContainer
                className={classes.leafletContainer}
                center={[41.48144, -71.31035]}
                zoom={15}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.48144, -71.31035]} icon={myIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <Button locationPageLocation={locationPageLocation} />
        </header>
    );
};

export default Map;
