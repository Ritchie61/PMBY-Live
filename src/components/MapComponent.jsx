import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AlertPopup from './AlertPopup';

const MapComponent = ({ alerts }) => {
  return (
    <MapContainer center={[-9.4438, 147.1803]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {alerts.map(alert => (
        <Marker key={alert.id} position={[alert.lat, alert.lng]}>
          <Popup>
            <AlertPopup alert={alert} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
