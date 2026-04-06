import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = ({ vendors, userLocation }) => {
  return (
    <MapContainer
      center={userLocation}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User marker */}
      <Marker position={userLocation}>
        <Popup>You are here 📍</Popup>
      </Marker>

      {/* Vendors markers */}
      {vendors.map((v) => (
        <Marker
          key={v._id}
          position={[
            v.location.coordinates[1], // lat
            v.location.coordinates[0], // lng
          ]}
        >
          <Popup>
            <b>{v.name}</b> <br />
            {v.category}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;