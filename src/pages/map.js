/*----------------------------------------------------------------------------------------------\
|  _____      _   __ _             _ _         ____   ___ ____  _    ______   ___ ____  _  _    |
| /__   \__ _(_) / _\ |_ _   _  __| (_) ___   |___ \ / _ \___ \/ |  / /___ \ / _ \___ \| || |   |
|   / /\/ _` | | \ \| __| | | |/ _` | |/ _ \    __) | | | |__) | | / /  __) | | | |__) | || |_  |
|  / / | (_| | | _\ \ |_| |_| | (_| | | (_) |  / __/| |_| / __/| |/ /  / __/| |_| / __/|__   _| |
|  \/   \__,_|_| \__/\__|\__,_|\__,_|_|\___/  |_____|\___/_____|_/_/  |_____|\___/_____|  |_|   |
|                                                                                               |
\----------------------------------------------------------------------------------------------*/
import { MapContainer, TileLayer, GeoJSON, LayersControl, MinimapControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import Markers from '@site/static/map/Markers.json';
import Rivers from '@site/static/map/Rivers.json';
import Routes from '@site/static/map/Routes.json';
import Map from '@site/static/map/Map.json';

const MapView = () => {
    return (
        <MapContainer center={[0, 0]} zoom={13} style={{ height: "100vh" }}>
            <TileLayer
                url="./map/tiles/{z}/{x}_{y}.jpg"
                attribution='&copy; <a href="https://taistudio.fr/">Tai Studio</a>'
            />
            <LayersControl position="topright">

                <LayersControl.Overlay name="Marker">
                    <GeoJSON data={Markers} pathOptions={{ color: 'green' }} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Rivers">
                    <GeoJSON data={Rivers} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Routes">
                    <GeoJSON data={Routes} pathOptions={{ color: 'yellow' }} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Map">
                    <GeoJSON data={Map} pathOptions={{ color: 'purple' }} />
                </LayersControl.Overlay>

            </LayersControl>
            {/* <MinimapControl position="topright" /> */}
        </MapContainer>
    );
};

export default MapView;