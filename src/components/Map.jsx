import Button from "./Button";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { myIcon } from "../mappings/icon";
import classes from "./Map.module.css";

const Map = (props) => {
  const { locationPageLocation } = props;

  return (
    <header className={classes.header}>
      <MapContainer
        className={classes.leafletContainer}
        center={[41.48144, -71.31035]}
        zoom={15}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[41.48413, -71.31035]}
          icon={myIcon}
          zIndexOffset={500}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
      <Button locationPageLocation={locationPageLocation} />
    </header>
  );
};

export default Map;
